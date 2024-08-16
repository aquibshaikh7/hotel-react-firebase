import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./Firebase1"; // Import Firestore database instance
import "./Main.css";
import burger from "./images/burger.jpg";
import cart from "./images/shopping-cart-black-shape.png";
import pizza from "./images/pizza.jpg";
import pasta from "./images/pasta.jpg";
import slide1 from "./images/pasta1.jpg";
import slide2 from "./images/burger.jpg";
import slide3 from "./images/pizza.jpg";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({
    burger: 0,
    pizza: 0,
    pasta: 0,
  });

  // User details state
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate(); // For navigation

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleQuantityChange = (item, value) => {
    setQuantities({
      ...quantities,
      [item]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item);
    if (existingItem) {
      // If item exists in cart, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item
            ? { ...cartItem, quantity: cartItem.quantity + quantities[item] }
            : cartItem
        )
      );
    } else {
      // If item does not exist in cart, add it
      setCartItems([...cartItems, { name: item, quantity: quantities[item] }]);
    }
    setQuantities({ ...quantities, [item]: 0 }); // Reset quantity after adding to cart
  };

  const updateCartItemQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((cartItem) => cartItem.name !== item));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    }
  };

  const goToCart = () => {
    navigate("/cart", { cartItems }); // Navigate to Cart page and pass cartItems as state
  };

  const handleCheckout = async () => {
    // Save user details and cart items to Firestore
    const orderDetails = {
      ...userDetails,
      cartItems,
    };

    try {
      const docRef = await addDoc(collection(database, "orders"), orderDetails);
      console.log("Document written with ID: ", docRef.id);
      alert("Order placed successfully!");
      setCartItems([]); // Clear the cart after successful checkout
      setUserDetails({ name: "", address: "", phone: "" }); // Clear user details
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="gradient-color">
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
            <a href="#" onClick={toggleSidebar}>
              <img src={cart} alt="Cart" />
            </a>
          </div>
        </ul>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h3>Cart Items</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                {item.name}: {item.quantity}
              </p>
              <div className="quantity-controls">
                <button
                  className="btn-minus"
                  onClick={() =>
                    updateCartItemQuantity(
                      item.name,
                      Math.max(0, item.quantity - 1)
                    )
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemQuantity(
                      item.name,
                      Math.max(0, parseInt(e.target.value))
                    )
                  }
                />
                <button
                  className="btn-plus"
                  onClick={() =>
                    updateCartItemQuantity(item.name, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is currently empty.</p>
        )}

        <h3>User Details</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
          />
        </form>

        <button onClick={goToCart}>Go to Cart</button>
        <button onClick={handleCheckout}>Pay</button>
        <button onClick={toggleSidebar} className="close">
          Close
        </button>
      </div>

      <div className="container">
        <div className="box">
          <h1>LOREM IPSUM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            eligendi tempora praesentium commodi assumenda possimus cum sint
            quas beatae unde! Ipsam laboriosam rerum accusamus repudiandae quis
            cum sequi culpa numquam!
          </p>
        </div>
      </div>

      <div className="container1">
        <section>
          <h2>Order Now</h2>
          <div className="card-container">
            <div className="images">
              <img src={pizza} alt="Pizza" />
              <h3>PIZZA</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text</p>
              <input
                type="number"
                min="0"
                value={quantities.pizza}
                onChange={(e) =>
                  handleQuantityChange("pizza", parseInt(e.target.value))
                }
              />
              <button onClick={() => addToCart("pizza")}>Order</button>
            </div>
            <div className="images">
              <img src={burger} alt="Burger" />
              <h3>BURGER</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text</p>
              <input
                type="number"
                min="0"
                value={quantities.burger}
                onChange={(e) =>
                  handleQuantityChange("burger", parseInt(e.target.value))
                }
              />
              <button onClick={() => addToCart("burger")}>Order</button>
            </div>
            <div className="images">
              <img src={pasta} alt="Pasta" />
              <h3>PASTA</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text</p>
              <input
                type="number"
                min="0"
                value={quantities.pasta}
                onChange={(e) =>
                  handleQuantityChange("pasta", parseInt(e.target.value))
                }
              />
              <button onClick={() => addToCart("pasta")}>Order</button>
            </div>
          </div>
        </section>
      </div>

      {/* Automatic Carousel */}
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Pasta</h3>
            <p>Fresh pasta is SO easy to make!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Burger</h3>
            <p>Have good Burger.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Pizza</h3>
            <p>Description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
};

export default Main;
