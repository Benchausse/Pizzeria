import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <h1 style={{ color: "blue" }}>Hello CodeSandbox!</h1>
    <h2>Start editing to see some magic happen!</h2>
  </div>
);
