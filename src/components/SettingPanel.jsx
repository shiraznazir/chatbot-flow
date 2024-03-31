import React from "react";

const SettingPanel = ({
  editText,
  setEditText,
  setEditNode,
  handleEditClose,
}) => {
  const handleClose = () => setEditNode("");

  return (
    <>
      <div className="h-12 px-4 border-b-2 border-gary-200 flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 cursor-pointer"
          onClick={handleClose}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <p className="text-sm">Message</p>
        <div></div>
      </div>
      <div className="p-auto border-b-2 border-gray-200">
        <p className="text-left m-2 text-sm">Text</p>
        <textarea
          id="w3review"
          name="w3review"
          rows="3"
          cols="35"
          className="outline-none text-sm m-2 p-1 border-2 border-gray-200 rounded-lg"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditClose}
        ></textarea>
      </div>
    </>
  );
};

export default SettingPanel;
