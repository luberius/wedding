import * as motion from "motion/react-client";
import { MailOpen } from "lucide-react";
import { AnimatePresence } from "motion/react";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const Cover = ({ open, onClose }: IProps) => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name") || "Tamu";

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          id="home"
          className="h-screen flex flex-col justify-end items-center fixed top-0 left-0 w-full z-10"
          exit={{
            opacity: 0,
            scale: 1.4,
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <span className="mt-18">Pernikahan Dari</span>
          <div className="flex flex-col items-center tangerine-regular text-[40px]/10 mt-10 flex-1">
            <span className="-ml-10">Anjani</span>
            <span className="text-3xl">&</span>
            <span className="ml-10">Andika</span>
          </div>
          <div className="flex flex-col items-center mb-32">
            <span>Kepada yth.</span>
            <span className=" text-white text-xl">{name}</span>
            <button className="mt-8 flex items-center gap-2" onClick={onClose}>
              <MailOpen size={16} strokeWidth={1.7} />
              Buka Undangan
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Cover;
