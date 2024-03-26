import React from 'react';

const ProjectRow = ({ project }) => {
  const { fundingGoal, deadline, totalFunded, claimedFund } = project;

  return (
    <div className="row mb-3">
      <div className="col">{project.fundingGoal} SOL</div>
      <div className="col">{project.deadline}</div>
      <div className="col">{project.totalFunded} SOL</div>
      <div className="col">{project.claimedFund.toString()}</div>
    </div>
  );
};

export default ProjectRow;
