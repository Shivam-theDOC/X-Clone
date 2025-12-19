import React from "react";
import XIcon from "@mui/icons-material/X";
import "./LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div className="loadingScreen">
            <div className="loadingScreen__logo">
                <XIcon />
            </div>
            <div className="loadingScreen__text">Made by DevDoc</div>
        </div>
    );
};

export default LoadingScreen;
