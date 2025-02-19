import Logop from "../imgs/imgnb/PO_header_persol_logo.svg"
import Logot from "../imgs/imgnb/tom-ford-logo-png_seeklogo-383930.png"
import Logor from "../imgs/imgnb/download.jpg"
import Logog from "../imgs/imgnb/download.png"
import "../styles/logo.css"
import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <>
            <Link to="/"><img src={Logop} id="logo" width={90} /></Link>

            <table className="logo-container">
                <td>
                    <Link to="/newproductstomford"><img src={Logot} width={90} /></Link>

                </td>

                <td>
                    <img src={Logor} width={90} />
                </td>

                <td>
                    <img src={Logog} width={90} />
                </td>
            </table>

        </>
    );
}

export default Logo;