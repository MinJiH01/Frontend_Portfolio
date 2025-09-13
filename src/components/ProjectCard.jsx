import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-image">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} />
        ) : (
          <div className="no-image">
            <span>이미지 없음</span>
          </div>
        )}
        <div className="project-overlay">
          <span className="overlay-text">자세히 보기</span>
          <span className="overlay-icon">→</span>
        </div>
        
        {/* Status Badge */}
        <div className="project-status">
          {project.status}
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        {/* Project Header */}
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        {/* Project Info */}
        <div className="project-info">
          <div className="info-row">
            <span className="info-label">기간</span>
            <span className="info-value">{project.period}</span>
          </div>
          <div className="info-row">
            <span className="info-label">형태</span>
            <span className="info-value">{project.team}</span>
          </div>
        </div>

        {/* Project Description */}
        <p className="project-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-tech">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tech-more">+{project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;