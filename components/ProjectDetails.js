// import { useState, useEffect } from 'react';
// import { useAppContext } from '../context';

// const ProjectDetails = () => {
//   const { projectData } = useAppContext();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     // Update project data when context changes
//     setProject(projectData);
//   }, [projectData]);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Project Details</h2>
//       <p>Funding Goal: {project.fundingGoal}</p>
//       <p>Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
//       <p>Total Funds Raised: {project.totalFunded}</p>
//     </div>
//   );
// };

// export default ProjectDetails;
