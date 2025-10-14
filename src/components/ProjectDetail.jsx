// src/components/ProjectDetail.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) {
    return (
      <div className="project-detail-error">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/projects" className="back-btn">프로젝트 목록으로</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Header */}
      <div className="project-detail-header">
        <div className="breadcrumb">
          <Link to="/projects">프로젝트</Link> › <span>{project.title}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        
        <div className="header-links">
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="header-link demo">
            🚀 라이브 데모
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="header-link github">
            📂 GitHub
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-navigation">
        <button onClick={() => setActiveTab("overview")} className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}>
          📋 프로젝트 개요
        </button>
        <button onClick={() => setActiveTab("retrospect")} className={`tab-btn ${activeTab === "retrospect" ? "active" : ""}`}>
          💡 프로젝트 회고
        </button>
      </div>

      {/* 개요 탭 */}
      {activeTab === "overview" && (
        <div className="project-content">
          <div className="detail-section">
            <h3>🎯 프로젝트 배경</h3>
            <div className="background-card motivation">
              <h4>💡 개발 동기</h4>
              <p>{project.background.motivation}</p>
            </div>
            <div className="background-card goals">
              <h4>🎯 주요 목표</h4>
              <ul className="goals-list">
                {project.background.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <h3>📋 프로젝트 정보</h3>
            <div className="project-info-grid">
              <div className="info-card"><h4>개발 기간</h4><p>{project.projectInfo.period}</p></div>
              <div className="info-card"><h4>팀 구성</h4><p>{project.projectInfo.team}</p></div>
              <div className="info-card"><h4>담당 역할</h4><p>{project.projectInfo.myRole}</p></div>
              <div className="info-card"><h4>상태</h4><p><span className="status-badge">{project.projectInfo.status}</span></p></div>
            </div>
          </div>

          <div className="detail-section">
            <h3>🛠️ 기술 스택</h3>
            <div className="tech-stack-detailed">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="tech-item-detailed">
                  <div className="tech-item-header">
                    <h4>{tech.name}</h4>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                  <p className="tech-description">{tech.description}</p>
                  <div className="tech-reason-box">
                    <strong>💭 선택 이유:</strong>
                    <p>{tech.reason}</p>
                  </div>
                  <p className="tech-highlight">✨ {tech.highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3>✨ 주요 기능</h3>
            <div className="features-detailed">
              {project.features.map((feature, idx) => (
                <div key={idx} className="feature-card-detailed">
                  <div className="feature-card-header">
                    <h4>{feature.title}</h4>
                    <span className="tech-tag">{feature.tech}</span>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-details-box">
                    <strong>🔧 구현:</strong>
                    <p>{feature.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3>🎯 기술적 성과</h3>
            <div className="highlights-section">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="highlight-card">
                  <h4>{h.title}</h4>
                  <p className="highlight-detail">{h.detail}</p>
                  <div className="highlight-impact">
                    <span className="impact-icon">📈</span>
                    <p>{h.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 회고 탭 */}
      {activeTab === "retrospect" && (
        <div className="project-content">
          <div className="detail-section">
            <h3>🎬 프로젝트 스크린샷</h3>
            <div className="screenshots-section">
              <div className="screenshots-grid">
                {project.media.screenshots.map((img, idx) => (
                  <div key={idx} className="screenshot-item">
                    <img src={img.src} alt={img.label} />
                    <div className="screenshot-overlay"><p>{img.label}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>🎯 도전과제</h3>
            <div className="challenges-section">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="challenge-item">
                  <div className="challenge-header"><h4>도전과제 {idx + 1}: {item.challenge}</h4></div>
                  <div className="challenge-content">
                    <div className="challenge-box context"><h5>📌 배경</h5><p>{item.context}</p></div>
                    <div className="challenge-box problem"><h5>🤔 문제</h5><p>{item.problem}</p></div>
                    <div className="challenge-box solution">
                      <h5>💡 해결</h5>
                      <p>{item.solution}</p>
                      {item.code && <div className="code-block"><pre><code>{item.code}</code></pre></div>}
                    </div>
                    <div className="challenge-box result"><h5>📈 결과</h5><p>{item.result}</p></div>
                    <div className="challenge-box learned"><h5>📚 배운 점</h5><p>{item.learned}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3>💭 회고</h3>
            <div className="reflection-section">
              <div className="reflection-category">
                <h4>📈 기술적 성장</h4>
                <div className="reflection-items">
                  {project.reflections.growth.map((item, idx) => (
                    <div key={idx} className="reflection-item">
                      <h5>{item.title}</h5>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reflection-category">
                <h4>😔 아쉬운 점</h4>
                <div className="reflection-items">
                  {project.reflections.regrets.map((item, idx) => (
                    <div key={idx} className="reflection-item">
                      <h5>{item.title}</h5>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reflection-category">
                <h4>🚀 개선 방향</h4>
                <div className="reflection-items">
                  {project.reflections.improvements.map((item, idx) => (
                    <div key={idx} className="reflection-item">
                      <h5>{item.title}</h5>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="project-actions">
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="action-btn primary">
          🔗 데모 보기
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="action-btn secondary">
          📂 GitHub
        </a>
        <Link to="/projects" className="action-btn tertiary">
          ← 목록으로
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;