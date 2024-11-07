import React from "react";
import "./css/PromoSection.css";

const PromoSection2 = () => {
    return (
        <div className="promo-section">
            <img
                src="https://cognizant.scene7.com/is/image/cognizant/hp-parallax-belcan"
                alt="Promotional Background"
                className="promo-background"
            />
            <div className="promo-content">
                <h2>Partnering with World Economic Forum to improve everyday life</h2>
                <p>
                    We’re partnering with WEF to chart new paths to progress on complex global challenges like responsible AI, education and skilling for tomorrow’s workforce and advancing the energy transition.
                </p>
                <a href="#know-more" className="promo-link">
                    Discover new thinking<span>&#x2192;</span>
                </a>
            </div>
        </div>
    );
};

export default PromoSection2;
