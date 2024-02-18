import React from "react";
import { IProjects } from "@/types/projects";
import Project from "./Project";
import PhotoshopProject from "./PhotoshopProject";

interface PortfolioSectionProps {
  projects: IProjects[];
}

interface GroupedProjects {
  [key: string]: IProjects[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  // Use the GroupedProjects type for the accumulator in reduce
  const projectsByGroup = projects.reduce<GroupedProjects>((acc, project) => {
    const group = project.group;
    if (acc[group]) {
      acc[group].push(project);
    } else {
      acc[group] = [project];
    }
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(projectsByGroup).map(([group, groupProjects], index) => {
        const representativeProject = groupProjects[0];
        return representativeProject.photoshop ? (
          <PhotoshopProject key={group} project={representativeProject} /> // Adjusted for 'project' prop
        ) : (
          <Project key={group} project={representativeProject} /> // Adjusted for 'project' prop
        );
      })}
    </div>
  );
};

export default PortfolioSection;
