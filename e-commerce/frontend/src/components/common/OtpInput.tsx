import React, { ChangeEvent, KeyboardEvent, useRef } from "react";

interface OtpInputProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const OtpInput: React.FC<OtpInputProps> = ({ otp, setOtp }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index <= 5 && value >= "0" && value <= "9") {
      const newIndex = index + 1;
      if (inputRefs.current[newIndex]) {
        inputRefs.current[newIndex].focus();
      }
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(input) =>
            (inputRefs.current[index] = input as HTMLInputElement)
          }
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e, index)
          }
          className={`w-8 h-8 sm:w-12 sm:h-12 border-b-2 outline-0 focus:outline-0 focus:border-gray-500 border-gray-300 text-center text-xl mr-2 ${
            index !== 0 ? "-ml-1" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
