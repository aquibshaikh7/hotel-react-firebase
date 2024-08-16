import React, { useState } from "react";
import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import burger from "./images/burger.jpg";
import pizza from "./images/pizza.jpg";
import pasta from "./images/pasta.jpg";
import cart from "./images/shopping-cart-black-shape.png";
import phone from "./images/phone.png";
import { Modal, Button, Form } from "react-bootstrap";

function Blog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: burger,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 2,
      image: burger,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 3,
      image: burger,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 4,
      image: pizza,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 5,
      image: pizza,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 6,
      image: pizza,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 7,
      image: pasta,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 8,
      image: pasta,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
    {
      id: 9,
      image: pasta,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      time: "9 mins",
    },
  ]);

  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleViewClick = (blog) => {
    setCurrentBlog(blog);
    setShowViewModal(true);
  };

  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setEditedText(blog.text);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === currentBlog.id ? { ...blog, text: editedText } : blog
      )
    );
    setShowEditModal(false);
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
      <h1 className="blog-heading">Blogs</h1>
      <div className="album py-3">
        <div className="blog">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {blogs.map((blog) => (
              <div className="col" key={blog.id}>
                <div className="card shadow-sm">
                  <img src={blog.image} alt="" width="100%" height="225" />
                  <div className="card-body">
                    <p className="card-text">{blog.text}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleViewClick(blog)}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleEditClick(blog)}
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">{blog.time}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentBlog && (
            <div>
              <img src={currentBlog.image} alt="Blog" className="img-fluid" />
              <p>{currentBlog.text}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editBlogText">
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
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

export default Blog;
