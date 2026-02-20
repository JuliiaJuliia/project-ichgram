import "./ExploreGrid.css";

import img0 from "../assets/Link.jpg";
import img1 from "../assets/Link (1).jpg";
import img2 from "../assets/Link (2).jpg";
import img3 from "../assets/Link (3).jpg";
import img4 from "../assets/Link (4).jpg";
import img5 from "../assets/Link (5).jpg";
import img6 from "../assets/Link (6).jpg";
import img7 from "../assets/Link (7).jpg";
import img8 from "../assets/Link (8).jpg";
import img9 from "../assets/Link (9).jpg";

import { useState } from "react";

const images = [
  { src: img0 },
  { src: img1, tall: true },   // ← ВЫСОКАЯ
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7, tall: true },   // ← ВЫСОКАЯ
  { src: img8 }
  { src: img9 }
];

export default function ExploreGrid() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="exploreGrid">
        {images.map((img, i) => (
          <div
            key={i}
            className={`exploreItem ${img.tall ? "tall" : ""}`}
            onClick={() => setActive(img.src)}
          >
            <img src={img.src} alt="" />
          </div>
        ))}
      </div>

      {/* POPUP */}
      {active && (
        <div className="exploreModal" onClick={() => setActive(null)}>
          <img src={active} alt="" />
        </div>
      )}
    </>
  );
}