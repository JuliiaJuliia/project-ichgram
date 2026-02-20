import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import bg from "../assets/Background.jpg"; 

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nfPage">
      <div className="nfCard">

        {/* КАРТИНКА ВМЕСТО ТЕЛЕФОНА */}
        <div className="nfIllustration">
          <img src={bg} alt="Not found" className="nfImage" />
        </div>

        {/* Текст */}
        <div className="nfText">
          <div className="nfKicker">404</div>
          <h1 className="nfTitle">Oops! Page Not Found</h1>

          <p className="nfDesc">
            The page you are looking for doesn’t exist or was moved.
            Please check the address or return to the home page.
          </p>

          <div className="nfActions">
            <button
              className="nfBtn nfBtnPrimary"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>

            <button
              className="nfBtn nfBtnGhost"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}