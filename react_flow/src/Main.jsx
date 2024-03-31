import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from "reactflow";
import CustomNode from "./components/CustomNode";
import "reactflow/dist/style.css";
import SettingPanel from "./components/SettingPanel";
import NodePanel from "./components/NodePanel";
import Header from "./components/Header";

const nodeTypes = {
  custom: CustomNode,
};

let id = 1;
const getId = () => id++;

const Main = () => {
  const reactFlowWrapper = useRef(null);
  const [editText, setEditText] = useState("");
  const [editNode, setEditNode] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [msg, setMsg] = useState(false);

  const onConnect = (params) => {
    const isEmpty = edges.find((edge) => edge.source === params.source);
    if (!isEmpty) {
      setEdges((prevElements) => [
        ...prevElements,
        {
          id: `${params.source}-${params.target}`,
          ...params,
          markerEnd: { type: "arrow", color: "#808080" },
        },
      ]);
    }
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = (event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");

    if (typeof type === "undefined" || !type) {
      return;
    }

    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const id = getId();
    const newNode = {
      id: `dndnode_${id}`,
      type: "custom",
      position,
      data: { text: `Test Message ${id}` },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const handleSave = () => {
    const err = nodes
      .filter((node) => {
        return !edges.some((edge) => edge.target === node.id);
      })
      .map((node) => node.id);

    if (err.length > 1) {
      setMsg(true);
      setTimeout(() => {
        setMsg(false);
      }, 3000);
    }
  };

  const onNodeClick = useCallback((event, node) => {
    setEditNode(node);
    setEditText(node.data.text);
  }, []);

  const handleEditClose = () => {
    setEditNode("");
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === editNode.id
          ? { ...node, data: { ...node.data, text: editText } }
          : node
      )
    );
  };

  return (
    <div className="max-w-full overflow-x-hidden">
      <Header msg={msg} onClick={handleSave} />
      <ReactFlowProvider>
        <div className="flex">
          <div className="w-9/12 h-full">
            <div
              ref={reactFlowWrapper}
              style={{ width: "75vw", height: "90vh" }}
            >
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                onInit={setReactFlowInstance}
                fitView
                onDrop={onDrop}
                onDragOver={onDragOver}
                className="bg-teal-50"
              ></ReactFlow>
            </div>
          </div>
          <div className="w-3/12 h-[90vh] border-l-2 border-gray-200">
            {editNode ? (
              <SettingPanel
                editText={editText}
                handleEditClose={handleEditClose}
                setEditText={setEditText}
                setEditNode={setEditNode}
              />
            ) : (
              <NodePanel />
            )}
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Main;
