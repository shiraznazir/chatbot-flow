import { createRoot } from "react-dom/client";
import "./app.css";
import Main from "./src/Main";

const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

const root = document.getElementById("root");
const container = createRoot(root);

container.render(<App />);
