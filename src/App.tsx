import "./App.css";
import { useEffect, useState } from "react";
import Cover from "./components/cover";
import Arrum from "./components/arrum";
import Opening from "./components/opening";
import Ending from "./components/ending";
import Gallery from "./components/gallery";
import TheDate from "./components/date";
import Bride from "./components/bride";
import Gift from "./components/gift";
import Navigation from "./components/navigation";
import MusicPlayer from "./components/music";

function App() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // window.scrollTo({ top: 0, behavior: "instant" });
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div className="flex flex-col relative">
      <Cover open={open} onClose={() => setOpen(false)} />
      <Opening open={open} />
      <Arrum />
      <Bride />
      <TheDate />
      <Gallery />
      <Gift />
      <Ending />
      {!open && <Navigation />}
      <MusicPlayer />
    </div>
  );
}

export default App;
