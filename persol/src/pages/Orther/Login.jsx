import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Orther/login.css";
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState("");

    const showNotifications = (message) => {
        setNotifications(message);
        setTimeout(() => setNotifications(""), 3000);
    };

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;


        if (!formData.username.trim()) {
            tempErrors.username = "User name is required!";
            isValid = false;
        }


        if (!formData.password) {
            tempErrors.password = "Password is required!";
            isValid = false;
        } else {
            if (formData.password.length < 6 || formData.password.length > 18) {
                tempErrors.password = "Password must be between 6 and 18 characters!";
                isValid = false;
            } else if (!/\d/.test(formData.password)) {
                tempErrors.password = "Password must contain at least one number!";
                isValid = false;
            }
        }

        setErrors(tempErrors);
        setTimeout(() => setErrors({}), 3000);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate("/");
        }
    };

    return (
        <>
            <Logop />
            <Navbarp />
            {notifications && <div className="notifications">{notifications}</div>}

            <div className="log-in">
                <p className="join-the-fun">
                    <span className="text-wrapper-P">Login to </span>
                    <span className="brand">Persol</span>
                </p>

                <div className="overlap-group-1">
                    <div className="username">USER NAME:</div>
                    <input
                        className="fillusername"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter Name"
                    />
                    {errors.username && <div className="error">{errors.username}</div>}

                    <div className="password">PASSWORD:</div>
                    <input
                        className="fillpassword"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                    />
                    {errors.password && <div className="error">{errors.password}</div>}

                    <div className="overlap">
                        <Link to="/" > <button className="loginP" onClick={handleSubmit}>
                            LOGIN
                        </button>
                        </Link>


                        <div className="div-wrapper">
                            <Link to="/create" className="create-account">
                                Don't have an account? Register now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
