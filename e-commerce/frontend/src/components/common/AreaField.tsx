import React from "react";

const TextAreaField: React.FC<{
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label, value, setValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={label} className="block text-gray-700">
        {label}
      </label>
      <textarea
        id={value}
        value={value}
        onChange={handleChange}
        placeholder={label}
        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-purple-500"
      />
    </div>
  );
};

export default TextAreaField;
