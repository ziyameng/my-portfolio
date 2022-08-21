import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ziya | Full-stack Developer
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ziyathedev" target="_blank">
          <BsLinkedin />
        </a>

        <a href="https://github.com/ziyameng" target="_blank">
          <FaGithub />
        </a>

        <a href="facebook.com/ziya.meng.98" target="_blank">
          <FaFacebookF />
        </a>

        <a href="https://www.instagram.com/ziya.meng/" target="_blank">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Ziya Meng. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
