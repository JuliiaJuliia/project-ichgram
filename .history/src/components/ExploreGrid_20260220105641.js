import React from "react";
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

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

export default function ExploreGrid() {
  return (
    <div className="exploreGrid">
      {images.map((img, i) => (
        <div className="exploreItem" key={i}>
          <img src={img} alt={`explore-${i}`} />
        </div>
      ))}
    </div>
  );
}