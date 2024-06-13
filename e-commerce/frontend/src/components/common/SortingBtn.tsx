import { useState, useRef, useEffect } from "react";

const SortingBtn = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="w-28 relative flex border border-gray-300 py-1 px-2 rounded-lg justify-between">
        <h1>Sorting</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setShow((prev) => !prev)}
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
      {show && (
        <div className="absolute w-40 right-0 mt-2 bg-gray-100 m-2 rounded-md shadow-lg z-10">
          <ul className="py-1 text-sm">
            <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
              Price: low to high
            </li>
            <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
              Price: high to low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortingBtn;
