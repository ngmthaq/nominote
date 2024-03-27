import App from "./App";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import NotistackProvider from "./components/Providers/NotistackProvider";

const Provider = () => {
  return (
    <ThemeProvider>
      <NotistackProvider>
        <App />
      </NotistackProvider>
    </ThemeProvider>
  );
};

export default Provider;
