import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import img1 from "../imgs/imgh/PO_W5-6_Blocco1_D.avif";
import img2 from "../imgs/imgh/W48_Blocco1_Senna_D.avif";
import img3 from "../imgs/imgh/PO-Holiday_W45-46_Blocco4_D.avif";
import homeData from "../data/home.json";
import Logop from "../components/Logop";
import Navbarp from "../components/Navbarp";
import { Link } from "react-router-dom";

// Import ảnh sản phẩm
const homeImages = {
  "0PO0202S__24_31__P21__shad__fr.avif": require("../imgs/imgsgl/0PO0202S__24_31__P21__shad__fr.avif"),
  "0PO3327S__96_S3__P21__shad__fr.avif": require("../imgs/imgsgl/0PO3327S__96_S3__P21__shad__fr.avif"),
  "0PO1019S__515_31__P21__shad__fr.avif": require("../imgs/imgsgl/0PO1019S__515_31__P21__shad__fr.avif"),
  "0PO3310S__B95_B1__P21__shad__fr.avif": require("../imgs/imgsgl/0PO3310S__B95_B1__P21__shad__fr.avif"),

  "0PO0204V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO0204V__95__P21__shad__fr.avif"),
  "0PO5011VT__8016__P21__shad__fr.avif": require("../imgs/imgegl/0PO5011VT__8016__P21__shad__fr.avif"),
  "0PO5007VT__8012__P21__shad__fr.avif": require("../imgs/imgegl/0PO5007VT__8012__P21__shad__fr.avif"),
  "0PO0054V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO0054V__95__P21__shad__fr.avif"),

  "0PO0009__95_53__P21__shad__fr.avif": require("../imgs/imgh/0PO0009__95_53__P21__shad__fr.avif"),
  "0PO0005__24_4E__P21__shad__fr.avif": require("../imgs/imgh/0PO0005__24_4E__P21__shad__fr.avif"),
  "0PO3363S__105648__P21__shad__fr.avif": require("../imgs/imgh/0PO3363S__105648__P21__shad__fr.avif"),
  "0PO0064S__95_31__P21__shad__fr.avif": require("../imgs/imgh/0PO0064S__95_31__P21__shad__fr.avif"),

  "0PO1021V__1131__P21__shad__fr.avif": require("../imgs/imgh/0PO1021V__1131__P21__shad__fr.avif"),
  "0PO3344V__1205__P21__shad__fr.avif": require("../imgs/imgh/0PO3344V__1205__P21__shad__fr.avif"),
  "0PO3354V__95__P21__shad__fr.avif": require("../imgs/imgh/0PO3354V__95__P21__shad__fr.avif"),
  "0PO3353V__95__P21__shad__fr.avif": require("../imgs/imgh/0PO3353V__95__P21__shad__fr.avif"),

};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [BShome, setBShome] = useState([]);
  const [NAhome, setNAhome] = useState([]);

  const slides = [
    { id: 1, image: img1, title: "A Personal Touch.", description: "Declare your love with eyewear tailored with their initials.", buttons: ["SHOP SUNGLASSES", "SHOP EYEGLASSES"] },
    { id: 2, image: img2, title: "A Personal Touch.", description: "Declare your love with eyewear tailored with their initials.", buttons: ["SHOP NOW", "SHOP EYEGLASSES"] },
    { id: 3, image: img3, title: "Style meets vision.", description: "From regular and thin Persol Signature lenses to our top-tier Premium Glass lenses by Barberini®.", buttons: ["SHOP NOW", "SHOP EYEGLASSES"] }
  ];

  useEffect(() => {
    const BS = homeData.filter((item) => item.gender === "BS");
    const NA = homeData.filter((item) => item.gender === "NA");
    setBShome(BS);
    setNAhome(NA);
  }, []);

  const renderhome = (home) =>
    home.map((item) => (
      <div key={item.id} className="home-card">
        <Link to={`/HomeDetail/${item.id}`}>
          <img
            src={homeImages[item.image1]}
            alt={item.name}
            className="home-image"
          />
        </Link>
        {item.favourite && <span className="favourite-label">FAVOURITE</span>}
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    ));


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <>
      {/* SLIDER */}
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`slide ${index === activeIndex ? "active" : ""}`}>
            <div className="hero-container">
              <img src={slide.image} alt="Hero Banner" className="hero-image" />
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className="shop-button">{slide.buttons[0]}</button>
                <button className="shop-button">{slide.buttons[1]}</button>
              </div>
            </div>
          </div>
        ))}
        <button className="nav-button left" onClick={handlePrevSlide}>&#10094;</button>
        <button className="nav-button right" onClick={handleNextSlide}>&#10095;</button>
      </div>

      {/* SẢN PHẨM */}
      <h4 id="title">Best seller</h4>
      <div className="home-container">{renderhome(BShome)}</div>

      <h4 id="title">New arrival</h4>
      <div className="home-container">{renderhome(NAhome)}</div>
    </>
  );
};

export default Home;


