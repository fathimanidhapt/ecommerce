import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./Home";
import MainProvider from "./Maincontext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <MainProvider>
        <Home/>
      </MainProvider>
  </StrictMode>
);
