import Image from "next/image";

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white shadow-md mb-5 lg:mb-0'>
      <nav className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
        <a
          href='/'
          className='flex items-center hover:text-gray-600 transition duration-300'>
          <Image
            src='/images/mdesignlogo.png'
            alt='logo'
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </a>

        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0 space-x-4 md:text-lg'>
            <li>
              <a
                href='#portfolio'
                className='text-gray-800 hover:text-gray-600 rounded px-3 py-2 transition duration-300'>
                Portfolio
              </a>
            </li>
            <li>
              <a
                href='#footer'
                className='text-gray-800 hover:text-gray-600 rounded px-3 py-2 transition duration-300'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
