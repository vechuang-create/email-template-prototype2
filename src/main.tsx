import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("embed") === "1") {
  document.documentElement.classList.add("email-embed-preview");
}

createRoot(document.getElementById("root")!).render(<App />);
