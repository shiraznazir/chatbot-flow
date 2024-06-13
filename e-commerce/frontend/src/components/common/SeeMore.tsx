import React from "react";

interface SeeMoreProps {
  page: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const SeeMore: React.FC<SeeMoreProps> = ({
  page,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div className="flex justify-end my-4">
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-400 text-white p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="border border-gray-200 p-2">
          <h1 className="">{page}</h1>
        </div>

        <button
          onClick={handleNext}
          className="bg-gray-400 text-white p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SeeMore;
