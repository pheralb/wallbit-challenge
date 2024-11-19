import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles:
import "@/styles/globals.css";

// Providers:
import { Toaster } from "@pheralb/toast";

// Layout:
import Header from "@/components/header";

// Main Page:
import Home from "@/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Home />
    <Toaster toastFont="font-sans" position="bottom-right" theme="light" />
  </StrictMode>,
);
