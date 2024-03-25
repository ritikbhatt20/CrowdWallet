// components/ProjectForm.js
import { useState } from "react";

const ProjectForm = () => {
  const [fundingGoal, setFundingGoal] = useState(0);
  const [deadline, setDeadline] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to submit project details to smart contract
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="number"
        value={fundingGoal}
        onChange={(e) => setFundingGoal(e.target.value)}
        placeholder="Enter funding goal"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Enter deadline"
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
