import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeletePopup: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete?
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-4 bg-gray-400 hover:bg-gray-500 text-white rounded"
                onClick={onClose}
              >
                No
              </button>
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                onClick={onConfirm}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePopup;
