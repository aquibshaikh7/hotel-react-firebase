
import burger from "./images/burger.jpg";
import pizza from "./images/pizza.jpg";
import pasta from "./images/pasta.jpg";
import React from "react";
import "./About.css";
import cart from "./images/shopping-cart-black-shape.png";
import phone from "./images/phone.png";
import "bootstrap/dist/css/bootstrap.min.css";

import chef1 from "./images/chef1.jpg";
import chef2 from "./images/chef2.jpg";
import chef3 from "./images/chef3.jpg";

const chefs = [
  {
    name: "Craig Salazar",
    title: "Senior Chef",
    image: chef1,
    description:
      "Sed posuere consectetur est at lobortis. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Oscar Thomsen",
    title: "Senior Chef",
    image: chef2,
    description:
      "Sed posuere consectetur est at lobortis. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "Martin Williams",
    title: "Senior Chef",
    image: chef3,
    description:
      "Sed posuere consectetur est at lobortis. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur.",
  },
];

function About() {
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
      <div className="experience-container">
        <div className="text-section">
          <h1>Experience Take Us To Be Professional Chef</h1>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Curabitur blandit tempus porttitor. Cras mattis consectetur purus
            sit amet fermentum.
          </p>
          <p>
            Donec id elit non mi porta gravida at eget metus. Donec id elit non
            mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Curabitur blandit tempus porttitor. Maecenas
            faucibus mollis interdum. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et.
          </p>
        </div>
        <div className="skills-section">
          <div className="skill">
            <span>Burger</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span className="percentage">90%</span>
          </div>
          <div className="skill">
            <span>Pizza</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "78%" }}></div>
            </div>
            <span className="percentage">78%</span>
          </div>
          <div className="skill">
            <span>Pasta</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
            <span className="percentage">85%</span>
          </div>
        </div>
      </div>
      <div className="about marketing">
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              <span className="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={burger}
              alt=""
              height="500"
              width="500"
              className="featurette-image"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src={pasta}
              alt=""
              height="500"
              width="500"
              className="featurette-image"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              And lastly, this one.
              <span className="text-body-secondary">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={pizza}
              alt=""
              height="500"
              width="500"
              className="featurette-image"
            />
          </div>
        </div>
      </div>
      <div className="chef-profiles-container">
        <h2>People Behind Tofukit</h2>
        <div className="chef-cards">
          {chefs.map((chef, index) => (
            <div key={index} className="chef-card">
              <div className="image-container">
                <img src={chef.image} alt={chef.name} />
              </div>
              <h3>{chef.name}</h3>
              <p className="title">{chef.title}</p>
              <p className="description">{chef.description}</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default About;
