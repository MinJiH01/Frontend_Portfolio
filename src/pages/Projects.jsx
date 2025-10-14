import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: "Community",
    title: "Community Site",
    subtitle: "개발자 커뮤니티 사이트",
    description: "React + Firebase을 사용한 개발자 커뮤니티 플랫폼",
    thumbnail: "./My_Blog.png",
    period: "2025.06",
    team: "개인 프로젝트",
    techStack: ["React", "JavaScript", "Firebase", "Markdown", "CSS3"],
    category: "JavaScript",
    status: "완료"
  },
  {
    id: "Shopping Mall",
    title: "Shopping Mall",
    subtitle: "농산물 직거래 쇼핑몰",
    description: "Next.js, TypeScript, TailwindCSS, Supabase를 활용한 농산물 직거래 쇼핑몰 사이트",
    thumbnail: "./Ms_Farm.png",
    period: "2025.07 - 2025.08",
    team: "개인 프로젝트",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React",  "HTML5"],
    category: "TypeScript",
    status: "완료"
  },
  {
    id: "Todo App",
    title: "Weather Todo App",
    subtitle: "개인 일정 관리 어플",
    description: "React Native를 사용한 개인 일정 관리 및 날씨 어플",
    thumbnail: "./Todo_App.png",
    period: "2025.09",
    team: "개인 프로젝트",
    techStack: ["React Native", "TypeScript", "Expo Go", "CSS3"],
    category: "React Native", 
    status: "완료"
  },
];

// 프로젝트 필터 카테고리
const categories = ["All", "React Native", "TypeScript", "JavaScript"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // 필터링된 프로젝트
  const filteredProjects = projects.filter(project => 
    activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <h1 className="projects-title">프론트엔드 프로젝트</h1>
        <p className="projects-subtitle">제가 개발한 프로젝트들을 소개합니다</p>
        
        {/* Project Stats */}
        <div className="project-stats">
          <div className="stat-item">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">총 프로젝트</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{projects.filter(p => p.status === "완료").length}</span>
            <span className="stat-label">완료 프로젝트</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Set(projects.flatMap(p => p.techStack)).size}</span>
            <span className="stat-label">사용 기술</span>
          </div>
        </div>
      </div>

      {/* Project Filter */}
      <div className="project-filters">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(proj => (
          <Link key={proj.id} to={`/projects/${proj.id}`} className="project-link">
            <ProjectCard project={proj} />
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="projects-cta">
        <h3>더 많은 프로젝트가 궁금하신가요?</h3>
        <p>GitHub에서 더 많은 코드를 확인하실 수 있습니다.</p>
        <a 
          href="https://github.com/MinJiH01" 
          target="_blank" 
          rel="noreferrer"
          className="github-btn"
        >
          🔗 GitHub 방문하기
        </a>
      </div>
    </div>
  );
}

export default Projects;