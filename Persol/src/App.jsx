import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarp from "./Home page/components/Navbarp";
import Home from "./Home page/pages/Home";
import Logop from "./Home page/components/Logop";
import Footer from "./Home page/components/footer";
import Contact from "./Home page/pages/Contact";
import Sunglasses from "./Home page/pages/Sunglasses";
import Eyeglasses from "./Home page/pages/Eyeglasses";
import SunglassesDetail from "./Home page/pages/SunglassesDetail";
import EyeglassesDetail from "./Home page/pages/EyeglassesDetail";
import Tomford from "./Home page/pages/Tomford";
import Login from "./Home page/pages/Login";
import Register from "./Home page/pages/Register";
import Tomford_Detail from "./Home page/pages/Tomford_Detail";
import products from "./Home page/data/glasses.json";
import Tomford_Eyewear from "./Home page/pages/Tomford_Eyewear";
import Tomford_Eyewear_Detail from "./Home page/pages/Tomford_Eyewear_Detail";
import eyewearProducts from "./Home page/data/glasses_eyewear.json";
import Tomford_Newproduct from "./Home page/pages/Tomford_Newproduct";
import TomfordNewproductDetail from "./Home page/pages/Tomford_Newproduct_Detail";
import newproducts from "./Home page/data/newproducts.json";
import saleproduct from "./Home page/data/saleproduct.json"
import Tomford_Saleproduct from "./Home page/pages/Tomford_Saleproduct";
import Tomford_Saleproduct_Detail from "./Home page/pages/Tomford_Saleproduct_Detail";
import Logor from"./Home page/components/Logoray"
import Navbarr from "./Home page/components/Navbarr";
import HomeDetail from "./Home page/pages/HomeDetail";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Routes>
      <Route path="/ Navbarp" element={< Navbarp />} />
      <Route path="/Logop" element={<Logop/>} />

      <Route path="/ Navbarr" element={< Navbarr />} />
      <Route path="/Logoray" element={<Logor/>} />

        <Route path="/" element={<Home />} />
        <Route path="/HomeDetail/:id" element={<HomeDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/sunglasses/:id" element={<SunglassesDetail />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/eyeglasses/:id" element={<EyeglassesDetail />} />

        <Route path="/Tomford" element={<Tomford />} />

        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Register />} />


        <Route path="/sunglassesTomford" element={<Tomford />} />
        <Route path="/sunglassestomford/:id" element={<Tomford_Detail products={products} />} />


        <Route path="/eyeglassesTomford" element={<Tomford_Eyewear />} />
        <Route path="/eyeglassestomford/:id" element={<Tomford_Eyewear_Detail eyewearProducts={eyewearProducts} />} />



        <Route path="/newproductsTomford" element={<Tomford_Newproduct />} />
        <Route path="/newproductstomford/:id" element={<TomfordNewproductDetail newproducts={newproducts} />} />



        <Route path="/saleproductTomford" element={<Tomford_Saleproduct />} />
        <Route path="/saleproducttomford/:id" element={<Tomford_Saleproduct_Detail saleproduct={saleproduct} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;


