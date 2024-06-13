import AnimationContainer from "../common/AnimationContainer";
import AnimationItems from "../common/AnimationItems";

const dummyData: number[] = Array.from({ length: 10 }, (_, index) => index + 1);

const ProductCardShimmer = () => {
  return (
    <AnimationContainer>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dummyData.map((item: number) => (
          <AnimationItems>
            <div
              key={item}
              className="rounded-lg bg-gray-200 shadow-xl group cursor-pointer flex flex-col gap-5 p-2"
            >
              <div className="bg-gray-100 p-8 h-32 md:h-52 w-full flex items-center justify-center rounded-t-lg"></div>
              <div className="p-2 bg-gray-100 h-12 rounded-b-lg"></div>
            </div>
          </AnimationItems>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default ProductCardShimmer;
