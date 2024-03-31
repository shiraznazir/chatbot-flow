import React from "react";
import Error from "./Error";

const Header = ({ msg, onClick }) => {
  return (
    <>
      <div className="w-full h-14 shadow-md bg-gray-100 flex justify-between items-center">
        <div></div>
        {msg && <Error message={"Cannot save flow"} />}
        <div className="w-2/12">
          <button
            className="bg-white p-auto px-4 h-10 border-[1px] border-blue-500 rounded-lg text-blue-800"
            onClick={onClick}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
