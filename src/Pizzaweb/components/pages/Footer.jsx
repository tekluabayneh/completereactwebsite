import React from "react";
import {
  GithubLogo,
  TelegramLogo,
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from "phosphor-react";
const Footer = () => {
  return (
    <div className="Footer bg-dark text-white text-center position-fixed bottom-0 w-100 p-1">
      <div className="Social_media">
        <p className="text-light">&copy;2024 Teklu Pizza</p>
      </div>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <GithubLogo size={25} />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramLogo size={25} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterLogo size={25} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={25} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
