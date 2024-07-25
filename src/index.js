import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const server = process.env.REACT_APP_SERVER;

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <App />
    </Context.Provider>
  );
};

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
