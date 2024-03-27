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

// import { useState } from "react";
// import { useAppContext } from "@/context/context";

// const ProjectForm = () => {
//   const { initializeProject } = useAppContext() || {}; // Provide an empty object as default if context is undefined
//   const [fundingGoal, setFundingGoal] = useState(0);
//   const [deadline, setDeadline] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const deadlineTimestamp = new Date(deadline).getTime() / 1000; // Convert deadline to Unix timestamp
//     let fundGoal = parseInt(fundingGoal);
//     console.log(typeof fundGoal);
//     console.log(typeof deadlineTimestamp);
//     if (initializeProject) {
//       try {
//         await initializeProject(fundGoal, deadlineTimestamp); // Perform the function and wait for its completion
//         console.log("Project initialized successfully!");
//         // Optionally, you can perform additional actions after the project is initialized
//       } catch (error) {
//         console.error("Error initializing project:", error);
//         // Handle errors that occur during project initialization
//       }
//     } else {
//       console.warn("initializeProject function is not available");
//       // Handle cases where the initializeProject function is not available
//     }
//     setFundingGoal(0);
//     setDeadline("");
//   };

//   return (
//     <div>
//       <h2>Create a New Project</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="fundingGoal">Funding Goal:</label>
//           <input
//             type="number"
//             id="fundingGoal"
//             value={fundingGoal}
//             onChange={(e) => setFundingGoal(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="deadline">Deadline:</label>
//           <input
//             type="date"
//             id="deadline"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Initialize Project</button>
//       </form>
//     </div>
//   );
// };

// export default ProjectForm;

