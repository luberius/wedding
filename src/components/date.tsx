import { Pin } from "lucide-react";
import OrnamentalDivider from "./divider";
import corner from "../assets/corner-1.png";

const TheDate = () => {
  const handleClick = () => {
    window.open("https://maps.app.goo.gl/BsXs1as7Wuz3BY6x9", "_blank")?.focus();
  };

  return (
    <section className="flex flex-col items-center w-full bg-black/70 px-8 gap-4 pt-2 pb-8">
      <OrnamentalDivider symbol="star" />
      <div className="relative flex p-12 bg-[#460809] flex-col items-start w-full gap-1 -mt-4 rounded-md">
        <img
          src={corner}
          width={60}
          className="absolute top-0 left-0 ornament"
        />
        <img
          src={corner}
          width={60}
          className="absolute bottom-0 right-0 rotate-180 ornament"
        />
        <h3 className="opacity-90 text-white text-2xl">Akad Nikah</h3>
        <span className="text-lg">Kamis, 10 April 2025</span>
        <span className="text-md">Pukul 10.00 WIB</span>
        <p className="text-sm">
          Bandil, Gedangan, Campurdarat, Tulungagung Regency, East Java 66272
        </p>
        <div className="border-t border-[var(--main-color)] w-full mb-2 mt-6" />
        <div className="flex flex-col w-full gap-1 items-end mt-4">
          <h3 className="opacity-90 text-white text-2xl">Resepsi</h3>
          <span className="text-lg">Kamis, 10 April 2025</span>
          <span className="text-md">Pukul 12.00 WIB</span>
          <p className="text-sm text-end">
            Bandil, Gedangan, Campurdarat, Tulungagung Regency, East Java 66272
          </p>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d60440.828016545136!2d111.79026437587598!3d-8.223461794442033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTInMTIuNSJTIDExMcKwNDknMTguNSJF!5e0!3m2!1sen!2sid!4v1741472629960!5m2!1sen!2sid"
        width="100%"
        height="300"
        loading="lazy"
        className="mt-4"
      ></iframe>

      <button
        className="flex items-center gap-2 mt-4 cursor-pointer"
        onClick={handleClick}
      >
        <Pin size={16} strokeWidth={1.7} />
        Simpan Lokasi
      </button>
    </section>
  );
};

export default TheDate;
