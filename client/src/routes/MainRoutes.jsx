import WelcomePage from "../pages/welcome/WelcomePage";
import { Routes, Route } from "react-router";
import SignIn from "../pages/signin/SignIn";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signup/SignUp";
import ProtectedRoute from "../components/auth/ProtectedRoute";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
