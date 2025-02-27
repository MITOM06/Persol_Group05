import React, { useState, useEffect } from "react";
import "../../styles/Persol/Home.css";
import img1 from "../../imgs/imgh/PO_W5-6_Blocco1_D.avif";
import img2 from "../../imgs/imgh/W48_Blocco1_Senna_D.avif";
import img3 from "../../imgs/imgh/PO_Blocco1_D.avif";
import homeData from "../../data/Persol/home.json";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
import { Link } from "react-router-dom";

// Import ảnh sản phẩm
const homeImages = {
  "0PO0202S__24_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0202S__24_31__P21__shad__fr.avif"),
  "0PO3327S__96_S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3327S__96_S3__P21__shad__fr.avif"),
  "0PO1019S__515_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1019S__515_31__P21__shad__fr.avif"),
  "0PO3310S__B95_B1__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3310S__B95_B1__P21__shad__fr.avif"),
  "0PO0204V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0204V__95__P21__shad__fr.avif"),
  "0PO5011VT__8016__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5011VT__8016__P21__shad__fr.avif"),
  "0PO5007VT__8012__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5007VT__8012__P21__shad__fr.avif"),
  "0PO0054V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0054V__95__P21__shad__fr.avif"),
  "0PO0009__95_53__P21__shad__fr.avif": require("../../imgs/imgh/0PO0009__95_53__P21__shad__fr.avif"),
  "0PO0005__24_4E__P21__shad__fr.avif": require("../../imgs/imgh/0PO0005__24_4E__P21__shad__fr.avif"),
  "0PO3363S__105648__P21__shad__fr.avif": require("../../imgs/imgh/0PO3363S__105648__P21__shad__fr.avif"),
  "0PO0064S__95_31__P21__shad__fr.avif": require("../../imgs/imgh/0PO0064S__95_31__P21__shad__fr.avif"),
  "0PO1021V__1131__P21__shad__fr.avif": require("../../imgs/imgh/0PO1021V__1131__P21__shad__fr.avif"),
  "0PO3344V__1205__P21__shad__fr.avif": require("../../imgs/imgh/0PO3344V__1205__P21__shad__fr.avif"),
  "0PO3354V__95__P21__shad__fr.avif": require("../../imgs/imgh/0PO3354V__95__P21__shad__fr.avif"),
  "0PO3353V__95__P21__shad__fr.avif": require("../../imgs/imgh/0PO3353V__95__P21__shad__fr.avif"),
};

const slides = [
  {
    id: 1,
    image: img1,
    title: "A Personal Touch.",
    description: "Declare your love with eyewear tailored with their initials.",
    buttons: [
      { label: "SHOP SUNGLASSES", path: "/sunglasses" },
      { label: "SHOP EYEGLASSES", path: "/eyeglasses" },
    ],
  },
  {
    id: 2,
    image: img2,
    title: "Persol Senna Series: Legends live on. ",
    description: "Inspired by an archival design, reimagined for the new Netflix Senna Series. Introducing a new edition of the original Persol sunglasses worn by Senna.",
    buttons: [
      { label: "SHOP NOW", path: "/sale" },
      { label: "SHOP EYEGLASSES", path: "/eyeglasses" },
    ],
  },
  {
    id: 3,
    image: img3,
    title: "Winter elegance.",
    description: "Refine your style this season with Persol's iconic designs. From the timeless allure of the 649 to the foldable sophistication of the 714 - Steve McQueen, crafted for those on the go.",
    buttons: [
      { label: "SHOP SUNGLASSES", path: "/sunglasses" },
      { label: "SHOP EYEGLASSES", path: "/eyeglasses" },
    ],
  },
];

const Ticker = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const location = "Ho Chi Minh , Viet Nam"; // Địa điểm cố định

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 w-full bg-black text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-lg">
        {`${dateTime.toLocaleString()} | ${location}`}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
             overflow: hidden;
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
          will-change: transform;
          left: 100%;
            width: max-content;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [BShome, setBShome] = useState([]);
  const [NAhome, setNAhome] = useState([]);
  
  const [visitCount, setVisitCount] = useState(1);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("visitCount")) || 0;
    const newCount = count + 1;
    localStorage.setItem("visitCount", newCount);
    setVisitCount(newCount);
  }, []);

  const resetCounter = () => {
    localStorage.setItem("visitCount", 1);
    setVisitCount(1);
  };

  useEffect(() => {
    const BS = homeData.filter((item) => item.gender === "BS");
    const NA = homeData.filter((item) => item.gender === "NA");
    setBShome(BS);
    setNAhome(NA);
  }, []);

  const renderhome = (home) =>
    home.map((item) => (
      <div key={item.id} className="home-card">
        <Link to={`/HomeDetail/${item.id}`}
          onClick={() => window.scrollTo(0, 0)}  // Cuộn lên đầu trang khi nhấn vào sản phẩm
        >
          <img src={homeImages[item.image1]} alt={item.name} className="home-image" />
        </Link>
        {item.favourite && <span className="favourite-label">FAVOURITE</span>}
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    ));

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "10px", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#f8f9fa", padding: "8px 16px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
          <h2 style={{ margin: "0 10px 0 0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>Visitors: {visitCount}</h2>
          <button onClick={resetCounter} style={{ background: "#000", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}>Reset</button>
        </div>
      </div>

      <Logop />
      <p></p>
      <Navbarp />
      <p></p>

      {/* SLIDER */}
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`slide ${index === activeIndex ? "active" : ""}`}>
            <div className="hero-container">
              <img src={slide.image} alt="Hero Banner" className="hero-image" />
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                {slide.buttons.map((btn, idx) => (
                  <Link key={idx} to={btn.path}>
                    <button className="shop-button">{btn.label}</button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button className="nav-button left" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <button className="nav-button right" onClick={handleNextSlide}>
          &#10095;
        </button>
      </div>

      {/* SẢN PHẨM */}
      <h4 id="title">Best seller</h4>
      <div className="home-container">{renderhome(BShome)}</div>

      <h4 id="title">New arrival</h4>
      <div className="home-container">{renderhome(NAhome)}</div>
      <Ticker />
    </>
  );
};



export default Home;