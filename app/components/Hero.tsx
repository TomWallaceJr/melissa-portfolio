import mdesignlogo from "../../public/images/mdesignlogo.png";
import Image from "next/image";
import styles from "../../styles";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-8 p-4 w-11/12 mx-auto h-[50vh]'>
      <div className='flex-1 flex justify-center w-full'>
        <Image
          src='/images/mdesignlogo.png' // Correct path from the public folder
          alt='logo'
          width={500} // Adjusted size for all screens
          height={250}
          className='rounded-lg'
        />
      </div>
      {/* Line visible by default, hidden on md and larger screens */}
      <div className='w-4/5 mx-auto bg-gray-200 h-0.5 md:hidden'></div>
      <div className='flex-1 flex flex-col items-center md:items-start h-[25vh]'>
        <h1 className='font-poppins mx-auto text-3xl md:text-4xl font-bold text-center md:text-left'>
          Hello, I'm Melissa
        </h1>
        <p className='font-poppins mx-auto mt-4 text-center md:text-left md:max-w-md lg:max-w-lg p-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default Hero;
