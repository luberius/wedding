import { motion } from "motion/react";

const Ending = () => {
  return (
    <section
      id="ending"
      className="relative flex flex-col h-screen items-center w-full overflow-clip"
    >
      <motion.p
        className="text-center mt-16 px-16 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Atas kehadiran dan do'a restu dari Bapak/Ibu/Saudara/i sekalian, kami
        mengucapkan Terima Kasih.
      </motion.p>

      <motion.span
        className="mt-8 w-full text-center"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Kami yang berbahagia
      </motion.span>

      <motion.div
        className="flex flex-col items-center tangerine-regular text-[40px]/10 mb-4 w-full pb-4 mt-8 text-white z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          Anjani &
        </motion.span>
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          Andika
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Ending;
