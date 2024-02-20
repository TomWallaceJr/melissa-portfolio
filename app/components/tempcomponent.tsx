// import React from "react";
// import { IProjects } from "@/types/projects";
// import Project from "./Project";

// interface PortfolioSectionProps {
//   projects: IProjects[];
// }

// // Define a type for the accumulator in the reduce function
// interface ProjectsByGroup {
//   [key: string]: IProjects[];
// }

// const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
//   // Step 1: Aggregate projects by group with explicit typing for the accumulator
//   const projectsByGroup = projects.reduce((acc: ProjectsByGroup, project) => {
//     // If the group already exists, add the project to it; otherwise, create a new group
//     const { group } = project;
//     acc[group] = acc[group] ? [...acc[group], project] : [project];
//     return acc;
//   }, {});

//   // Step 2: Render projects based on group
//   return (
//     <div>
//       {Object.values(projectsByGroup).map((groupProjects, index) => {
//         // Render first project of eahc group
//         const representativeProject = groupProjects[0];
//         return <Project key={index} projects={representativeProject} />;
//       })}
//     </div>
//   );
// };

// export default PortfolioSection;
