import React from "react";
import { Routes, Route } from "react-router-dom";


//1.components
import Logop from "./components/Logop";
import Logor from "./components/Logoray"
import Logot from "./components/Logot";
import Logog from "./components/Logoray"
import Navbarr from "./components/Navbarr";
import Navbarp from "./components/Navbarp";
import Navbart from "./components/Navbart";
import Navbarg from "./components/Navbarg";
import Footer from "./components/footer";
import Sitemap from "./components/Sitemap";
import Cart from "./components/Cart";

import { CompareProvider } from '../src/components/CompareContext';  // Import Provider để quản lý trạng thái
import ComparePage from './pages/Orther/Compare';


//2.data
//2.1.Gucci
import GucciEyeGlasses from "./data/Gucci/Eyeglasses/glasses.json";
import GucciSunglasses from "./data/Gucci/Sunglasses/glasses.json";
import GucciSaleProducts from "./data/Gucci/Saleglasses/glasses.json";
import GucciNewProducts from "./data/Gucci/Newproduct/glasses.json";

//2.2.Rayban
import RaybanSunglasses from "./data/Rayban/Sunglasses/glasses.json";
import RaybanNewProducts from "./data/Rayban/Newproduct/newproduct.json";
import RaybanEyeGlasses from "./data/Rayban/Eyeglasses/eyeglasses.json";
import RaybanSaleProducts from "./data/Rayban/Sale/sale.json"

//2.3.Tomford
import newproducts from "./data/Tomford/newproducts.json";
import saleproduct from "./data/Tomford/saleproduct.json";
import products from "./data/Tomford/glasses.json";
import eyewearProducts from "./data/Tomford/glasses_eyewear.json";


//3.Persol
import Home from "./pages/Persol/Home";
import HomeDetail from "./pages/Persol/HomeDetail";
import Sunglasses from "./pages/Persol/Sunglasses";
import SunglassesDetail from "./pages/Persol/SunglassesDetail";
import Eyeglasses from "./pages/Persol/Eyeglasses";
import EyeglassesDetail from "./pages/Persol/EyeglassesDetail";
import Sale from "./pages/Persol/Sale";
import SaleDetail from "./pages/Persol/SaleDetail";
import Searchp from "./pages/Persol/Searchp";



//4.Tomford
import Searcht from "./pages/TomFord/Searcht";
import Alltom from "./pages/TomFord/Alltom";
import Tomford from "./pages/TomFord/Tomford";
import Tomford_Detail from "./pages/TomFord/Tomford_Detail";
import Tomford_Eyewear from "./pages/TomFord/Tomford_Eyewear";
import Tomford_Eyewear_Detail from "./pages/TomFord/Tomford_Eyewear_Detail";
import Tomford_Newproduct from "./pages/TomFord/Tomford_Newproduct";
import TomfordNewproductDetail from "./pages/TomFord/Tomford_Newproduct_Detail";
import Tomford_Saleproduct from "./pages/TomFord/Tomford_Saleproduct";
import Tomford_Saleproduct_Detail from "./pages/TomFord/Tomford_Saleproduct_Detail";


//5.Rayban
import Searchr from "./pages/Rayban/Searchr";
import Allray from "./pages/Rayban/AllRay";
import Rayban from './pages/Rayban/Rayban';
import RaybanSunglassesHomePage from "./pages/Rayban/RaybanSunglasses";
import RaybanSunglassesDetails from "./pages/Rayban/RaybanSunglassesDetails";
import RaybanEyeGlassesHomePage from "./pages/Rayban/RaybanEyeGlasses";
import RaybanEyeGlassesDetails from "./pages/Rayban/RaybanEyeGlassesDetails";
import RaybanNewProductHomePage from "./pages/Rayban/RaybanNewProduct";
import RaybanNewProductsDetails from "./pages/Rayban/RaybanNewProductDetails";
import RaybanSaleHomePage from "./pages/Rayban/RaybanSale";
import RaybanSaleDetails from "./pages/Rayban/RaybanSaleDetails";

//6.Gucci
import Searchg from "./pages/Gucci/Searchg";
import Gucci from './pages/Gucci/Gucci';
import AllGucci from "./pages/Gucci/AllGucci";
import GucciNewProductHomePage from "./pages/Gucci/GucciNewProduct";
import GucciNewProductDetails from "./pages/Gucci/GucciNewProductDetails";
import GucciSaleProductsHomePage from "./pages/Gucci/GucciSale";
import GucciSaleProductsDetails from "./pages/Gucci/GucciSaleDetails"
import GucciSunglassesHomePage from "./pages/Gucci/GucciSunglasses";
import GucciSunglassesDetail from "./pages/Gucci/GucciSunglassesDetails";
import GucciEyeGlassesHomePage from "./pages/Gucci/GucciEyeGlasses";
import GucciEyeGlassesDetails from "./pages/Gucci/GucciEyeGlassesDetails";
import Guccimore from "./pages/Gucci/Guccimore";


//7.Orther
import Register from "./pages/Orther/Register";
import Login from "./pages/Orther/Login";
import Contact from "./pages/Orther/Contact";

const App = () => {
  return (
    <>
      <Routes>
        {/* 1.components */}
        <Route path="/Logop" element={<Logop />} />
        <Route path="/Logoray" element={<Logor />} />
        <Route path="/Logot" element={<Logog />} />
        <Route path="/Logog" element={<Logot />} />
        <Route path="/Navbarr" element={< Navbarr />} />
        <Route path="/Navbarp" element={< Navbarp />} />
        <Route path="/Navbart" element={< Navbart />} />
        <Route path="/Navbarg" element={< Navbarg />} />
        <Route path="/sitemap" element={< Sitemap />} />
        <Route path="/Cart" element={< Cart />} />


        {/*2.data
        2.1.Gucci */}
        <Route path="/productG/:id" element={<AllGucci />} />
        <Route path="/GucciSunglasses/:id" element={<GucciSunglassesDetail GucciSunglasses={GucciSunglasses} />} />
        <Route path="/GucciEyeGlasses/:id" element={<GucciEyeGlassesDetails GucciEyeGlassesDetails={GucciEyeGlasses} />} />
        <Route path="/GucciSaleProducts/:id" element={<GucciSaleProductsDetails GucciSaleProductDetails={GucciSaleProducts} />} />
        <Route path="/GucciNewProduct/:id" element={<GucciNewProductDetails GucciNewProductDetails={GucciNewProducts} />} />

        {/* 2.2.Rayban */}
        <Route path="/Allray/:id" element={<Allray />} />
        <Route path='/RaybanNewProduct/:id' element={<RaybanNewProductsDetails RaybanNewProductsDetails={RaybanNewProducts} />} />
        <Route path="/RaybanSunglasses/:id" element={<RaybanSunglassesDetails RaybanSunglassesDetails={RaybanSunglasses} />} />
        <Route path='/RaybanSaleProduct/:id' element={<RaybanSaleDetails RaybanSaleDetails={RaybanSaleProducts} />} />
        <Route path='/RaybanEyeGlasses/:id' element={<RaybanEyeGlassesDetails RaybanEyeGlassesDetails={RaybanEyeGlasses} />} />

        {/* 2.3.Tomford */}
        <Route path="/Alltom/:id" element={<Alltom />} />
        <Route path="/sunglassestomford/:id" element={<Tomford_Detail products={products} />} />
        <Route path="/eyeglassestomford/:id" element={<Tomford_Eyewear_Detail eyewearProducts={eyewearProducts} />} />
        <Route path="/newproductstomford/:id" element={<TomfordNewproductDetail newproducts={newproducts} />} />
        <Route path="/saleproducttomford/:id" element={<Tomford_Saleproduct_Detail saleproduct={saleproduct} />} />


        {/* 3.Persol */}
        <Route path="/" element={<Home />} />
        <Route path="/Searchp" element={<Searchp />} />
        <Route path="/HomeDetail/:id" element={<HomeDetail />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/sunglasses/:id" element={<SunglassesDetail />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/eyeglasses/:id" element={<EyeglassesDetail />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/sale/:id" element={<SaleDetail />} />

        {/* 4.Tomford */}
        <Route path="/Searcht" element={<Searcht />} />
        <Route path="/Tomford" element={<Tomford />} />
        <Route path="/sunglassesTomford" element={<Tomford />} />
        <Route path="/eyeglassesTomford" element={<Tomford_Eyewear />} />
        <Route path="/newproductsTomford" element={<Tomford_Newproduct />} />
        <Route path="/saleproductTomford" element={<Tomford_Saleproduct />} />


        {/* 5.Rayban */}
        <Route path="/Searchr" element={<Searchr />} />
        <Route path='/RaybanHomePage' element={<Rayban />} />
        <Route path='/RaybanNewProduct' element={<RaybanNewProductHomePage />} />
        <Route path='/RaybanSunglasses' element={<RaybanSunglassesHomePage />} />
        <Route path='/RaybanEyeGlasses' element={<RaybanEyeGlassesHomePage />} />
        <Route path='/RaybanSaleProduct' element={<RaybanSaleHomePage />} />

        {/* 6.Gucci */}
        <Route path="/Searchg" element={<Searchg />} />
        <Route path='/GucciProducts' element={<Guccimore />} />
        <Route path='/GucciHomePage' element={<Gucci />} />
        <Route path='/GucciNewProduct' element={<GucciNewProductHomePage />} />
        <Route path='/GucciSaleProducts' element={<GucciSaleProductsHomePage />} />
        <Route path='/GucciSunglasses' element={<GucciSunglassesHomePage />} />
        <Route path='/GucciEyeGlasses' element={<GucciEyeGlassesHomePage />} />

        {/* 7.Orther */}
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />


      </Routes>
      <CompareProvider>
        <Routes>
          <Route path="/compare" element={<ComparePage GucciSunglasses={GucciSunglasses} GucciEyeGlassesDetails={GucciEyeGlasses} GucciSaleProductDetails={GucciSaleProducts} GucciNewProductDetails={GucciNewProducts} RaybanNewProductsDetails={RaybanNewProducts} RaybanSunglassesDetails={RaybanSunglasses} RaybanSaleDetails={RaybanSaleProducts} RaybanEyeGlassesDetails={RaybanEyeGlasses} products={products} eyewearProducts={eyewearProducts} newproducts={newproducts} saleproduct={saleproduct} />} />  {/* Route cho trang so sánh */}
        </Routes>
      </CompareProvider>
      <Footer />
    </>
  );
};

export default App;


