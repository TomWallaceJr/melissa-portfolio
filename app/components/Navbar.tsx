import React from "react";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>MDesigns</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
