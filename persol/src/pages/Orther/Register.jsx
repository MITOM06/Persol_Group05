import '../../styles/Orther/register.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logop from "../../components/Logop";
import Navbarp from "../../components/Navbarp";

const RegisterPage = () => {
    const [notification, setNotification] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
        email: ""
    });

    const navigate = useNavigate();

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(""), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errorMessage = "";
        let isOk = true;

        if (!formData.name) {
            errorMessage = "Name cannot be left blank!";
            isOk = false;
        } else if (!formData.password) {
            errorMessage = "Password is required!";
            isOk = false;
        } else if (formData.password.length < 6 || formData.password.length > 18) {
            errorMessage = "Password must be between 6 and 18 characters!";
            isOk = false;
        } else if (!/\d/.test(formData.password)) {
            errorMessage = "Password must contain at least one number!";
            isOk = false;
        } else if (formData.password !== formData.confirmPassword) {
            errorMessage = "Password and Confirm Password must be the same!";
            isOk = false;
        } else if (!formData.email) {
            errorMessage = "Email cannot be left blank!";
            isOk = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            errorMessage = "Invalid email format!";
            isOk = false;
        }

        if (!isOk) showNotification(errorMessage);
        return isOk;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Registered successfully. Welcome to Persol!");
            setTimeout(() => navigate('/'), 1000);
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        }
    };

    return (
        <>
            <Logop />
            <Navbarp />
            {notification && <div className="notification-1">{notification}</div>}
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <div className="overlap-group-x">
                        <div className="text-join-the">Join the</div>
                        <div className="member">member</div>

                        <div className="text-name">NAME:</div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="fill-name"
                            placeholder='Enter Username'
                        />

                        <div className="text-pass">PASSWORD:</div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="fill-pass"
                            placeholder='Enter Password'
                        />

                        <div className="text-confirm-password">CONFIRM PASSWORD:</div>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="fill-confirmpass"
                            placeholder='Confirm Password'
                        />

                        <div className="text-email">EMAIL:</div>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="fill-email"
                            placeholder='Enter Email'
                        />

                        <button type="submit" className="register">REGISTER NOW</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RegisterPage;
