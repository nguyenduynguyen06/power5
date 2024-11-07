import React, { useState, useEffect } from "react";
import "./css/Banner.css";

const contentArray = [
    {
        text: "The Power to Innovate",
        description:
            "Discover how our latest technology solutions are changing the way businesses operate and thrive in a digital world.",
        image: 'https://e0.pxfuel.com/wallpapers/848/682/desktop-wallpaper-800x800-800x800-fire-tablet.jpg'
    },
    {
        text: "The Power to Cooperate",
        description:
            "Discover how our latest technology solutions are changing the way businesses operate and thrive in a digital world.",
        image: 'https://e1.pxfuel.com/desktop-wallpaper/667/695/desktop-wallpaper-3-800x800-1024x1024.jpg'
    },
    {
        text: "The Power to Connect",
        description:
            "Discover how our latest technology solutions are changing the way businesses operate and thrive in a digital world.",
        image: 'https://e1.pxfuel.com/desktop-wallpaper/985/173/desktop-wallpaper-1024x600-on-dog-800x800.jpg'
    },
    {
        text: "The Power to Collaborate",
        description:
            "Discover how our latest technology solutions are changing the way businesses operate and thrive in a digital world.",
        image: 'https://e1.pxfuel.com/desktop-wallpaper/868/463/desktop-wallpaper-logo-fire-fire-logo-logo-fire-logo-fire-logo-fire-gaming-fire-logo-gaming-logo-fire-joker-fire-gaming-logo-png-fire-logo-fire-gaming-logo.jpg'
    },
];

const Banner = () => {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
                setIsVisible(true);
            }, 1000);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleListItemClick = (newIndex) => {
        setIsVisible(false);
        setTimeout(() => {
            setIndex(newIndex);
            setIsVisible(true);
        }, 500);
    };

    const { text, description, image } = contentArray[index];

    return (
        <div className="container">
            <div className="landing-container">
                <div className="top-navigation">
                    <div className={`left-section ${isVisible ? "show" : ""}`}>
                        <h2>{text}</h2>
                        <p>{description}</p>
                        <button className="cta-button">
                            <i className="fas fa-play">Get Started</i>
                        </button>
                        <div className="bottom-navigation">
                            <ul>
                                <li>
                                    <div className="animated-chevron">
                                        <div className="chevron"></div>
                                        <div className="chevron"></div>
                                    </div>
                                </li>
                                {["Careers", "News", "Events", "Investor"].map((item, i) => (
                                    <li
                                        key={i}
                                        className={i === index ? "active" : ""}
                                        onClick={() => handleListItemClick(i)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <img
                        src={image}
                        alt="Technology Concept"
                        className={`image ${isVisible ? "fade-in" : "fade-out"}`}
                    />
                </div>
            </div>
        </div>

    );
};

export default Banner;
