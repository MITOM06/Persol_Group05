import React from 'react';
import GucciSunglasses from '../../data/Gucci/Sunglasses/glasses.json';
import GucciNewproducts from "../../data/Gucci/Newproduct/glasses.json"
import GucciSaleproducts from "../../data/Gucci/Saleglasses/glasses.json"
import GucciEyeGlasses from "../../data/Gucci/Eyeglasses/glasses.json"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logog from "../../components/Logog";
import Navbarg from "../../components/Navbarg"
import "../../styles/Gucci/homepage.css"

const Gucci = () => {
  const [notification, setNotification] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleAddtocart = () => {
    setNotification(`Your item has been added to the cart!`);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <>
      <Logog />
      <p></p>
      <Navbarg />
      <p></p>
      <div className="product-container">
        {/* New Product Section */}
        <div className="product-section">
          <h2>New Product</h2>
          <div className="product-items">
            {GucciNewproducts.map((Newproduct) => (
              <div key={Newproduct.id} className="product-item">
                <Link to={`/GucciNewproduct/${Newproduct.id}`}>
                  <img src={Newproduct.image} alt={Newproduct.name} />
                </Link>
                <div className="product-overlay">NEW</div>
                <div className="product-info">
                  <div>{Newproduct.name}</div>
                  <div className='product-info-price'>{Newproduct.price}</div>
                  <Link to={`/GucciNewproduct/${Newproduct.id}`}>
                    <button className="btn-of-page">Details</button>
                  </Link>
                  <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sale Product Section */}
        <div className="product-section">
          <h2>Sale</h2>
          <div className="product-items">
            {GucciSaleproducts.map((Saleproducts) => (
              <div key={Saleproducts.id} className="product-item">
                <Link to={`/GucciSaleproducts/${Saleproducts.id}`}>
                  <img src={Saleproducts.image} alt={Saleproducts.name} />
                </Link>
                <div className="product-overlay">SALE</div>
                <div className="product-info">
                  <div>{Saleproducts.name}</div>
                  <div style={{ color: '#555', textDecoration: 'line-through' }}>{Saleproducts.oldprice}</div>
                  <div>{Saleproducts.price}</div>
                  <Link to={`/GucciSaleproducts/${Saleproducts.id}`}>
                    <button className="btn-of-page">Details</button>
                  </Link>
                  <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sunglasses Section */}
        <div className="product-section">
          <h2>Sunglasses</h2>
          <div className="product-items">
            {GucciSunglasses.map((Sunglasses) => (
              <div key={Sunglasses.id} className="product-item">
                <Link to={`/GucciSunglasses/${Sunglasses.id}`}>
                  <img src={Sunglasses.image} alt={Sunglasses.name} />
                </Link>
                <div className="product-info">
                  <div>{Sunglasses.name}</div>
                  <div>{Sunglasses.price}</div>
                  <Link to={`/GucciSunglasses/${Sunglasses.id}`}>
                    <button className="btn-of-page">Details</button>
                  </Link>
                  <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eyeglasses Section */}
        <div className="product-section">
          <h2>Eyeglasses</h2>
          <div className="product-items">
            {GucciEyeGlasses.map((EyeGlasses) => (
              <div key={EyeGlasses.id} className="product-item">
                <Link to={`/GucciEyeGlasses/${EyeGlasses.id}`}>
                  <img src={EyeGlasses.image} alt={EyeGlasses.name} />
                </Link>
                <div className="product-info">
                  <div>{EyeGlasses.name}</div>
                  <div>{EyeGlasses.price}</div>
                  <Link to={`/GucciEyeGlasses/${EyeGlasses.id}`}>
                    <button className="btn-of-page">Details</button>
                  </Link>
                  <button className="btn-of-page" onClick={handleAddtocart}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display notification */}
      {isVisible && (
        <div className="rayban-add-to-cart-notification">
          {notification}
        </div>
      )}

    </>
  );
};



export default Gucci;
