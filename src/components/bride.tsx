import OrnamentalDivider from "./divider";

const Bride = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black/70 px-8 gap-4">
      <OrnamentalDivider symbol="flower" />
      <div className="flex flex-col w-full">
        <div className="flex items-end gap-3">
          <img
            src="gallery/the_bride.webp"
            width={229}
            height={300}
            className="frame-1"
          />
        </div>
        <span className="text-2xl">Anjani Prima Ningsih</span>
        <p>
          Putri dari Bpk. Suparman & Ibu Sumiasih <br /> dari Tulungagung,
          Indonesia
        </p>
      </div>
      <div className="flex flex-col items-end w-full mt-4">
        <div className="flex items-end gap-3">
          <img
            src="gallery/the_groom.webp"
            width={229}
            height={300}
            className="frame-1"
          />
        </div>
        <span className="text-2xl">Syahril Andika Pratama</span>
        <p className="text-end">
          Putra dari Bpk. Nanang Setiawan & Ibu Neti Herawati <br /> dari Kota
          Batu, Indonesia
        </p>
      </div>
    </section>
  );
};

export default Bride;
