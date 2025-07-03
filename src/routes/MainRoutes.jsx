import WelcomePage from "../pages/welcome/WelcomePage";
import { Routes, Route } from "react-router";
import SignIn from "../pages/signin/SignIn";
import HomePage from "../pages/home/HomePage";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
