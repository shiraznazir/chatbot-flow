import React from "react";
import Select from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: { value: string; label: string }[];
  selectedValues: string[];
  setValue: (selectedValues: string[]) => void;
  labelText: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues,
  setValue,
  labelText,
}) => {
  const handleChange = (selectedOptions: OptionType[] | null) => {
    if (selectedOptions) {
      const selectedValues = selectedOptions.map((option) => option.value);
      setValue(selectedValues);
    } else {
      setValue([]); // Handle case when no option is selected
    }
  };

  // Corrected formatting of options and selected values
  const formattedOptions: OptionType[] = options.map((option) => ({
    value: option.value,
    label: option.label,
  }));

  const formattedSelectedValues: OptionType[] = selectedValues.map((value) => ({
    value,
    label: value,
  }));

  return (
    <div>
      <label htmlFor="outlined-basic" className="block text-gray-700">
        {labelText}
      </label>
      <Select
        isMulti
        value={formattedSelectedValues}
        options={formattedOptions}
        onChange={(selected) => handleChange(selected as OptionType[])}
        className="w-full bg-white p-1.5 mt-1 border rounded-md focus:outline-none focus:ring focus:border-purple-500"
        classNamePrefix="select"
      />
    </div>
  );
};

export default MultiSelect;
