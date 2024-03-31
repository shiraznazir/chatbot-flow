import React from "react";

const Error = ({ message }) => {
  return (
    <div className="p-2 bg-pink-200 rounded-md">
      <p className="text-red-600">{message}</p>
    </div>
  );
};

export default Error;
