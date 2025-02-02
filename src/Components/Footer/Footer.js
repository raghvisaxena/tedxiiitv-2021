import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <h3 className="title">TEDx IIITVadodara</h3>
        <hr className="line" />
        <div className="link-container">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/speakers">
            Speakers
          </Link>
          <Link className="link" to="/talks">
            Talks
          </Link>
          <Link className="link" to="/team">
            Team
          </Link>
        </div>
      </div>
      <div className="footer-container">
        <div>
          <h3 className="title">Social Media</h3>
          <hr className="line" />
          <div className="social fa fa-lg">
            <a
              className="social-link"
              href="https://twitter.com/tedxiiitv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter icon"></i>
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/tedxiiitv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="social-link"
              href="https://www.youtube.com/channel/UC4mwsjxwalruq9tga_3a92g"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-youtube-play"></i>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/company/tedxiiitv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="title">Join Our Team</h3>
          <hr className="line" />
          <p className="text white">Would you like to attend TEDx ?</p>
          <div className="flex-container">
            <input className="input-box" placeholder="Email" />
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <h3 className="title">Speakers</h3>
        <hr className="line" />
        <div className="link-container">
          <Link className="link" to="/speakers">
            Gauri Bakshi
          </Link>
          <Link className="link" to="/speakers">
            Pratik Thakker
          </Link>
          <Link className="link" to="/speakers">
            Barat Ali Batoor
          </Link>
          <Link className="link red" to="/speakers">
            ...More
          </Link>
        </div>
      </div>
      <div className="footer-container">
        <h3 className="title">Get updates</h3>
        <hr className="line" />
        <p className="text white">Find us at tedxiiitv@gmail.com</p>
        <div className="flex-container">
          <div>
            <p>Anavya Upadhyay</p>
            <p>+91 90091 11901</p>
          </div>
          <div>
            <p>Raghvi Saxena</p>
            <p>+91 77489 58943</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
