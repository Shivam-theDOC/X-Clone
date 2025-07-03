import { BrowserRouter } from "react-router";
import "./App.css";

import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
