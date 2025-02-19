import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EyeglassesData from "../data/sale.json";
import "../styles/sale.css";
import Logop from "../components/Logop";
import Navbarp from "../components/Navbarp";
// Định nghĩa ánh xạ hình ảnh (chỉ khai báo các hình ảnh cần dùng ở đây)
const sunglassesImages = {
  "0PO0091V__24__P21__shad__fr.avif": require("../imgs/imgegl/0PO0091V__24__P21__shad__fr.avif"),
  "0PO0054V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO0054V__95__P21__shad__fr.avif"),
  "0PO3318V__1142__P21__shad__fr.avif": require("../imgs/imgegl/0PO3318V__1142__P21__shad__fr.avif"),
  "0PO0204V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO0204V__95__P21__shad__fr.avif"),

  "0PO3160V__1197__P21__shad__fr.avif": require("../imgs/imgegl/0PO3160V__1197__P21__shad__fr.avif"),
  "0PO3362V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO3362V__95__P21__shad__fr.avif"),
  "0PO3007VM__1196__P21__shad__fr.avif": require("../imgs/imgegl/0PO3007VM__1196__P21__shad__fr.avif"),
  "0PO3355V__24__P21__shad__fr.avif": require("../imgs/imgegl/0PO3355V__24__P21__shad__fr.avif"),


  "0PO0086V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO0086V__95__P21__shad__fr.avif"),
  "0PO3331V__24__P21__shad__fr.avif": require("../imgs/imgegl/0PO3331V__24__P21__shad__fr.avif"),
  "0PO3339V__1197__P21__shad__fr.avif": require("../imgs/imgegl/0PO3339V__1197__P21__shad__fr.avif"),
  "0PO3340V__95__P21__shad__fr.avif": require("../imgs/imgegl/0PO3340V__95__P21__shad__fr.avif"),

  "0PO5007VT__8012__P21__shad__fr.avif": require("../imgs/imgegl/0PO5007VT__8012__P21__shad__fr.avif"),
  "0PO5011VT__8016__P21__shad__fr.avif": require("../imgs/imgegl/0PO5011VT__8016__P21__shad__fr.avif"),
  "0PO3281V__95__P21__shad__fr.avi": require("../imgs/imgegl/0PO3281V__95__P21__shad__fr.avif"),
  "0PO3337V__1196__P21__shad__fr.avif": require("../imgs/imgegl/0PO3337V__1196__P21__shad__fr.avif"),

};

const sale = () => {
  const [mensEyeglasses, setMensEyeglasses] = useState([]);
  const [womensEyeglasses, setWomensEyeglasses] = useState([]);

  useEffect(() => {
    setMensEyeglasses(EyeglassesData.filter((item) => item.gender === "male"));
    setWomensEyeglasses(EyeglassesData.filter((item) => item.gender === "female"));
  }, []);

  const renderEyeglasses = (sale) =>
    sale.map((item) => (
      <div key={item.id} className="sale-card">
        <Link to={`/sale/${item.id}`}>
          <img
            src={sunglassesImages[item.image1]}
            alt={item.name}
            className="sale-image"
          />
        </Link>
        {item.favourite && <span className="favourite-label">FAVOURITE</span>}
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    ));

  return (
    <>
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      <h4 id="title">Men's sale</h4>
      <div className="sale-container">{renderEyeglasses(mensEyeglasses)}</div>

      <h4 id="title">Women's sale</h4>
      <div className="sale-container">{renderEyeglasses(womensEyeglasses)}</div>
    </>
  );
};

export default sale;

