import { Link } from "react-router-dom";
import React from "react";

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
        <h4> EYEWEAR OPTICAL </h4>
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="center">
              <Link className="non-decor" to={`/eyeglassestomford/${product.id}`}>
                <div className="hover-img">
                 
                  {product.image ? (
                    <img
                      src={process.env.PUBLIC_URL + product.image} 
                      className="product-image"
                      width="400"
                     height="300"
                      alt={product.name}
                      onError={(e) => (e.target.src = "/images/default-image.jpg")}
                    />
                  ) : (
                    <p>Image not available</p>
                  )}
                  <h1 className="non-decor">{product.name}</h1>
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
