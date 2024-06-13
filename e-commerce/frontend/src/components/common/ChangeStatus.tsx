import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
}

const ChangeStatus: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelect: onSelectProp,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSelect = () => {
    if (selectedOption) {
      onSelectProp(selectedOption);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg relative">
            <div className="absolute top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={onClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold mb-4">Change Status</p>
            <div className="flex flex-col gap-4">
              <select
                id="select"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Refunded">Refunded</option>
                <option value="On Hold">On Hold</option>
              </select>
              {selectedOption ? (
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={handleSelect}
                >
                  Confirm
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed"
                  disabled
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeStatus;
