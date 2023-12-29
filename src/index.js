import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PreviousPageIdProvider } from "../src/components/Home/components/IdContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PreviousPageIdProvider>
      <BrowserRouter>
        <App />
        {/* <AppTest /> */}
      </BrowserRouter>
    </PreviousPageIdProvider>
  </React.StrictMode>
);
