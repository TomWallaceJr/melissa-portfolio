import React, { useEffect, useState } from "react";
import { IProjects } from "@/types/projects";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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

  const handleNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-10 overflow-y-auto' onClick={onClose}>
      <div className='flex items-center justify-center min-h-screen'>
        <div
          className='modal-box w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl relative'
          style={{ height: "90vh" }} // Set a fixed height for the modal
          onClick={(e) => e.stopPropagation()}>
          {/* Arrows */}
          <AiOutlineLeft
            className='absolute left-10 top-1/2 -translate-y-1/2 text-3xl cursor-pointer hover:text-gray-600'
            onClick={handlePrev}
            style={{ fontSize: "2.5rem" }}
          />
          <AiOutlineRight
            className='absolute right-10 top-1/2 -translate-y-1/2 text-3xl cursor-pointer hover:text-gray-600'
            onClick={handleNext}
            style={{ fontSize: "2.5rem" }}
          />

          {/* Content area */}
          <div className='flex justify-center items-center h-full'>
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              height={500} // Fixed height
              width={500} // Fixed width
              objectFit='contain' // Ensures the image scales down if it's too big
            />
          </div>
        </div>
      </div>
      <div className='modal-backdrop' aria-hidden='true'></div>
    </div>
  );
};

export default ProjectModal;
