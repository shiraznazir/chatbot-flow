import { createRoot } from "react-dom/client";
import Main from "./src/Main";

const App = () => {
  return (
    <>
      <Main />
      <h1 className="underline text-yellow-500">Hello</h1>
    </>
  );
};

const root = document.getElementById("root");
const container = createRoot(root);

container.render(<App />);
