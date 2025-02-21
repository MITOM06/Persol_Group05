import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SunglassesData from "../../data/Persol/Sunglasses.json";
import "../../styles/Persol/Sunglasses.css";
import Navbarp from "../../components/Navbarp";
import Logop from "../../components/Logop";

import imgman from "../../imgs/imgsgl/PO-Holiday_DDM_Man_DM.avif";
import imgwoman from "../../imgs/imgsgl/PO-Holiday_DDM_Woman_DM.avif";

// Định nghĩa ánh xạ hình ảnh (chỉ khai báo các hình ảnh cần dùng ở đây)
const sunglassesImages = {
  "0PO0202S__24_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0202S__24_31__P21__shad__fr.avif"),
  "0PO3272S__95_48__STD__shad__fr.avif": require("../../imgs/imgsgl/0PO3272S__95_48__STD__shad__fr.avif"),
  "0PO3286S__24_57__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3286S__24_57__P21__shad__fr.avif"),
  "0PO0649__24_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0649__24_31__P21__shad__fr.avif"),

  "0PO3310S__B95_B1__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3310S__B95_B1__P21__shad__fr.avif"),
  "0PO3357S__95_58__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3357S__95_58__P21__shad__fr.avif"),
  "0PO3328S__1213S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3328S__1213S3__P21__shad__fr.avif"),
  "0PO9649S__24_58__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO9649S__24_58__P21__shad__fr.avif"),

  "0PO1018S__513_33__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1018S__513_33__P21__shad__fr.avif"),
  "0PO1020S__515_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1020S__515_31__P21__shad__fr.avif"),
  "0PO0052S__95_32__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0052S__95_32__P21__shad__fr.avif"),
  "0PO0203S__95_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO0203S__95_31__P21__shad__fr.avif"),

  "0PO1019S__515_31__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO1019S__515_31__P21__shad__fr.avif"),
  "0PO3366S__96_GJ__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3366S__96_GJ__P21__shad__fr.avif"),
  "0PO3336S__1213S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3336S__1213S3__P21__shad__fr.avif"),
  "0PO3327S__96_S3__P21__shad__fr.avif": require("../../imgs/imgsgl/0PO3327S__96_S3__P21__shad__fr.avif"),
};

const Sunglasses = () => {
  const [mensSunglasses, setMensSunglasses] = useState([]);
  const [womensSunglasses, setWomensSunglasses] = useState([]);

  useEffect(() => {
    setMensSunglasses(SunglassesData.filter((item) => item.gender === "male"));
    setWomensSunglasses(SunglassesData.filter((item) => item.gender === "female"));
  }, []);

  const renderSunglasses = (sunglasses) =>
    sunglasses.map((item) => (
      <div key={item.id} className="sunglasses-card">
        <Link
          to={`/sunglasses/${item.id}`}
          onClick={() => window.scrollTo(0, 0)}  // Cuộn lên đầu trang khi nhấn vào sản phẩm
        >
          <img
            src={sunglassesImages[item.image1]}
            alt={item.name}
            className="sunglasses-image"
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
      <h4 id="title">Men's Sunglasses</h4>
      <img src={imgman} width={400} alt="Men's Sunglasses" />
      <div className="sunglasses-container">{renderSunglasses(mensSunglasses)}</div>
      <h4 id="title">Women's Sunglasses</h4>
      <img src={imgwoman} width={400} alt="Women's Sunglasses" />
      <div className="sunglasses-container">{renderSunglasses(womensSunglasses)}</div>
    </>
  );
};

export default Sunglasses;
