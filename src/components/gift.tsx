import { Mail } from "lucide-react";
import DebitCard from "./debit-card";

const Gift = () => {
  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=6288970398791&text=hai+saya+%5Bnama%5D+mau+konfirmasi+pengiriman+amplop+online+sebesar+%5B00.000%5D+mohon+di+cek+di+mobile+banking+semoga+berkah+ya+acaranya&type=phone_number&app_absent=0";
  };

  return (
    <section className="flex flex-col h-screen items-center w-full bg-black/70 px-8 py-8 gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h1 className="text-3xl mb-4 sm:mb-0">Wedding Gift</h1>
      </div>
      <p className="text-center">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </p>
      <DebitCard
        accountNumber="2680272118"
        bankName="bca"
        beneficiaryName="ANJANI PRIMA NINGSIH"
      />
      <DebitCard
        accountNumber="1780002578207"
        bankName="mandiri"
        beneficiaryName="SYAHRIL ANDIKA PRATAMA"
      />
      <button className="mt-8 flex items-center gap-2" onClick={handleClick}>
        <Mail size={16} strokeWidth={1.7} />
        Konfirmasi Amplop
      </button>
    </section>
  );
};

export default Gift;
