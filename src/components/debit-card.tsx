import { useState } from "react";
import { Check } from "lucide-react";

interface IProps {
  accountNumber: string;
  beneficiaryName: string;
  bankName: string;
}

const DebitCard = ({ accountNumber, beneficiaryName, bankName }: IProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="bg-gradient-to-r from-rose-800 to-red-900 rounded-xl shadow-lg overflow-hidden text-white p-6 relative h-56">
        {/* Card chip and contactless symbol */}
        <div className="flex justify-between mb-8">
          <div className="w-12 h-8 bg-yellow-300 rounded-md border border-yellow-500"></div>
        </div>

        {/* Account number */}
        <div className="mb-6">
          <div className="flex items-center text-xl font-mono tracking-wider">
            {accountNumber}
            <button
              onClick={handleCopyClick}
              className="ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors inline-flex items-center justify-center"
              aria-label="Copy account number"
            >
              {copied ? (
                <Check size={14} />
              ) : (
                <span className="text-xs text-white tracking-normal">Copy</span>
              )}
            </button>
          </div>
        </div>

        {/* Cardholder name and expiry */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-80 mb-1">ATAS NAMA</p>
            <p className="font-medium tracking-wide">{beneficiaryName}</p>
          </div>
        </div>

        {/* Bank logo */}
        <div className="absolute top-6 right-6">
          <img src={`/${bankName}.svg`} width={80} />
        </div>

        {/* Card network logo (e.g. Visa, Mastercard) placeholder */}
        <div className="absolute bottom-8 right-4">
          <div className="w-12 h-8 rounded flex items-center justify-center text-xs font-bold">
            <img src="/gpn.svg" width={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
