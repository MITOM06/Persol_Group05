import Logop from "../imgs/imgnb/PO_header_persol_logo.svg"
import Logot from "../imgs/imgnb/tom-ford-logo-png_seeklogo-383930.png"
import Logor from "../imgs/imgnb/z6305330183154_c91d836a3edd35bd6b408d3c0f08d1bf.jpg"
import Logog from "../imgs/imgnb/download.png"
import "../styles/Orther/logo.css"
import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <>
            <div className="mainlogo">
                <Link to="/"> <img src={Logop} width={90} /></Link>
            </div>
            <table className="logo-container">
                <td>
                    <Link to="/newproductstomford"><img src={Logot} width={90} /></Link>
                </td>

                <td>
                <Link to="/RaybanHomePage"><img src={Logor} width={90} /></Link>                  
                </td>

                <td>
                <Link to="/GucciHomePage"> <img src={Logog}  width={90}/></Link>
                </td>
            </table>

        </>
    );
}

export default Logo;