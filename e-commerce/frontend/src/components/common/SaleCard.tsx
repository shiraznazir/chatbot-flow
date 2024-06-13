type Product = {
  id: number;
  url: string;
  product: string;
  category: string;
  price: number;
};

const SaleCard: React.FC<{ item: Product }> = ({ item }) => {
  const { id, url, product, category, price } = item;

  return (
    <div className="w-full cursor-pointer group shadow-xl rounded-lg hover:mt-[-5px]">
      <img
        className="w-full h-44 sm:h-64 cursor-pointer object-cover rounded-t-lg transition-transform duration-300 transform group-hover:scale-95"
        src={url}
        alt={`product${id}`}
      />
      <div className="p-2">
        <h1 className="text-sm font-semibold sm:my-1">{product}</h1>
        <h1 className="text-[0.60rem] md:text-sm">
          {category.substring(0, 20)}...
        </h1>
        <h1 className="sm:my-1 text-sm font-semibold">$ {price}.00</h1>
      </div>
    </div>
  );
};

export default SaleCard;
