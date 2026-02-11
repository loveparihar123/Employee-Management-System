import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Context/AuthProvider.jsx";
import "./index.css";
import App from "./App.jsx";
import TaskContext from "./Context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
