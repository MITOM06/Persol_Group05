import React from "react";
import "../styles/contact.css";
import Navbarp from "../components/Navbarp";
import Logop from "../components/Logop";
const ContactUs = () => {
  return (
    <>
      <Logop />
      <Navbarp />
      <div className="contact-container">
        <nav className="breadcrumb">
          <span>Home &gt; Contact Us</span>
        </nav>

        <div className="contact-content">
          <aside className="quick-links">
            <h3>Quick links</h3>
            <ul>
              <li>Returns</li>
              <li>Shipping Information</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </aside>

          <section className="contact-form">
            <h2>Contact Us</h2>
            <p>
              Our telephone customer service is available at{" "}
              <a href="tel:866-248-1940">866-248-1940</a> from 8:30 AM to 5:30 PM EST Monday to Friday.
            </p>
            <p>
              You can also <a href="#">chat with us</a> between 9:00 AM and 4:30 PM EST Monday to Friday.
            </p>
            <p>
              Alternatively, send us a message using the contact form below.
            </p>

            <form>
              <div className="form-group">
                <label>Topic *</label>
                <input type="text" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Your name *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Your email *</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="form-group">
                <label>Write your message</label>
                <textarea rows="5"></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </section>
        </div>

        <div className="company-info">
          <h3>Company Address</h3>
          <div id="map"></div>
          <p>Email: <a href="mailto:support@company.com">support@company.com</a></p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
