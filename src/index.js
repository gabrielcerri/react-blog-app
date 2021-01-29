import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
