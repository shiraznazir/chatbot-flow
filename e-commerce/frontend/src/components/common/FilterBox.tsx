interface FilterProps {
  item: string;
  handleFilterClose: (item: string) => void;
}

const FilterBox: React.FC<FilterProps> = ({ item, handleFilterClose }) => {
  return (
    <div className="border-2 shadow-2xl border-gray-300 rounded-lg p-1 flex gap-1 cursor-pointer">
      <h1 className="text-xs">{item}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
        onClick={() => handleFilterClose(item)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default FilterBox;
