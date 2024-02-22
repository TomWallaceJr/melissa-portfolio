import mdesignlogo from "../../public/images/mdesignlogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-8 py-4 md:py-0 w-11/12 mx-auto h-[60vh] md:h-[40vh] lg:h-[60vh] shadow-bottom-border mt-5 md:mt-0 fade-in'>
      <div className='flex-1 flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
        <Image
          src={mdesignlogo} // Correct path from the public folder
          alt='logo'
          width={500} // Adjusted size for all screens
          height={250}
          layout='responsive'
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className='flex-1 flex flex-col items-center md:items-start h-[25vh]'>
        <h1 className='font-lato mx-auto text-3xl md:text-4xl font-bold'>
          Hello, I&apos;m Melissa
        </h1>
        <p className='font-lato mx-auto mt-4 mb-4 text-center md:text-left md:max-w-md lg:max-w-lg p-1 lg:text-lg'>
          &quot;I am a creative graphic artist proficient in Adobe InDesign,
          Illustrator, and Photoshop, whose focus lies in print design,
          branding, and image editing, committed to continuous skill
          development.&quot;
        </p>
      </div>
    </section>
  );
};

export default Hero;
