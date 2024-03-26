import { useState } from 'react';
import { useAppContext } from '../context';

const ProjectForm = () => {
  const { initializeProject } = useAppContext();
  const [fundingGoal, setFundingGoal] = useState(0);
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the initializeProject function from the context
    initializeProject(fundingGoal, new Date(deadline).getTime());
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Funding Goal:</label>
          <input type="number" value={fundingGoal} onChange={(e) => setFundingGoal(e.target.value)} />
        </div>
        <div>
          <label>Deadline:</label>
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </div>
        <button type="submit">Initialize Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
