import React from "react";
import { IProjects } from "@/types/projects";

interface ProjectProps {
  projects: IProjects;
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div>
      {projects.title}
      <div>
        <img
          src={projects.image}
          alt={projects.title}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Project;
