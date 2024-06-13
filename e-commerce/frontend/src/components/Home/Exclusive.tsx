const Exclusive = () => {
  return (
    <div className="p-4 lg:p-10">
      <div className="grid grid-cols-2 gap-0">
        <div className="bg-gray-100 relative rounded-l-lg overflow-hidden">
          <img
            className="w-full z-0 h-auto cursor-pointer transition-transform duration-300 transform hover:scale-105"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&w=640&q=75"
            alt="women"
          />
          <h1 className="absolute text-xs sm:text-xl uppercase bg-white bottom-10 right-5 p-2 sm:p-4 rounded-lg hover:bg-gray-400 cursor-pointer">
            #Womens Exclusive
          </h1>
          <h1 className="absolute top-10 uppercase right-5 opacity-10 text-xl sm:text-2xl font-light">
            New Year
          </h1>
          <h1 className="absolute hidden text-gray-200 top-10 left-0 text-[10rem] font-extrabold">
            20
          </h1>
        </div>

        <div className="bg-gray-300 relative rounded-r-lg overflow-hidden">
          <img
            className="w-full z-0 cursor-pointer transition-transform duration-300 transform hover:scale-105"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&w=640&q=75"
            alt="men"
          />
          <h1 className="absolute text-xs sm:text-xl uppercase bg-white bottom-10 right-5 p-2 sm:p-4 rounded-lg hover:bg-gray-400 cursor-pointer">
            #Mens Exclusive
          </h1>
          <h1 className="absolute uppercase top-10 left-5 opacity-10 text-2xl font-light">
            Exclusive
          </h1>
          <h1 className="absolute hidden sm:block text-gray-200 top-10 left-0 text-[10rem] font-extrabold">
            24
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
