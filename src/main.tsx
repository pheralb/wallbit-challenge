import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles:
import "@/styles/globals.css";

// Main Page:
import Home from "@/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
