import { useState } from "react";
import { useAppContext } from "@/context/context";

const ProjectForm = () => {
  const { initializeProject } = useAppContext();
  const [fundingGoal, setFundingGoal] = useState(0);
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deadlineTimestamp = (new Date(deadline).getTime())/1000; // Convert deadline to Unix timestamp
    let fundGoal = parseInt(fundingGoal)
    console.log(typeof fundGoal)
    console.log(typeof deadlineTimestamp)
    initializeProject(fundGoal, deadlineTimestamp);
    setFundingGoal(0);
    setDeadline("");
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fundingGoal">Funding Goal:</label>
          <input
            type="number"
            id="fundingGoal"
            value={fundingGoal}
            onChange={(e) => setFundingGoal(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <button type="submit">Initialize Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
