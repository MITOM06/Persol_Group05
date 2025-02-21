import '../styles/register.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logop from "../components/Logop";
import Navbarp from "../components/Navbarp";

const RegisterPage = () => {
    const [notification, setNotification] = useState("");
    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(""), 3000);
    };

    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        address: ""
    });


    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validate = () => {
        let errorMessage = "";
        let isOk = true;

        // 1️⃣ Kiểm tra Name trước
        if (!formData.name) {
            errorMessage = "Name cannot be left blank";
            isOk = false;
        }
        // 2️⃣ Kiểm tra Password
        else if (!formData.password) {
            errorMessage = "Password is required";
            isOk = false;
        }
        else if (formData.password.length < 6 || formData.password.length > 18) {
            errorMessage = "Password must be between 6 and 18 characters";
            isOk = false;
        }
        else if (!/\d/.test(formData.password)) {
            errorMessage = "Password must contain at least one number";
            isOk = false;
        }
        else if (formData.password !== formData.confirmPassword) {
            errorMessage = "Password and Confirm Password must be the same";
            isOk = false;
        }
        // 3️⃣ Kiểm tra Email
        else if (!formData.email) {
            errorMessage = "Email cannot be left blank";
            isOk = false;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            errorMessage = "Invalid email format";
            isOk = false;
        }
        else if (!formData.address) {
            errorMessage = "Address cannot be left blank";
            isOk = false;
        }

        if (!isOk) {
            showNotification(errorMessage);
        }

        return isOk;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert('Registered successfully. Welcome to Persol !', formData);
            // Reset the form
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                address: ''
            });
        }
    };


    return (
        <>
            <Logop />
            <p></p>
            <Navbarp />
            <p></p>
            {notification && <div className="notification-1">{notification}</div>}
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <div className="sign-in">
                        <div className="log-in">
                            <div className="overlap">
                                <div className="text-wrapper">Join the</div>
                                <div className="mem"> member </div>

                            </div>
                            <div className="login">
                                <div className="overlap-group-x">
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="rectangle" placeholder='Enter Address' />
                                    {/* {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>} */}

                                    <div className="overlap-2">
                                        <div className="name">

                                            <div className="text-wrapper-2">CONFIRM PASSWORD:</div>
                                            {/* {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>} */}

                                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="rectangle-4" placeholder='Confirm Password' />

                                            <input type="text" name="email" value={formData.email} onChange={handleChange} className="rectangle-5" placeholder='Enter Email' />


                                        </div>

                                        <div className="name-4">
                                            <div className="text-wrapper-3">EMAIL:</div>
                                            {/* {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>} */}
                                        </div>

                                    </div>

                                    <div className="overlap-3">
                                        <div className="name-">
                                            <div className="text-wrapper-5">NAME:</div>


                                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="rectangle-4" placeholder='Enter Username' />

                                            <input type="password" name="password" value={formData.password} onChange={handleChange} className="rectangle-5" placeholder='Enter Password' />
                                            {/* {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>} */}
                                        </div>
                                   <div className="name-4">
                                            <div className="text-wrapper-3">PASSWORD:</div>
                                        </div>
                                    </div>
                                    <div className="address">ADDRESS:</div>
                                    <button className="register">REGISTER NOW</button>
                                    <Link to="/">
                                    </Link>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RegisterPage;