import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EyeglassesData from "../../data/Persol/Eyeglasses.json";
import "../../styles/Persol/Eyeglasses.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
import imgman from "../../imgs/imgegl/PO-Holiday_DDM_ManEye_DM.avif";
import imgwoman from "../../imgs/imgegl/PO-Holiday_DDM_WomanEye_DM.avif";
// Định nghĩa ánh xạ hình ảnh (chỉ khai báo các hình ảnh cần dùng ở đây)
const eyeglassesImages = {
  "0PO0091V__24__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0091V__24__P21__shad__fr.avif"),
  "0PO0054V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0054V__95__P21__shad__fr.avif"),
  "0PO3318V__1142__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3318V__1142__P21__shad__fr.avif"),
  "0PO0204V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0204V__95__P21__shad__fr.avif"),

  "0PO3160V__1197__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3160V__1197__P21__shad__fr.avif"),
  "0PO3362V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3362V__95__P21__shad__fr.avif"),
  "0PO3007VM__1196__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3007VM__1196__P21__shad__fr.avif"),
  "0PO3355V__24__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3355V__24__P21__shad__fr.avif"),

  "0PO0086V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO0086V__95__P21__shad__fr.avif"),
  "0PO3331V__24__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3331V__24__P21__shad__fr.avif"),
  "0PO3339V__1197__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3339V__1197__P21__shad__fr.avif"),
  "0PO3340V__95__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3340V__95__P21__shad__fr.avif"),

  "0PO5007VT__8012__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5007VT__8012__P21__shad__fr.avif"),
  "0PO5011VT__8016__P21__shad__fr.avif": require("../../imgs/imgegl/0PO5011VT__8016__P21__shad__fr.avif"),
  "0PO3281V__95__P21__shad__fr.avi": require("../../imgs/imgegl/0PO3281V__95__P21__shad__fr.avif"),
  "0PO3337V__1196__P21__shad__fr.avif": require("../../imgs/imgegl/0PO3337V__1196__P21__shad__fr.avif"),

};

const Eyeglasses = () => {
  const [mensEyeglasses, setMensEyeglasses] = useState([]);
  const [womensEyeglasses, setWomensEyeglasses] = useState([]);

  useEffect(() => {
    setMensEyeglasses(EyeglassesData.filter((item) => item.gender === "male"));
    setWomensEyeglasses(EyeglassesData.filter((item) => item.gender === "female"));
  }, []);

  const renderEyeglasses = (eyeglasses) =>
    eyeglasses.map((item) => (
      <div key={item.id} className="eyeglasses-card">
        <Link to={`/eyeglasses/${item.id}`}
        onClick={() => window.scrollTo(0, 0)}  // Cuộn lên đầu trang khi nhấn vào sản phẩm
        >
        
          <img
            src={eyeglassesImages[item.image1]}
            alt={item.name}
            className="eyeglasses-image"
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
      <h4 id="title">Men's Eyeglasses</h4>
      <img src={imgman} width={400} />
      
      <div className="eyeglasses-container">{renderEyeglasses(mensEyeglasses)}</div>
      <h4 id="title" >Women's Eyeglasses</h4>
      <img src={imgwoman} width={400} />
      <div className="eyeglasses-container">{renderEyeglasses(womensEyeglasses)}</div>
    </>
  );
};

export default Eyeglasses;

