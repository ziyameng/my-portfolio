//test comment
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/ziyathedev" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ziyameng" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
