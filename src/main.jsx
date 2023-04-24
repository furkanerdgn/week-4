import React from "react";
import ReactDOM from "react-dom/client";
import ReactQuery from "./utils/react-query";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {BooksContext} from "./context/BooksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactQuery>
      <BooksContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </BooksContext>
    </ReactQuery>
  </React.StrictMode>
);
