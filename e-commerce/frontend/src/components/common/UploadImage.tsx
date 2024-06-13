import React, { ChangeEvent } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

interface ImageUploadProps {
  id: string;
  label: string;
  setState: (file: File | null) => void;
  selectedImage: File | null;
}

const UploadImage: React.FC<ImageUploadProps> = ({
  id,
  setState,
  label,
  selectedImage,
}) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      setState(file);
    }
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setState(null);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="cursor-pointer flex gap-2">
        <input
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
          name={label}
          onChange={handleImageChange}
        />

        {selectedImage ? (
          <div className="relative">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "/placeholder.jpg"
              }
              alt="Preview"
              className="w-full h-full object-cover rounded-lg mb-2"
            />
            <div
              onClick={handleDelete}
              className="absolute top-2 right-2 bg-gray-50 rounded-lg"
            >
              <RxCross2 size={30} />
            </div>
          </div>
        ) : (
          <div className="p-2 flex items-center justify-center gap-4 bg-gray-400 rounded-lg text-white">
            {label} <IoMdCloudUpload size={32} />
          </div>
        )}
      </label>
    </div>
  );
};

export default UploadImage;
