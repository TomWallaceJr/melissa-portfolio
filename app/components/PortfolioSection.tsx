"use client";

import React, { useState, useEffect } from "react";
import { IProjects } from "@/types/projects";
import Project from "./Project";
import ProjectModal from "./ProjectModal.client";
import projects from "@/data/projects";

interface GroupedProjects {
  [key: string]: IProjects;
}

const PortfolioSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState<string | null>(null);

  const handleProjectClick = (group: string) => {
    setCurrentGroup(group);
    setModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Disable scrolling on the body when the modal is open
      document.body.style.overflow = modalOpen ? "hidden" : "auto";
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [modalOpen]);

  // Function to handle modal close
  const handleCloseModal = () => {
    setModalOpen(false);
    // Re-enable scrolling on the body
    document.body.style.overflow = "auto";
  };

  // Create an object to store the first project of each group
  const firstProjectsByGroup: GroupedProjects = {};

  // Iterate through the projects and populate firstProjectsByGroup
  projects.forEach((project) => {
    if (!firstProjectsByGroup[project.group]) {
      firstProjectsByGroup[project.group] = project;
    }
  });

  return (
    <div
      id='portfolio'
      className='container mx-auto px-4 py-20 shadow-bottom-border fade-in-up'>
      <h1 className='font-lato text-3xl lg:text-5xl font-bold text-center mb-5'>
        Portfolio
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-7xl'>
        {Object.values(firstProjectsByGroup).map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.group)}
            className='cursor-pointer'>
            <Project project={project} />
          </div>
        ))}
      </div>
      {modalOpen && currentGroup && (
        <ProjectModal
          isOpen={modalOpen}
          projects={projects.filter(
            (project) => project.group === currentGroup
          )}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PortfolioSection;
