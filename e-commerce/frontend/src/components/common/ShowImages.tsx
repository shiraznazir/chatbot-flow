import React, { useState } from "react";
import useImageData from "../../customHooks/useBinayImage";

interface CustomCarouselProps {
  images: any;
}

const ShowImages: React.FC<CustomCarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<any>(images[0]);

  const handleSelect = (index: number) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className="grid grid-cols-12 gap-9 lg:gap-10">
      <div className="col-span-3 sm:col-span-2 flex flex-col gap-2">
        {images.map((image: any, index: number) => (
          <div
            className="border-2 hover:border-gray-300"
            key={index}
            onClick={() => handleSelect(index)}
          >
            <img
              className="w-20 h-20 cursor-pointer transition-transform duration-300 transform hover:scale-90"
              src={useImageData(image)}
              alt={`image${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="col-span-9">
        {selectedImage && (
          <img
            className="w-full h-96 pb-10"
            src={useImageData(selectedImage)}
            alt={selectedImage}
          />
        )}
      </div>
    </div>
  );
};

export default ShowImages;
