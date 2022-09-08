import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Ishraque_" target="_blank" rel=" noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/esrak.ahamed.121/"
        target="_blank"
        rel=" noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/ishraque-dev"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  </div>
);
export default SocialMedia;
