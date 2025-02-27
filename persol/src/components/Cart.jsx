import React, { useState, useEffect } from "react";
import Logop from "./Logop";
import Navbarp from "./Navbarp";
import "../styles/Orther/Cart.css";

// Load tất cả ảnh từ thư mục "imgs" (bao gồm cả thư mục con)
const images = require.context("../imgs", true, /\.(png|jpe?g|avif|webp)$/);

// Hàm tìm key file ảnh dựa trên tên file
const getImage = (fileName) => {
  const keys = images.keys();
  const matchingKey = keys.find((key) => key.endsWith(fileName));
  if (matchingKey) {
    return images(matchingKey).default;
  } else {
    console.error("Image not found:", fileName);
    return "";
  }
};

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    const initialSelection = {};
    storedCart.forEach((item) => {
      initialSelection[item.id] = true;
    });
    setSelectedItems(initialSelection);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    updateCart(newCart);
    const newSelection = { ...selectedItems };
    delete newSelection[itemId];
    setSelectedItems(newSelection);
  };

  const handleCheckboxChange = (itemId, checked) => {
    setSelectedItems({
      ...selectedItems,
      [itemId]: checked,
    });
  };

  // Các hàm tăng/giảm số lượng sản phẩm
  const incrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  // Tính tổng tiền: nếu sản phẩm sale (có newPrice) thì tính tổng gốc và tổng sale, ngược lại chỉ tính theo price
  let totalOriginal = 0;
  let totalSale = 0;
  cart.forEach((item) => {
    if (selectedItems[item.id]) {
      if (item.newPrice && item.newPrice !== item.price) {
        totalOriginal += parseFloat(item.price.replace("$", "")) * item.quantity;
        totalSale += parseFloat(item.newPrice.replace("$", "")) * item.quantity;
      } else {
        totalSale += parseFloat(item.price.replace("$", "")) * item.quantity;
      }
    }
  });

  return (
    <>
      <Logop />
      <Navbarp />
      <div className="cart-page">
        <h2 className="cart-title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-checkbox">
                  <input
                    type="checkbox"
                    checked={!!selectedItems[item.id]}
                    onChange={(e) =>
                      handleCheckboxChange(item.id, e.target.checked)
                    }
                  />
                </div>
                <div className="cart-item-image-container">
                  {item.image && (
                    <img
                      src={getImage(item.image)}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  )}
                </div>
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-prices">
                    {item.newPrice && item.newPrice !== item.price ? (
                      <>
                        <p className="cart-item-original-price">
                          <s>{item.price}</s>
                        </p>
                        <p className="cart-item-sale-price">{item.newPrice}</p>
                      </>
                    ) : (
                      <p className="cart-item-price">{item.price}</p>
                    )}
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <p className="cart-item-total">
                    Total: $
                    {(
                      (item.newPrice && item.newPrice !== item.price
                        ? parseFloat(item.newPrice.replace("$", ""))
                        : parseFloat(item.price.replace("$", ""))
                      ) * item.quantity
                    ).toFixed(2)}
                  </p>
                  {item.owner && (
                    <p className="cart-item-owner">Category: {item.owner}</p>
                  )}
                </div>
                <div className="cart-item-remove">
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          {totalOriginal > 0 && (
            <p className="cart-total-original-price">
              <s>Total: ${totalOriginal.toFixed(2)}</s>
            </p>
          )}
          <h3 className="cart-total-sale-price">
            {totalOriginal > 0
              ? `Sale Total: $${totalSale.toFixed(2)}`
              : `Total Price: $${totalSale.toFixed(2)}`}
          </h3>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
