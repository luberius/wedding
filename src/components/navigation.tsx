import { Home, Heart, Calendar, Gift } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center bg-[var(--main-color)] rounded-t-md shadow-lg px-2 py-2 space-x-1">
        <button
          onClick={() => scrollToSection("opening")}
          className="p-2 text-black hover:text-pink-500 transition-colors"
          aria-label="Home"
        >
          <Home size={18} />
        </button>

        <button
          onClick={() => scrollToSection("bride")}
          className="p-2 text-black hover:text-pink-500 transition-colors"
          aria-label="Bride"
        >
          <Heart size={18} />
        </button>

        <button
          onClick={() => scrollToSection("date")}
          className="p-2 text-black hover:text-pink-500 transition-colors"
          aria-label="Event"
        >
          <Calendar size={18} />
        </button>

        <button
          onClick={() => scrollToSection("gift")}
          className="p-2 text-black hover:text-pink-500 transition-colors"
          aria-label="Gift"
        >
          <Gift size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
