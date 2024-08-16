import React, { useState } from "react";
import "./Services.css";
import cart from "./images/shopping-cart-black-shape.png";
import phone from "./images/phone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

function Services() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleGetStartedClick = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
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
      <section id="pricing">
        <div className="container2">
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h2 className="display-4 fw-normal text-body-emphasis">
              A Plan for Every Meal
            </h2>
            <p className="fs-5 text-body-secondary">
              Simple and affordable price plans for you and your family.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Burger</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $0
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>$0/mo</li>
                    <li>5 Matches Per Day</li>
                    <li>10 Messages Per Day</li>
                    <li>Unlimited App Usage</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-dark"
                    onClick={() => handleGetStartedClick("Burger")}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pizza</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $15
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>$15/mo</li>
                    <li>Unlimited Matches</li>
                    <li>Unlimited Messages</li>
                    <li>Unlimited App Usage</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-dark"
                    onClick={() => handleGetStartedClick("Pizza")}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-dark">
                <div className="card-header py-3 text-bg-dark border-primary">
                  <h4 className="my-0 fw-normal">Pasta</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $29
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>$29/mo</li>
                    <li>Priority Listing</li>
                    <li>Unlimited Matches & Messages</li>
                    <li>Unlimited App Usage</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-dark"
                    onClick={() => handleGetStartedClick("Pasta")}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment for {selectedPlan} Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCVV">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Pay Now
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowPaymentModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="footer">
        <div className="row">
          <div className="column">
            <h5>Section</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <form className="subscribe-form">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input id="newsletter1" type="text" placeholder="Email address" />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>
              <a href="#">
                <img src="twitter-icon.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="instagram-icon.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="facebook-icon.svg" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
