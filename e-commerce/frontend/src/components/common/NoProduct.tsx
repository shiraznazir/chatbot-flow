import noProductImg from "../../assets/noproduct.png";

const NoProduct = () => {
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="w-10/12 bg-white flex flex-col justify-center items-center gap-4 py-4">
        <img className="w-64 h-56" src={noProductImg} alt="nocart" />
        <h1 className="text-lg font-bold text-center">
          Sorry, no results found!
        </h1>
        <h1 className="text-lg text-gray-500 text-center">
          Please check the spelling or try searching for something else
        </h1>
      </div>
    </div>
  );
};

export default NoProduct;
