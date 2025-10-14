// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailComponent from "../components/ProjectDetail";
import { projectsData } from "../data/projectsData";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];
  
  return <ProjectDetailComponent project={project} />;
}

export default ProjectDetail;