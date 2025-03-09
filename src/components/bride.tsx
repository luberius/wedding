import { motion } from "motion/react";
import OrnamentalDivider from "./divider";

const Bride = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black/70 px-8 gap-4">
      <OrnamentalDivider symbol="flower" />

      <motion.div
        className="flex flex-col w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex items-end gap-3">
          <motion.img
            src="gallery/the_bride.webp"
            width={229}
            height={300}
            className="frame-1"
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        <motion.span
          className="text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Anjani Prima Ningsih
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Putri dari Bpk. Suparman & Ibu Sumiasih <br /> dari Tulungagung,
          Indonesia
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col items-end w-full mt-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-end gap-3">
          <motion.img
            src="gallery/the_groom.webp"
            width={229}
            height={300}
            className="frame-1"
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        <motion.span
          className="text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Syahril Andika Pratama
        </motion.span>
        <motion.p
          className="text-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Putra dari Bpk. Nanang Setiawan & Ibu Neti Herawati <br /> dari Kota
          Batu, Indonesia
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Bride;
