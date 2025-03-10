import { Mail } from "lucide-react";
import { motion } from "motion/react";
import DebitCard from "./debit-card";

const Gift = () => {
  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=628970398791&text=hai+saya+%5Bnama%5D+mau+konfirmasi+pengiriman+amplop+online+sebesar+%5B00.000%5D+mohon+di+cek+di+mobile+banking+semoga+berkah+ya+acaranya&type=phone_number&app_absent=0";
  };

  return (
    <section
      id="gift"
      className="flex flex-col items-center w-dvw bg-black/70 px-8 py-8 gap-4"
    >
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl mb-4 sm:mb-0">Wedding Gift</h1>
      </motion.div>

      <motion.p
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </motion.p>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.4,
        }}
      >
        <DebitCard
          accountNumber="2680272118"
          bankName="bca"
          beneficiaryName="ANJANI PRIMA NINGSIH"
        />
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.4,
        }}
      >
        <DebitCard
          accountNumber="1780002578207"
          bankName="mandiri"
          beneficiaryName="SYAHRIL ANDIKA PRATAMA"
        />
      </motion.div>

      <motion.button
        className="mt-8 flex items-center gap-2"
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: 0.5,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail size={16} strokeWidth={1.7} />
        Konfirmasi Amplop
      </motion.button>
    </section>
  );
};

export default Gift;
