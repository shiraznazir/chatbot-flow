// import { useState, useEffect } from "react";
// import SmallPoint from "../common/SmallPoint";

const images = [
  "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fmobile%2Fbanner-1.jpg&w=640&q=100",
  "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fmobile%2Fbanner-2.jpg&w=640&q=100",
  "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fslider%2Fmobile%2Fbanner-3.jpg&w=640&q=100",
];

export const Scroller = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const goToPrevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // useEffect(() => {
  //   const interval = setInterval(goToNextSlide, 3000); // Change 3000 to set the interval duration (in milliseconds)
  //   return () => clearInterval(interval);
  // }, []); // Run only once when the component mounts

  return (
    <div className="m-0 p-0 flex mb-8">
      {/* <button onClick={goToPrevSlide}>Previous</button> */}
      <div className="relative flex h-96 overflow-x-auto scroll-smooth my-4 gap-8 ml-[-46rem] scroll-hidden">
        {images.map((image, index) => (
          <img
            className="w-10/12 rounded-lg"
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      {/* <div className="absolute top-0 left-60">
        <SmallPoint />
      </div> */}
      {/* <button onClick={goToNextSlide}>Next</button> */}
    </div>
  );
};
