// "use client";

// import React, { useState } from "react";
// import { IProjects } from "@/types/projects";
// import Project from "./Project";
// // import PhotoshopProject from "./PhotoshopProject";
// import ProjectModal from "./ProjectModal.client";
// import projects from "@/data/projects";

// interface PortfolioSectionProps {
//   projects: IProjects[];
// }

// interface GroupedProjects {
//   [key: string]: IProjects[];
// }

// const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentGroup, setCurrentGroup] = useState<string | null>(null);

//   const handleProjectClick = (group: string) => {
//     setCurrentGroup(group);
//     setModalOpen(true);
//   };

//   // Use the GroupedProjects type for the accumulator in reduce
//   const projectsByGroup = projects.reduce<GroupedProjects>((acc, project) => {
//     const group = project.group;
//     if (acc[group]) {
//       acc[group].push(project);
//     } else {
//       acc[group] = [project];
//     }
//     return acc;
//   }, {});

//   return (
//     <div
//       className='container mx-auto p-4 py-20 shadow-bottom-border'
//       id='portfolio'>
//       <h1 className='font-lato mx-auto text-3xl lg:text-5xl font-bold text-center m-5'>
//         Portfolio
//       </h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
//         {Object.entries(projectsByGroup).map(([group, groupProjects]) => (
//           <div
//             key={group}
//             onClick={() => handleProjectClick(group)}
//             className='cursor-pointer'>
//             {groupProjects[0].photoshop ? (
//               <Project project={groupProjects[0]} />
//             ) : (
//               <Project project={groupProjects[0]} />
//             )}
//           </div>
//         ))}
//       </div>
//       {modalOpen && currentGroup && (
//         <ProjectModal
//           isOpen={modalOpen}
//           projects={projectsByGroup[currentGroup]}
//           onClose={() => setModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default PortfolioSection;
