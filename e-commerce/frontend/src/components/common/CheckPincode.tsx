import React, { ChangeEvent } from "react";
import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

interface Props {
  isAvailable: boolean | null;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: () => void;
}

const CheckPincode: React.FC<Props> = ({
  isAvailable,
  value,
  setValue,
  handleChange,
}) => {
  return (
    <div className="w-56 relative">
      <input
        type="number"
        className="my-2 w-56 p-2 outline-none border border-gray-500 rounded-lg pr-16"
        maxLength={6}
        placeholder="Enter Pincode"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <div className="absolute top-4 right-2 flex gap-4">
        {isAvailable !== null && (
          <div>
            {isAvailable ? (
              <IoCheckmarkDoneCircleOutline
                style={{ color: "green", marginTop: "1px", fontSize: "25px" }}
              />
            ) : (
              <ImCancelCircle
                style={{ color: "red", marginTop: "1px", fontSize: "20px" }}
              />
            )}
          </div>
        )}

        <h1
          onClick={handleChange}
          className="text-gray-600 font-bold cursor-pointer"
        >
          Check
        </h1>
      </div>
    </div>
  );
};

export default CheckPincode;
