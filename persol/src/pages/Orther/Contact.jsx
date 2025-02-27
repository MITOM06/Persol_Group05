
import React from "react";
import "../../styles/Orther/contact.css";
import Navbarp from "../../components/Navbarp";
import Logop from "../../components/Logop";


const ContactUs = () => {
  return (
    <>
      <Logop />
      <p></p>
      <Navbarp />
      <p></p>
      <div className="contact-container">
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
              Our telephone customer service is available at {" "}
              <a href="tel:123-456-789">123-456-789</a> from 7:30 AM to 5:30 PM EST Monday to Friday.
            </p>
            <p>
              You can also <a href="https://chatgpt.com/">chat with us</a> between 9:00 AM and 4:30 PM EST Monday to Friday.
            </p>
            <p>
              Alternatively, send us a message using the contact form below.
            </p>
            <p>
              If you need additional support or assistance due to a disability, at 1-855-LXACCESS (855-592-2237).
            </p>
            <p>
              Please keep in the mind possible delays in answers.
            </p>
            <p>
              But rest assured that your customer service will get back to you as soon as they can. Thank you for your patience.
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5516829403978!2d106.70715208765458!3d10.845580030358066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529564f2b4679%3A0x92c1b5bfdc78c98!2zRlBUIEFwdGVjaCBW4bqhbiBQaMO6YyA2Mg!5e0!3m2!1sen!2s!4v1649989601990!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p>Email: <a href="mailto:NhanLT27@fe.edu.vn">NhanLT27@fe.edu.vn</a></p>
        </div>
      </div>

    </>
  );
};

export default ContactUs;