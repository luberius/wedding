const Ending = () => {
  return (
    <section className="relative flex flex-col h-screen items-center w-full overflow-clip">
      <p className="text-center mt-16 px-16 mb-4 ">
        Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami
        mengucapkan Terima Kasih.
      </p>
      <span className="mt-8 bg-red-950 w-full text-center">
        Kami yang berbahagia
      </span>
      <div className="flex flex-col items-center tangerine-regular text-[40px]/10 mb-4 w-full pb-4 pt-28 text-white z-10 gradient-ending">
        <span className="">Anjani &</span>
        <span className="">Andika</span>
      </div>
      <img
        src="/public/gallery/salam.webp"
        className="absolute bottom-[-90px] left-0 salam"
      />
    </section>
  );
};

export default Ending;
