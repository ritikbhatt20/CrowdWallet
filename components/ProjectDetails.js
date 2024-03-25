// components/ProjectDetails.js
const ProjectDetails = ({ project }) => {
    return (
      <div>
        <h2>Project Details</h2>
        <p>Funding Goal: {project.fundingGoal}</p>
        <p>Deadline: {project.deadline}</p>
        <p>Total Funded: {project.totalFunded}</p>
        <p>Claimed Fund: {project.claimedFund ? "Yes" : "No"}</p>
      </div>
    );
  };
  
  export default ProjectDetails;
  