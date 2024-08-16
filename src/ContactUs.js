import React, { useState } from "react";
import "./Contact.css";
import cart from "./images/shopping-cart-black-shape.png";
import phone from "./images/phone.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://hotel-project-a0e1e-default-rtdb.firebaseio.com/formDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message, please try again.");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="list">
          <li className="list-item">
            <a href="/">Home</a>
          </li>
          <li className="list-item">
            <a href="/about">About us</a>
          </li>
          <li className="list-item">
            <a href="/services">Services</a>
          </li>
          <li className="list-item">
            <a href="/blog">Blog</a>
          </li>
          <li className="list-item">
            <a href="/contactus">Contact Us</a>
          </li>
          <div className="icons">
            <a href="">
              <img src={cart} alt="Cart" />
            </a>
          </div>
          <div className="icons">
            <a href="">
              <img className="phone" src={phone} alt="Phone" />
            </a>
          </div>
        </ul>
      </nav>
      <div className="contactus-contact100">
        <div className="wrap-contact100">
          <form
            className="contact100-form validate-form"
            onSubmit={handleSubmit}
          >
            <span className="contact100-form-title">Contact Us</span>
            <div
              className="wrap-input100 validate-input bg1"
              data-validate="Please Type Your Name"
            >
              <span className="label-input100">FULL NAME *</span>
              <input
                className="input100"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div
              className="wrap-input100 validate-input bg1 rs1-wrap-input100"
              data-validate="Enter Your Email (e@a.x)"
            >
              <span className="label-input100">Email *</span>
              <input
                className="input100"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email "
              />
            </div>
            <div className="wrap-input100 bg1 rs1-wrap-input100">
              <span className="label-input100">Phone</span>
              <input
                className="input100"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Number Phone"
              />
            </div>
            <div
              className="wrap-input100 validate-input bg0 rs1-alert-validate"
              data-validate="Please Type Your Message"
            >
              <span className="label-input100">Message</span>
              <textarea
                className="input100"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="contactus-contact100-form-btn">
              <button
                className="contact100-form-btn"
                type="submit"
                onClick={handleSubmit}
              >
                <span>
                  Submit
                  <i
                    className="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">{/* Footer code */}</div>
    </div>
  );
}

export default ContactUs;
