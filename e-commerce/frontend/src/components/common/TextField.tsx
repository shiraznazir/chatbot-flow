import React, { ChangeEvent } from "react";

const TextField: React.FC<{
  label: string;
  type: string;
  value: any;
  disabled: boolean;
  setValue: (value: string) => void;
}> = ({ label, type, value, setValue, disabled }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    !disabled && setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="outlined-basic" className="block text-gray-700">
        {label}
      </label>
      <input
        id="outlined-basic"
        type={type}
        value={value}
        placeholder={label}
        onChange={handleChange}
        className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-purple-500`}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
