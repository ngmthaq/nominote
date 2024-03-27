import React from "react";
import App from "./App";
import NotistackProvider from "./components/Providers/NotistackProvider";

const Provider = () => {
  return (
    <NotistackProvider>
      <App />
    </NotistackProvider>
  );
};

export default Provider;
