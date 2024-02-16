import React from "react";

const Footer = () => {
  return (
    <footer
      data-theme='dark'
      className='footer bg-base-200 text-base-content p-10 flex flex-col items-center justify-center bottom-0 w-full max-h-24'>
      <div className='flex flex-col items-center'>
        <span className='footer-title'>Connect With Me</span>
        <div className='flex gap-4'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='link link-hover'>
            Twitter
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='link link-hover'>
            LinkedIn
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='link link-hover'>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
