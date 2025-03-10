const HLS_SRC = "/music/music.m3u8";

class GlobalAudioPlayer {
  private static instance: GlobalAudioPlayer;
  private audio: HTMLAudioElement | null = null;
  private hls: any = null; // Will hold the HLS.js instance
  private _isPlaying: boolean = false;
  private _isLoading: boolean = false;
  private listeners: Set<
    (state: { isPlaying: boolean; isLoading: boolean }) => void
  > = new Set();

  private constructor() {
    this.initializeAudio();
  }

  private async initializeHLS() {
    // Dynamically import HLS.js (you'll need to add this to your project)
    if (typeof window !== "undefined") {
      try {
        // Check if HLS is natively supported
        const isHLSSupported = document
          .createElement("video")
          .canPlayType("application/vnd.apple.mpegurl");

        if (isHLSSupported) {
          // Use native HLS support
          this.audio = new Audio(HLS_SRC);
        } else {
          // Use HLS.js
          const HLS = (await import("hls.js")).default;

          if (HLS.isSupported()) {
            this.audio = new Audio();
            this.hls = new HLS({
              maxBufferLength: 30, // 30 seconds max buffer
              maxMaxBufferLength: 60, // 60 seconds absolute max
              enableWorker: true, // Use web workers for better performance
              lowLatencyMode: true, // Reduce latency
              backBufferLength: 30, // Keep 30 seconds of backward buffer
            });

            this.hls.attachMedia(this.audio);
            this.hls.on(HLS.Events.MEDIA_ATTACHED, () => {
              this.hls.loadSource(HLS_SRC);
            });

            this.hls.on(HLS.Events.MANIFEST_PARSED, () => {
              this._isLoading = false;
              this.notifyListeners();
            });

            this.hls.on(HLS.Events.ERROR, (_: any, data: any) => {
              console.error("HLS error:", data);
              if (data.fatal) {
                switch (data.type) {
                  case HLS.ErrorTypes.NETWORK_ERROR:
                    // Try to recover network error
                    this.hls.startLoad();
                    break;
                  case HLS.ErrorTypes.MEDIA_ERROR:
                    // Try to recover media error
                    this.hls.recoverMediaError();
                    break;
                  default:
                    // Cannot recover
                    this.hls.destroy();
                    break;
                }
              }
            });
          }
        }
      } catch (error) {
        console.error("Failed to initialize HLS:", error);
        // Fallback to regular audio
        this.audio = new Audio("/music/music.mp3");
      }
    }
  }

  private initializeAudio() {
    // Start with a regular audio element as fallback
    this.audio = new Audio("/music/music.mp3");

    // Set properties
    if (this.audio) {
      this.audio.preload = "auto"; // Change to "none" or "metadata" for less aggressive loading
      this.audio.loop = true;

      // Set up event listeners
      this.audio.addEventListener("playing", () => {
        this._isPlaying = true;
        this._isLoading = false;
        this.notifyListeners();
      });

      this.audio.addEventListener("pause", () => {
        this._isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener("ended", () => {
        this._isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener("waiting", () => {
        this._isLoading = true;
        this.notifyListeners();
      });

      this.audio.addEventListener("canplaythrough", () => {
        this._isLoading = false;
        this.notifyListeners();
      });

      this.audio.addEventListener("error", (e) => {
        console.error("Audio playback error:", e);
        this._isPlaying = false;
        this._isLoading = false;
        this.notifyListeners();
      });
    }

    // Try to initialize HLS (will replace regular audio if successful)
    this.initializeHLS();
  }

  public static getInstance(): GlobalAudioPlayer {
    if (!GlobalAudioPlayer.instance) {
      GlobalAudioPlayer.instance = new GlobalAudioPlayer();
    }
    return GlobalAudioPlayer.instance;
  }

  public play(): void {
    if (this.audio && !this._isPlaying) {
      this._isLoading = true;
      this.notifyListeners();

      this.audio
        .play()
        .then(() => {
          this._isPlaying = true;
          this._isLoading = false;
          this.notifyListeners();
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
          this._isLoading = false;
          this.notifyListeners();
        });
    }
  }

  public pause(): void {
    if (this.audio && this._isPlaying) {
      this.audio.pause();
      this._isPlaying = false;
      this.notifyListeners();
    }
  }

  public toggle(): void {
    if (this._isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public get isPlaying(): boolean {
    return this._isPlaying;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  public get currentTime(): number {
    return this.audio ? this.audio.currentTime : 0;
  }

  public seek(time: number): void {
    if (this.audio) {
      this.audio.currentTime = Math.max(
        0,
        Math.min(time, this.audio.duration || 0),
      );
    }
  }

  public subscribe(
    callback: (state: { isPlaying: boolean; isLoading: boolean }) => void,
  ): () => void {
    this.listeners.add(callback);
    // Immediately call with current state
    callback({ isPlaying: this._isPlaying, isLoading: this._isLoading });
    // Return unsubscribe function
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((callback) => {
      callback({ isPlaying: this._isPlaying, isLoading: this._isLoading });
    });
  }

  public destroy(): void {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }

    if (this.audio) {
      this.audio.pause();
      this.audio.src = "";
      this.audio = null;
    }

    this.listeners.clear();
  }
}

export const globalAudio = GlobalAudioPlayer.getInstance();

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    globalAudio.destroy();
  });
}
