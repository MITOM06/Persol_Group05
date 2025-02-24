import "../styles/Orther/Sitemap.css";
import Navbarp from "../components/Navbarp";
import Logop from "../components/Logop";

const Sitemap = () => {
  return (
    <>
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      <h2>Site Map</h2>
      <div className="sitemap-container">
        <div className="sitemap-section">
          <h4>Persol</h4>
          <ul>
            <li><a href="/">NEW PRODUCT</a></li>
            <li><a href="/sunglasses">SUNGLASSES</a></li>
            <li><a href="/eyeglasses">EYEGLASSES</a></li>
            <li><a href="/sale">SALE</a></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h4>Tom Ford</h4>
          <ul>
            <li><a href="/newproductsTomford">NEW PRODUCT</a></li>
            <li><a href="/sunglassesTomford">SUNGLASSES</a></li>
            <li><a href="/eyeglassesTomford">EYEGLASSES</a></li>
            <li><a href="/saleproductTomford">SALE</a></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h4>Gucci</h4>
          <ul>
            <li><a href="/GucciNewProduct">NEW PRODUCT</a></li>
            <li><a href="/GucciSunglasses">SUNGLASSES</a></li>
            <li><a href="/GucciEyeGlasses">EYEGLASSES</a></li>
            <li><a href="/GucciSaleProducts">SALE</a></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h4>Ray-Ban</h4>
          <ul>
            <li><a href="/RaybanNewProduct">NEW PRODUCT</a></li>
            <li><a href="/RaybanSunglasses">SUNGLASSES</a></li>
            <li><a href="/RaybanEyeGlasses">EYEGLASSES</a></li>
            <li><a href="/RaybanSaleProduct">SALE</a></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h4>Other</h4>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/create">REGISTER</a></li>
            <li><a href="/Contact">CONTACT</a></li>
            <li><a href="/Sitemap">SITEMAP</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
