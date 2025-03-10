import { useState } from "react";
import bismillah from "../assets/bismillah.svg";
import { CalendarArrowDown, Check } from "lucide-react";
import AnimatedEmblem from "./emblem";

const Arrum = () => {
  const [saved, setSaved] = useState(false);

  // Function to handle save date functionality
  const handleSaveDate = () => {
    const eventTitle = "Nikahan Anjani & Andika";
    const eventDate = new Date(2025, 3, 10, 12, 0, 0); // April 10, 2025, 12:00 PM
    const eventDetails = {
      title: eventTitle,
      start: eventDate,
      end: new Date(2025, 3, 10, 22, 0, 0), // End at 10:00 PM
      location: "https://maps.app.goo.gl/AzB5rrYTxAv2xFAs9",
    };

    // Create calendar file content
    const icsContent = createICSFile(eventDetails);

    // Create blob and download link
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const href = URL.createObjectURL(blob);

    // Create and trigger download
    const link = document.createElement("a");
    link.href = href;
    link.download = `${eventTitle}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // Reset saved state after 2 seconds
  };

  // Function to create ICS file content
  const createICSFile = (event: any) => {
    const formatDate = (date: any) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "");
    };

    return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${formatDate(event.start)}
DTEND:${formatDate(event.end)}
LOCATION:${event.location}
DESCRIPTION:You are cordially invited to our wedding ceremony.
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;
  };

  return (
    <section className="flex flex-col items-center w-full bg-black/70 px-8 gap-4 pb-4">
      <img src={bismillah} className="w-3/5 mt-10" alt="Bismillah" />
      <p className="text-justify text-white/85">
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </p>
      <span className="text-white/85">Q.S. Ar-Rum : 21</span>
      <div className="flex flex-col items-center tangerine-regular text-[45px]/6 mt-16 mb-4 relative w-[150px] h-[150px]">
        <span className="absolute top-[50px] left-[20px]">A</span>
        <span className="absolute bottom-[55px] right-[30px]">A</span>
        <div className="absolute top-0 left-0 w-[150px] h-[150px]">
          <AnimatedEmblem />
        </div>
      </div>
      <span className="tracking-[2px] text-white/85 text-center">
        Kamis, 10 April 2025
      </span>
      <button
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/85 px-4 py-2 transition-colors duration-300"
        onClick={handleSaveDate}
      >
        {saved ? (
          <>
            <Check size={16} strokeWidth={1.7} />
            Tersimpan
          </>
        ) : (
          <>
            <CalendarArrowDown size={16} strokeWidth={1.7} />
            Simpan Tanggalnya
          </>
        )}
      </button>
    </section>
  );
};

export default Arrum;
