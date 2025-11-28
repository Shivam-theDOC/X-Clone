import { BrowserRouter } from "react-router";
import "./App.css";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/loading/LoadingScreen";
import { AuthProvider } from "./context/AuthContext";

import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AuthProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </AuthProvider>
      )}
    </>
  );
};

export default App;
