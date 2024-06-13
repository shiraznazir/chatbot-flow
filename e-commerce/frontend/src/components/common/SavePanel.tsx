import React from "react";
import { useNavigate } from "react-router-dom";

interface SavePanelProps {
  handleSubmit: any;
  update: boolean;
}

const SavePanel: React.FC<SavePanelProps> = ({ handleSubmit, update }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed h-16 p-4 gap-4 flex items-center justify-end w-full bottom-0 right-0 bg-white">
      <button
        type="button"
        className="bg-red-500 text-white p-2 rounded-lg"
        onClick={() => navigate("/dashboard/products")}
      >
        Cancel
      </button>
      <button
        type="button"
        className="bg-green-500 text-white p-2 rounded-lg"
        onClick={handleSubmit}
      >
        {update ? "Update" : "Save"}
      </button>
    </div>
  );
};

export default SavePanel;
