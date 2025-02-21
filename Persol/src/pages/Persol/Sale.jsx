import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SaleData from "../../data/Persol/sale.json";
import "../../styles/Persol/Sale.css";
import Navbarp from "../../components/Navbarp";
import Logop from "../../components/Logop";

const saleImages = {
  "0PO3305S__1052S3__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3305S__1052S3__P21__shad__fr.avif"),
  "0PO3314S__24_58__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3314S__24_58__P21__shad__fr.avif"),
  "0PO3308S__95_31__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3308S__95_31__P21__shad__fr.avif"),
  "0PO2496SZ__1139P1__P21__shad__fr.avif": require("../../imgs/imgsale/0PO2496SZ__1139P1__P21__shad__fr.avif"),

  "0PO2482V__1081__TOP__shad__fr.avif": require("../../imgs/imgsale/0PO2482V__1081__TOP__shad__fr.avif"),
  "0PO2488V__1114__P21__shad__fr.avif": require("../../imgs/imgsale/0PO2488V__1114__P21__shad__fr.avif"),
  "0PO2495V__1078__P21__shad__fr.avif": require("../../imgs/imgsale/0PO2495V__1078__P21__shad__fr.avif"),
  "0PO3292V__985__P21__shad__fr.avif": require("../../imgs/imgsale/0PO3292V__985__P21__shad__fr.avif"),
};

const Sale = () => {
  const [mensSale, setMensSale] = useState([]);


  useEffect(() => {
    setMensSale(SaleData.filter((item) => item.gender === "male"));
  }, []);

  const renderSale = (sale) =>
    sale.map((item) => (
      <div key={item.id} className="sale-card">
        <Link to={`/sale/${item.id}`}
        onClick={() => window.scrollTo(0, 0)}  // Cuộn lên đầu trang khi nhấn vào sản phẩm
        >
          <img
            src={saleImages[item.image1]}
            alt={item.name}
            className="sale-image"
          />
        </Link>
        {item.favourite && <span className="favourite-label">FAVOURITE</span>}
        <h4>{item.name}</h4>
        {item.newPrice ? (
          <>
            <span className="pricesale">{item.price}</span>
            <span className="new-price">{item.newPrice}</span>
          </>
        ) : (
          <span className="new-price">{item.price}</span>
        )}


      </div>
    ));

  return (
    <>
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      
      <h4 id="title">Sale</h4>
      <div className="sale-container">{renderSale(mensSale)}</div>
    </>
  );
};

export default Sale;