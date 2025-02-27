import { Link } from "react-router-dom";
import React, { useState } from "react";
import saleproduct from "../../data/Tomford/saleproduct.json";
// import "../../styles/Tomford/Tomford_Saleproduct.css"
import "../../styles/Tomford/tomford.css"
import Logot from "../../components/Logot";
import Navbart from '../../components/Navbart';
const imageUrl = "/img2/sp.jpg";

const TomfordSaleproduct = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [allProductsShown, setAllProductsShown] = useState(false);

  const showMoreProducts = () => {
    if (visibleProducts + 3 >= saleproduct.length) {
      setVisibleProducts(saleproduct.length);
      setAllProductsShown(true); // Đánh dấu là đã hiển thị hết sản phẩm
    } else {
      setVisibleProducts((prev) => prev + 3);
    }
  };

  return (
    <>
    <Logot />
      <p></p>
      <Navbart />
      <p></p>
      <div>
        <img src={imageUrl}  className="background-image" />
      </div>

      <div className="row">
        <h4> SALE PRODUCT </h4>

        {saleproduct.slice(0, visibleProducts).map((product) => (
          <div className="col " key={product.id}>
            <div className="center">
              <Link className="non-decor" to={`/saleproducttomford/${product.id}`}>
                <div className="hover-img">
                  {product.image ? (
                    <img
                      src={product.image}
                      width="500"
                      height="400"
                      alt={product.name}
                      onError={(e) =>
                        (e.target.src = "/images/default-image.jpg")
                      }
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

        {/* Luôn hiển thị nút nhưng đổi text khi hết sản phẩm */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button 
            onClick={showMoreProducts} 
            className="show-more-btn" 
            disabled={allProductsShown} // Khi hết sản phẩm, nút bị vô hiệu hóa
          >
            {allProductsShown ? "No more product to display" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TomfordSaleproduct;
