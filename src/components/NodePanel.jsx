import React from "react";
import msgIcon from "../assets/message.svg";

const NodePanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="w-32 m-4 rounded-md p-2 cursor-pointer border-[1px] border-black flex flex-col justify-center items-center gap-2 my-2"
      onDragStart={(event) => onDragStart(event)}
      draggable
    >
      <img width="20" height="20" src={msgIcon} alt="message" />
      <p>Message</p>
    </div>
  );
};

export default NodePanel;
