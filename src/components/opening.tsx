import Counter from "./counter";
import AnimatedEmblem from "./emblem";

interface IProps {
  open: boolean;
}

const Opening = ({ open }: IProps) => {
  return (
    <section
      id="opening"
      className="flex flex-col h-screen items-center justify-end w-full"
    >
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col items-center tangerine-regular text-[45px]/6 mt-16 mb-4 relative w-[150px] h-[150px]">
          <span className="absolute top-[50px] left-[20px]">A</span>
          <span className="absolute bottom-[55px] right-[30px]">A</span>
          <div className="absolute top-0 left-0 w-[150px] h-[150px]">
            <AnimatedEmblem open={open} />
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src="/opening/DSCF6870.webp"
            width={130}
            className="-rotate-3 shadow-amber-300 shadow-md -translate-y-1.5"
          />
          <img
            src="/opening/MEITU_20250309_164028180.webp"
            width={130}
            className="rotate-12 shadow-md shadow-amber-400"
          />
        </div>
      </div>

      <div className="flex flex-col items-center tangerine-regular text-[40px]/10 mb-4 border-b w-[80dvw] pb-4">
        <span className="">Anjani &</span>
        <span className="">Andika</span>
      </div>
      <Counter />
      <span className="algin-center mb-32 tracking-[4px] text-white">
        10 April 2025
      </span>
    </section>
  );
};

export default Opening;
