import React from "react";
import { Instagram, Youtube, GitHub, Linkedin } from "react-feather";

import "./styles.sass";

const SocialBar = () => {
  const size = 20;

  return (
    <div className="social-bar">
      <a href="https://instagram.com/victorodrigues.dev">
        <Instagram className="icon" size={size} />
      </a>
      <a href="http://youtube.com/channel/UC6aFeI2AerS0Y0OHGKeStCg">
        <Youtube className="icon" size={size} />
      </a>
      <a href="https://linkedin.com/in/victorvieirarodrigues">
        <Linkedin className="icon" size={size} />
      </a>
      <a href="https://github.com/vctrodrigues">
        <GitHub className="icon" size={size} />
      </a>
    </div>
  );
};

export default SocialBar;
