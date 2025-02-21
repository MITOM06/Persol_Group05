
import React from "react";
import { useEffect, useState } from "react";
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import Logop from "../components/Logop";
import Navbarp from "../components/Navbarp";


const LoginPage = () => {
    const [notifications, setNotifications] = useState("");
    const showNotifications = (message) => {
        setNotifications(message);
        setTimeout(() => setNotifications(""), 3000);
    };


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [isOk, checkIsOk] = useState(false)
    console.log('init', isOk);
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        //validate();
        //console.log(isOk)
    };

    const validate = () => {
        let tempErrors = {};
        checkIsOk(true);

        // Validate username
        if (!formData.username) {

            showNotifications('User name is required!')
            checkIsOk(false);
            return;
        }

        // Validate password
        if (!formData.password) {
            showNotifications('Password is required!')
            checkIsOk(false);
            return;
        } else {
            // Check password length
            if (formData.password.length < 6 || formData.password.length > 18) {
                showNotifications('Password must be between 6 and 18 characters!!!')
                checkIsOk(false);
                return;
            }
            // Check for at least one number in the password
            else if (!/\d/.test(formData.password)) {
                showNotifications('Password must contain at least one number!!!')
                checkIsOk(false);
                return;
            }
        }
        navigate("/page");
        return isOk;
    };

    const handleSubmit = (e) => {
        validate();
        // console.log('okkkk', okkk);

    };

    return (
        <>
            <Logop />
            <p></p>
            <Navbarp />
            <p></p>
            {notifications && <div className="notifications">{notifications}</div>}
            <div className="log-in">
                <p className="join-the-fun">
                    <span className="text-wrapper-P">Login to </span>

                    <span className="brand">Persol</span>
                </p>

                <div className="overlap-group-1">
                    <div className="username" >USER NAME:</div>

                    <div className="password">PASSWORD:</div>
                    <div>
                        <input className="fillpassword" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />
                    </div>
                    <div className="fillusername" /> <div>
                        <input className="fillusername" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter Name" />
                    </div>
                    <div className="overlap" >
                        <Link to='sunglasses'>  </Link>
                        <button className="loginP" onClick={() => handleSubmit()}> LOGIN</button>

                        <div className="div-wrapper">
                            <Link to='/create' >  <button className="create-account"  >REGISTER NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LoginPage;




