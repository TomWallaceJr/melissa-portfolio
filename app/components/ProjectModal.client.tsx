import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IProjects } from "@/types/projects";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  projects: IProjects[];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  projects,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === "ArrowLeft") {
          handlePrev({} as React.MouseEvent);
        } else if (e.key === "ArrowRight") {
          handleNext({} as React.MouseEvent);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  useEffect(() => {
    // Ensure currentIndex is reset when projects change
    setCurrentIndex(0);
  }, [projects]);

  if (!isOpen) return null;

  return (
    <div
      id='project-modal'
      className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex'
      onClick={onClose}>
      <div className='relative p-4 sm:p-8 bg-white w-full sm:max-w-2xl m-auto flex-col flex rounded-t-lg sm:rounded-lg'>
        <div className='flex justify-between items-center mb-4'>
          <AiOutlineLeft
            className='text-3xl cursor-pointer hover:text-gray-600'
            onClick={handlePrev}
          />
          <div className='flex flex-col items-center'>
            <h2 className='font-lalo text-center text-3xl font-bold mb-2'>
              {projects[currentIndex].title}
            </h2>
            <p className='font-lalo text-gray-600 text-center mb-2'>
              {projects[currentIndex].description}
            </p>
          </div>
          <AiOutlineRight
            className='text-3xl cursor-pointer hover:text-gray-600'
            onClick={handleNext}
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            height={500}
            width={500}
            objectFit='contain'
          />
        </div>
      </div>
      <div className='modal-backdrop' aria-hidden='true'></div>
    </div>
  );
};

export default ProjectModal;
