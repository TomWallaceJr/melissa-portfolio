import React from "react";
import { IProjects } from "@/types/projects";
import Project from "./Project";

interface PortfolioSectionProps {
  projects: IProjects[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  console.log("portfolio section");
  console.log(projects);
  return <div>hhh</div>;
};

export default PortfolioSection;
