import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { SiBehance } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <SiBehance />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
