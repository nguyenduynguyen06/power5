import React from "react";
import "./css/PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-section">
      <img
        src="https://cognizant.scene7.com/is/image/cognizant/hp-parallax-belcan"
        alt="Promotional Background"
        className="promo-background"
      />
      <div className="promo-content">
        <h2>Driving the future of ER&D with Belcan</h2>
        <p>
          Belcan expands our engineering research and development (ER&D) and IoT
          capabilities and establishes our leadership in aerospace and defense
          (A&D).
        </p>
        <a href="#know-more" className="promo-link">
          Know more <span>&#x2192;</span>
        </a>
      </div>
    </div>
  );
};

export default PromoSection;
