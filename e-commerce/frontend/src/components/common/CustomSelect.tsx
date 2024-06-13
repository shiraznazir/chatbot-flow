import React from "react";

const CustomSelect: React.FC<{
  label: string;
  list: string[];
  value: string;
  setValue: (val: string) => void;
}> = ({ label, list, value, setValue }) => {
  return (
    <div>
      <label htmlFor="outlined-basic" className="block text-gray-700">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-white px-3 py-2.5 mt-1 border rounded-md focus:outline-none focus:ring focus:border-purple-500"
      >
        {list.length === 0 ? (
          <option className="hover:bg-purple-400">No Option</option>
        ) : (
          <option className="hover:bg-purple-400">Select</option>
        )}
        {list.map((style, index) => (
          <option className="hover:bg-purple-400" key={`${style}-${index}`}>
            {style}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
