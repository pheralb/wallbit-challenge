import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles:
import "@/styles/globals.css";

// Providers:
import { Toaster } from "@pheralb/toast";

// Layout:
import { Header, Footer } from "@/components/layout";

// Main Page:
import Home from "@/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
    <Toaster toastFont="font-sans" position="bottom-right" theme="light" />
  </StrictMode>,
);
