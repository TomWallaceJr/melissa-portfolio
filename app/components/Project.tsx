import React from "react";
import { IProjects } from "@/types/projects";

interface ProjectProps {
  project: IProjects;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      {project.title}
      <div>
        <img src={project.image} alt={project.title} width={500} height={300} />
      </div>
    </div>
  );
};

export default Project;
