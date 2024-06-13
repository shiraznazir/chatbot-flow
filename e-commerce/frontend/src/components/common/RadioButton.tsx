import React from "react";

interface OptionsProps {
  label1: string;
  label2: string;
  title: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

const RadioButton: React.FC<OptionsProps> = ({
  label1,
  label2,
  title,
  value,
  setValue,
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "true");
  };

  return (
    <div className="flex">
      <label className="pr-4" htmlFor="option1">
        {title}:
      </label>
      <div>
        <label className="inline-flex items-center">
          <input
            id="option1"
            type="radio"
            className="form-radio text-indigo-600 h-5 w-5"
            value="true"
            checked={value === true}
            onChange={handleOptionChange}
          />
          <span className="ml-2">{label1}</span>
        </label>
        <label htmlFor="option2" className="inline-flex items-center ml-6">
          <input
            id="option2"
            type="radio"
            className="form-radio text-indigo-600 h-5 w-5"
            value="false"
            checked={value === false}
            onChange={handleOptionChange}
          />
          <span className="ml-2">{label2}</span>
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
