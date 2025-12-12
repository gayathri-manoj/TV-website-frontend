import React from "react";
import "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/App.css";

import logo from "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/logo.png";
import mail from "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/mail.png";
import phone from "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/phone.png";
import pin from "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/pin.png";
import user from "\C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/user.png";
import phoneField from "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/phoneField.png";
import emailField from "C:/Users/aparn/TV\ frontend/tech-vayuna/tech-vayuna/src/assets/emailField.png";


export default function App() {
  return (
    <div className="page-bg">
      <div className="site-wrap">

        {/* header */}
        <header className="site-header">
          <img src={logo} alt="Tech Vayuna" className="logo" />

          <nav className="nav-links">
            <ul>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#events">EVENTS</a></li>
              <li><a href="#team">OUR TEAM</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <li>
               <a
                 href="https://docs.google.com/forms/d/e/1FAIpQLSdrAuH1OHE1omJUNDkVkL2zcWy0NWCwxQ24JxEyfQi-PkSOJw/viewform?usp=header"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                 JOIN US!
              </a>
             </li>
            </ul>
          </nav>
        </header>

        {/* contact sesh */}
        <main className="contact-area">

          {/* left card */}
          <aside className="left-card">
            <h2 className="card-title">Get In Touch</h2>

            <div className="left-icons">
              <img src={mail} alt="mail" className="icon-50" />
              <img src={phone} alt="phone" className="icon-50" />
              <img src={pin} alt="pin" className="icon-50" />
            </div>
          </aside>

          {/* form area */}
          <section className="form-wrap">
            <h2 className="form-title">
              Tell us what you are up to..
            </h2>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

              <label className="field">
                <img src={user} alt="user" className="field-icon" />
                <input placeholder="Your name" />
              </label>

              <label className="field">
                <img src={phoneField} alt="phone" className="field-icon" />
                <input placeholder="Your phone number" />
              </label>

              <label className="field">
                <img src={emailField} alt="email" className="field-icon" />
                <input placeholder="Your email address" />
              </label>

              <textarea className="message" placeholder="Your Message.." />

              <button className="submit">Submit</button>
            </form>
          </section>
        </main>

        {/* footer */}
        <footer className="site-footer">
          <div>
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Events</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4>Address</h4>
            <p>
              SRM Institute Of Science And Technology<br />
              Bharathi Salai, Ramapuram, Chennai,<br />
              Tamil Nadu 600089
            </p>
          </div>

          <div>
            <h4>Join Us!</h4>
            <div className="join">
              <input placeholder="Email" />
              <button>Submit</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
