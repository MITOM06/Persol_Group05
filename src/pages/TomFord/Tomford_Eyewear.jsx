import { Link } from "react-router-dom";
import React from "react";
import "../../styles/Tomford/tomford_eyewear.css";
import products from "../../data/Tomford/glasses_eyewear.json";
import Logot from "../../components/Logot";
import Navbart from '../../components/Navbart';
const imageUrl = "/img1/backgroundimg.jpg";
const TomfordEyewear = () => {
  return (
    <>
      <Logot/>
      <p></p>
      <Navbart/>
      <p></p>
      <div>
        <img src={imageUrl} className="background-image" alt="Eyewear Optical Background" />
      </div>

      <div className="row">
        <h1> EYEWEAR OPTICAL </h1>
        {products.map((product) => (
          <div className="col col-4" key={product.id}>
            <div className="center">
              <Link to={`/eyeglassestomford/${product.id}`}>
                <div className="hover-img">
                  {/* Kiểm tra nếu hình ảnh có giá trị thì hiển thị */}
                  {product.image ? (
                    <img
                      src={process.env.PUBLIC_URL + product.image} // Đảm bảo đường dẫn đúng
                      className="product-image"
                      alt={product.name}
                      onError={(e) => (e.target.src = "/images/default-image.jpg")}
                    />
                  ) : (
                    <p>Image not available</p>
                  )}
                  <h1 className="non-link">{product.name}</h1>
                </div>
              </Link>
            </div>
          </div>
        ))}


      </div>

    </>
  );
};

export default TomfordEyewear;
