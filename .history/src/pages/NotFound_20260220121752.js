import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nfPage">
      <div className="nfCard">
        {/* Иллюстрация телефона (SVG) */}
        <div className="nfIllustration" aria-hidden="true">
          <svg
            className="nfPhone"
            viewBox="0 0 320 520"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* тень */}
            <ellipse cx="160" cy="500" rx="120" ry="14" fill="rgba(0,0,0,0.12)" />

            {/* корпус */}
            <rect x="62" y="26" width="196" height="460" rx="38" fill="#111" />
            <rect x="72" y="36" width="176" height="440" rx="30" fill="#1a1a1a" />

            {/* экран */}
            <rect x="82" y="62" width="156" height="388" rx="22" fill="#f6f7f9" />

            {/* динамик */}
            <rect x="138" y="44" width="44" height="6" rx="3" fill="#2d2d2d" />
            <circle cx="124" cy="47" r="3" fill="#2d2d2d" />

            {/* мини “сторис” */}
            <g transform="translate(95,86)">
              <circle cx="14" cy="14" r="14" fill="#ffffff" stroke="#dbdbdb" />
              <circle cx="14" cy="14" r="12" fill="none" stroke="#f58529" strokeWidth="3" />
              <circle cx="52" cy="14" r="14" fill="#ffffff" stroke="#dbdbdb" />
              <circle cx="52" cy="14" r="12" fill="none" stroke="#d62976" strokeWidth="3" />
              <circle cx="90" cy="14" r="14" fill="#ffffff" stroke="#dbdbdb" />
              <circle cx="90" cy="14" r="12" fill="none" stroke="#962fbf" strokeWidth="3" />
              <circle cx="128" cy="14" r="14" fill="#ffffff" stroke="#dbdbdb" />
              <circle cx="128" cy="14" r="12" fill="none" stroke="#4f5bd5" strokeWidth="3" />
            </g>

            {/* “пост” */}
            <rect x="98" y="132" width="124" height="172" rx="14" fill="#ffffff" stroke="#e6e6e6" />
            <rect x="108" y="144" width="104" height="120" rx="10" fill="#dfe7f2" />
            <rect x="108" y="272" width="64" height="10" rx="5" fill="#e6e6e6" />
            <rect x="108" y="288" width="92" height="10" rx="5" fill="#eeeeee" />

            {/* нижняя панель */}
            <rect x="110" y="424" width="100" height="10" rx="5" fill="#e6e6e6" />
          </svg>
        </div>

        {/* Текст */}
        <div className="nfText">
          <div className="nfKicker">404</div>
          <h1 className="nfTitle">Oops! Page Not Found (404 Error)</h1>
          <p className="nfDesc">
            We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t seem to exist.
            If you typed the URL manually, please double-check the spelling.
            If you clicked on a link, it may be outdated or broken.
          </p>

          <div className="nfActions">
            <button className="nfBtn nfBtnPrimary" onClick={() => navigate("/")}>
              Back to Home
            </button>
            <button className="nfBtn nfBtnGhost" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}