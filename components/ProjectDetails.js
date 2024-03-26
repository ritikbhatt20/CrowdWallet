import { useAppContext } from "../context/context";
import ProjectRow from "./ProjectRow";

const ProjectDetails = () => {
  const { projectHistory } = useAppContext();

  return (
    <div>
      <div>
        <div>Funding Goal</div>
        <div>Deadline</div>
        <div>Total Funded</div>
        <div>Claimed</div>
      </div>
      <div>
        {projectHistory.map((project, index) => (
          <ProjectRow key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
