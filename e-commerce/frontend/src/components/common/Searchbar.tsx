import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const Searchbar = ({ style }: { style: string }) => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState<string>("");

  const debouncedNavigate = useCallback(
    _.debounce((value: string) => {
      navigate(`/products/search/${value}`);
    }, 2000),
    [navigate]
  );

  useEffect(() => {
    if (searchVal) {
      debouncedNavigate(searchVal);
    }
  }, [searchVal, debouncedNavigate]);

  return (
    <div
      className={`cursor-pointer flex w-full relative items-center ${style}`}
    >
      <input
        className="w-full rounded-xl p-1 pl-10 text-lg font-normal bg-gray-100 outline-0 h-[2.6rem]"
        type="text"
        placeholder="Search products"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-500 absolute top-2 left-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default Searchbar;
