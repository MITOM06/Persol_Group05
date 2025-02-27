import React from "react";
import "../styles/Orther/Footer.css";
import thanhtoan01 from "../imgs/imgft/thethanhtoan4.svg"
import thanhtoan02 from "../imgs/imgft/thethanhtoan.svg"
import thanhtoan03 from "../imgs/imgft/thethanhtaon5.webp"
import thanhtoan04 from "../imgs/imgft/the thanhtoan2svg.svg"
import thanhtoan05 from "../imgs/imgft/apple-pay.svg"
import Instagram from "../imgs/imgft/instagram-logo.svg";
import Faceook from "../imgs/imgft/facebook-logo.svg";
import Twitter from "../imgs/imgft/Twitter-X-Logo.svg";
import Pritersrt from "../imgs/imgft/pinterest-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="/Contact">Contact Us</a></li>
            <li>Shipping Information</li>
            <li>Track My Order</li>
            <li>Return & Warranties</li>
            <li>Return an Item</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Special Services</h4>
          <ul>
            <li>Initials Engraving</li>
            <li>Corporate Gifts</li>
            <li>Greeting Card</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Persol</h4>
          <ul>
            <li><a href="/sunglasses">Persol Sunglasses</a></li>
            <li><a href="/Eyeglasses">Persol Eyeglasses</a></li>
            <li>Persol Prescription Lenses</li>
            <li>Behind Persol</li>
            <li>Promo Access</li>
            <li>Makers Loyalty Program</li>
            <li><a href="/Sitemap">Site Map</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal Area</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>California Collection Notice</li>
            <li>Notice of Financial Incentive</li>
            <li>HIPAA - Notice of Privacy</li>
            <li>Consumer Health Data Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Terms of Sale</li>
            <li>AdChoices</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="payment-methods">
          <h4>Payment Methods</h4>
          <div className="payment-icons">
            <img src={thanhtoan01} width={40}></img>
            <img src={thanhtoan02} width={40}></img>
            <img src={thanhtoan03} width={40}></img>
            <img src={thanhtoan04} width={40}></img>
            <img src={thanhtoan05} width={40}></img>
          </div>
        </div>

        <div className="social-media">
          <h4>Social Media</h4>
          <div className="social-icons">
            <img src={Instagram} width={20}></img>
            <img src={Faceook} width={20}></img>
            <img src={Twitter} width={20}></img>
            <img src={Pritersrt} width={20}></img>
          </div>
        </div>

        <div className="country-selector">
          <h4>Selected Country</h4>
          <span>🇺🇸 USA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
