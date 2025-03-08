import bismillah from "../assets/bismillah.svg";
import { CalendarArrowDown } from "lucide-react";
import AnimatedEmblem from "./emblem";

const Arrum = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black/70 px-8 gap-4 pb-4">
      <img src={bismillah} className="w-3/5 mt-10" />
      <p className="text-justify text-white/85">
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <span>Q.S. Ar-Rum : 21</span>

      <div className="flex flex-col items-center tangerine-regular text-[45px]/6 mt-16 mb-4 relative w-[150px] h-[150px]">
        <span className="absolute top-[50px] left-[20px]">A</span>
        <span className="absolute bottom-[55px] right-[30px]">A</span>
        <div className="absolute top-0 left-0 w-[150px] h-[150px]">
          <AnimatedEmblem />
        </div>
      </div>
      <span className="algin-center tracking-[2px] text-white/85">
        Kamis, 10 April 2025
      </span>
      <button className="flex items-center gap-2">
        <CalendarArrowDown size={16} strokeWidth={1.7} />
        Simpan Tanggalnya
      </button>
    </section>
  );
};

export default Arrum;
