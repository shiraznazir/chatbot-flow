interface Price {
  price: number;
  offerPrice: number;
}

interface PriceDetailsProps {
  priceDetails: Price;
}

const PriceDetails: React.FC<PriceDetailsProps> = ({ priceDetails }) => {
  const discount = priceDetails?.price - priceDetails?.offerPrice;
  const deliveryCharge = priceDetails?.price < 500 ? 40 : 0;

  return (
    <>
      <div className="bg-white p-4">
        <h1 className="">PRICE DETAILS</h1>
      </div>
      <div className="my-[1px] bg-white p-4">
        <div className="my-2 flex items-center justify-between">
          <h1 className="text-md">Price</h1>
          <h1 className="text-md">₹{priceDetails?.price}</h1>
        </div>
        <div className="my-2 flex items-center justify-between">
          <h1 className="text-md">Discount</h1>
          <h1 className="text-md text-green-500">-₹{discount}</h1>
        </div>
        <div className="my-2 flex items-center justify-between">
          <h1 className="text-md">Delivery Charges</h1>

          {deliveryCharge === 0 ? (
            <h1 className="text-md text-gray-500">
              <span className="line-through">₹{40}</span>Free
            </h1>
          ) : (
            <span className="line-through">₹{deliveryCharge}</span>
          )}
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="my-2 flex items-center justify-between">
          <h1 className="text-md font-bold">Total Amount</h1>
          {discount && (
            <h1 className="text-md font-bold">
              ₹{Number(priceDetails?.offerPrice) + deliveryCharge}
            </h1>
          )}
        </div>
        <div className="py-4">
          <hr />
        </div>
        <h1 className="text-green-500">
          You will save ₹{discount} on this order
        </h1>
      </div>
    </>
  );
};

export default PriceDetails;
