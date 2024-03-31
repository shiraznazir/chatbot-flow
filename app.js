import { createRoot } from "react-dom/client";
import Main from "./src/Main";

const root = document.getElementById("root");
const container = createRoot(root);

container.render(<Main />);
