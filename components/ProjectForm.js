import { useState } from "react";
import { useAppContext } from "@/context/context";

const ProjectForm = () => {
  const { initializeProject } = useAppContext();
  const [fundingGoal, setFundingGoal] = useState(0);
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deadlineTimestamp = new Date(deadline).getTime() / 1000; // Convert deadline to Unix timestamp
    let fundGoal = parseInt(fundingGoal)
    initializeProject(fundGoal, deadlineTimestamp);
    setFundingGoal(0);
    setDeadline("");
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fundingGoal" className="form-label">Funding Goal:</label>
          <input
            type="number"
            className="form-control"
            id="fundingGoal"
            value={fundingGoal}
            onChange={(e) => setFundingGoal(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline:</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Initialize Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
