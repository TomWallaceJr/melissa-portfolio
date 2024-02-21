import React from "react";

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id='footer' className='bottom-0 z-50 bg-white shadow-md'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center'>
          <span className='text-gray-800 font-semibold mb-2 md:mb-0 md:mr-4'>
            Connect With Me
          </span>

          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/melissa-wallace-37961427b/'
              target='_blank '
              className='text-gray-800 hover:text-gray-600 rounded px-3 py-2 transition duration-300'>
              <AiFillLinkedin
                style={{ fontSize: "3rem" }}
                className='hover:animate-custom-pulse'
              />
            </a>
            <a
              href='https://www.facebook.com/mwalldrawings'
              target='_blank '
              className='text-gray-800 hover:text-gray-600 rounded px-3 py-2 transition duration-300'>
              <AiFillFacebook
                style={{ fontSize: "3rem" }}
                className='hover:animate-custom-pulse'
              />
            </a>
            <a
              href='https://www.instagram.com/mwalldrawings/'
              target='_blank '
              className='text-gray-800 hover:text-gray-600 rounded px-3 py-2 transition duration-300'>
              <AiFillInstagram
                style={{ fontSize: "3rem" }}
                className='hover:animate-custom-pulse'
              />
            </a>
            <a
              href='mailto:mwallace222@gmail.com'
              target='_blank '
              className='text-gray-800 hover:text-gray-600 rounded px-3 py-2 transition duration-300'>
              <AiOutlineMail
                style={{ fontSize: "3rem" }}
                className='hover:animate-custom-pulse'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
