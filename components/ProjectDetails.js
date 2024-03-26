import React from "react";
import { useAppContext } from "../context/context";
import ProjectRow from "./ProjectRow";

const ProjectDetails = () => {
  const { projectHistory } = useAppContext();

  return (
    <div className="container" style={{marginTop: 30}}>
      <div className="container">
        <div className="row mb-3">
          <div className="col">Funding Goal</div>
          <div className="col">Deadline</div>
          <div className="col">Total Funded</div>
          <div className="col">Claimed</div>
        </div>
        {projectHistory.map((project, index) => (
          <ProjectRow key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
