import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

// Nuevo modo de concurrencia
// Esto significa que ahora React puede interrumpir un renderizado si ve que no es importante. Así se asegura de dejar la UI siempre disponible para la interacción del usuario

createRoot(root).render(<App />);
