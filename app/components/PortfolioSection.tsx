"use client";

import React, { useState } from "react";
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
      className='container mx-auto p-4 py-20 shadow-bottom-border'
      id='portfolio'>
      <h1 className='font-lato mx-auto text-3xl lg:text-5xl font-bold text-center m-5'>
        Portfolio
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PortfolioSection;
