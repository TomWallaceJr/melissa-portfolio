import React from "react";
import { IProjects } from "@/types/projects";
import Image from "next/image"; // Assuming you might still use this for optimization

interface ProjectProps {
  project: IProjects;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className='relative mb-5 h-80 w-full overflow-hidden group bg-white/50 backdrop-blur-md shadow-xl rounded-lg transition duration-300 ease-in-out hover:scale-105'>
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        layout='fill'
        objectFit='contain'
        className='transition-all duration-300 ease-in-out z-0 p-5'
      />

      {/* Overlay for darkening effect on hover */}
      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-10'></div>

      {/* Title and Paragraph appearing on hover, placed over the darkening overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-20 p-5'>
        <h1 className='font-poppins text-white text-2xl font-semibold text-center'>
          {project.title}
        </h1>
        <p className='font-poppins text-white text-center mt-2'>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default Project;
