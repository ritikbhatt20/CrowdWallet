const ProjectRow = ({ project }) => {
    const { fundingGoal, deadline, totalFunded, claimedFund } = project;
  
    return (
      <div>
        <div>Funding Goal: {fundingGoal} SOL</div>
        <div>Deadline: {deadline}</div>
        <div>Total Funded: {totalFunded} SOL</div>
        <div>Claimed: {claimedFund.toString()}</div>
      </div>
    );
  };
  
  export default ProjectRow;
  