"use client";

import React, { useEffect } from "react";
import { IProjects } from "@/types/projects";

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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Handle Next and Previous Navigation
  const handleNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );

  // Close Modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent scrolling on the background when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className='modal modal-open' onClick={onClose}>
        <div
          className='modal-box relative'
          onClick={(e) => e.stopPropagation()}>
          <h3 className='font-bold text-lg'>{projects[currentIndex].title}</h3>
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className='py-4 max-w-full h-auto'
          />
          <p className='py-4'>{projects[currentIndex].description}</p>
          <div className='modal-action'>
            <button className='btn' onClick={handlePrev}>
              Previous
            </button>
            <button className='btn' onClick={handleNext}>
              Next
            </button>
            <button className='btn' onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className='modal-backdrop' aria-hidden='true'></div>
    </>
  );
};

export default ProjectModal;
