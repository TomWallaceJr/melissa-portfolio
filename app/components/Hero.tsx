import mdesignlogo from "../../images/mdesignlogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-8 p-4 w-11/12 md:w-3/4 lg:w-7/10 mx-auto'>
      <div className='flex-1 flex justify-center'>
        <Image
          src={mdesignlogo}
          alt={"logo"}
          width={250} // Increased size for larger screens
          height={250} // Maintain aspect ratio
          className='rounded-lg'
        />
      </div>
      <div className='flex-1 flex flex-col items-center md:items-start'>
        <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left'>
          Hi, I'm Melissa
        </h1>
        <p className='mt-4 text-center md:text-left md:max-w-md lg:max-w-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default Hero;
