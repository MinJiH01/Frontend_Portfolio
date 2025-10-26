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

  const {
    title,
    subtitle,
    description,
    background = {},
    projectInfo = {},
    techStack = [],
    features = [],
    highlights = [],
    media = {},
    challenges = [],
    reflections = {},
    impactSummary = {},
    demoUrl,
    githubUrl
  } = project;

  const { motivation = '', goals = [], targetUsers = '' } = background;
  const { screenshots = [] } = media;
  const { growth = [], regrets = [], improvements = [] } = reflections;
  const { problem = '', solution = '', impact = '', techAchievement = '' } = impactSummary;

  return (
    <div className="project-detail">
      {/* Header */}
      <div className="project-detail-header">
        <div className="breadcrumb">
          <Link to="/projects">프로젝트</Link> › <span>{title}</span>
        </div>
        <h1>{title}</h1>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-description">{description}</p>
        
        <div className="header-links">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="header-link demo">
              🚀 라이브 데모
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="header-link github">
              📂 GitHub
            </a>
          )}
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
          {/* 임팩트 요약 */}
          {(problem || solution || impact || techAchievement) && (
            <div className="detail-section">
              <h3>🎯 프로젝트 임팩트</h3>
              <div className="impact-summary-grid">
                {problem && (
                  <div className="impact-card problem-card">
                    <h4>🤔 문제점</h4>
                    <p>{problem}</p>
                  </div>
                )}
                {solution && (
                  <div className="impact-card solution-card">
                    <h4>💡 해결책</h4>
                    <p>{solution}</p>
                  </div>
                )}
                {impact && (
                  <div className="impact-card impact-card-result">
                    <h4>📈 성과</h4>
                    <p>{impact}</p>
                  </div>
                )}
                {techAchievement && (
                  <div className="impact-card tech-card">
                    <h4>🚀 기술적 성과</h4>
                    <p>{techAchievement}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 프로젝트 배경 */}
          {(motivation || goals.length > 0 || targetUsers) && (
            <div className="detail-section">
              <h3>🎯 프로젝트 배경</h3>
              {motivation && (
                <div className="background-card motivation">
                  <h4>💡 개발 동기</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{motivation}</p>
                </div>
              )}
              {goals.length > 0 && (
                <div className="background-card goals">
                  <h4>🎯 주요 목표</h4>
                  <ul className="goals-list">
                    {goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              )}
              {targetUsers && (
                <div className="background-card target-users">
                  <h4>👥 타겟 사용자</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{targetUsers}</p>
                </div>
              )}
            </div>
          )}

          {/* 프로젝트 정보 */}
          {Object.keys(projectInfo).length > 0 && (
            <div className="detail-section">
              <h3>📋 프로젝트 정보</h3>
              <div className="project-info-grid">
                {projectInfo.period && (
                  <div className="info-card"><h4>개발 기간</h4><p>{projectInfo.period}</p></div>
                )}
                {projectInfo.team && (
                  <div className="info-card"><h4>팀 구성</h4><p>{projectInfo.team}</p></div>
                )}
                {projectInfo.myRole && (
                  <div className="info-card"><h4>담당 역할</h4><p>{projectInfo.myRole}</p></div>
                )}
                {projectInfo.status && (
                  <div className="info-card"><h4>상태</h4><p><span className="status-badge">{projectInfo.status}</span></p></div>
                )}
                {projectInfo.dailyCommitment && (
                  <div className="info-card"><h4>일일 투입</h4><p>{projectInfo.dailyCommitment}</p></div>
                )}
                {projectInfo.totalEffort && (
                  <div className="info-card"><h4>총 투입 시간</h4><p>{projectInfo.totalEffort}</p></div>
                )}
              </div>
            </div>
          )}

          {/* 🔥 기술 스택 - 모든 필드 지원 */}
          {techStack.length > 0 && (
            <div className="detail-section">
              <h3>🛠️ 기술 스택</h3>
              <div className="tech-stack-cards">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="tech-card">
                    <div className="tech-card-header">
                      <div className="tech-title-section">
                        <h4>{tech.name}</h4>
                        <span className="tech-category-badge">{tech.category}</span>
                      </div>
                      <p className="tech-description">{tech.description}</p>
                    </div>
                    
                    <div className="tech-card-body">
                      {/* 선택 이유 */}
                      {tech.whyChose && (
                        <div className="tech-content-box why-chose">
                          <div className="content-header">
                            <span className="content-icon">💭</span>
                            <h5>왜 이 기술을 선택했나요?</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.whyChose}</p>
                        </div>
                      )}
                      
                      {/* 사용 방법 */}
                      {tech.howUsed && (
                        <div className="tech-content-box how-used">
                          <div className="content-header">
                            <span className="content-icon">🔧</span>
                            <h5>어떻게 사용했나요?</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.howUsed}</p>
                        </div>
                      )}

                      {/* 마이그레이션 스토리 */}
                      {tech.migrationStory && (
                        <div className="tech-content-box migration">
                          <div className="content-header">
                            <span className="content-icon">🚀</span>
                            <h5>마이그레이션 과정</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.migrationStory}</p>
                        </div>
                      )}

                      {/* 실제 영향 */}
                      {tech.actualImpact && (
                        <div className="tech-content-box impact">
                          <div className="content-header">
                            <span className="content-icon">📊</span>
                            <h5>실제 영향</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.actualImpact}</p>
                        </div>
                      )}

                      {/* 데이터 모델링 프로세스 */}
                      {tech.dataModelingProcess && (
                        <div className="tech-content-box modeling">
                          <div className="content-header">
                            <span className="content-icon">🗂️</span>
                            <h5>데이터 모델링</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.dataModelingProcess}</p>
                        </div>
                      )}

                      {/* 실시간 기능 */}
                      {tech.realTimeFeature && (
                        <div className="tech-content-box realtime">
                          <div className="content-header">
                            <span className="content-icon">⚡</span>
                            <h5>실시간 기능</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.realTimeFeature}</p>
                        </div>
                      )}

                      {/* 구현 */}
                      {tech.implementation && (
                        <div className="tech-content-box implementation">
                          <div className="content-header">
                            <span className="content-icon">⚙️</span>
                            <h5>구현 방법</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.implementation}</p>
                        </div>
                      )}

                      {/* 보안 규칙 */}
                      {tech.securityRules && (
                        <div className="tech-content-box security">
                          <div className="content-header">
                            <span className="content-icon">🔒</span>
                            <h5>보안 규칙</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.securityRules}</p>
                        </div>
                      )}

                      {/* 커스터마이제이션 */}
                      {tech.customization && (
                        <div className="tech-content-box customization">
                          <div className="content-header">
                            <span className="content-icon">🎨</span>
                            <h5>커스터마이징</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.customization}</p>
                        </div>
                      )}

                      {/* 성능 테스트 */}
                      {tech.performanceTest && (
                        <div className="tech-content-box performance">
                          <div className="content-header">
                            <span className="content-icon">⚡</span>
                            <h5>성능 테스트</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.performanceTest}</p>
                        </div>
                      )}

                      {/* 타입 경험 */}
                      {tech.typeExperience && (
                        <div className="tech-content-box type-exp">
                          <div className="content-header">
                            <span className="content-icon">📝</span>
                            <h5>TypeScript 경험</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.typeExperience}</p>
                        </div>
                      )}

                      {/* 타입 정의 */}
                      {tech.typeDefinitions && (
                        <div className="tech-content-box type-def">
                          <div className="content-header">
                            <span className="content-icon">📐</span>
                            <h5>타입 정의</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.typeDefinitions}</p>
                        </div>
                      )}

                      {/* Zustand 경험 */}
                      {tech.zustandExperience && (
                        <div className="tech-content-box zustand">
                          <div className="content-header">
                            <span className="content-icon">🐻</span>
                            <h5>Zustand 경험</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.zustandExperience}</p>
                        </div>
                      )}

                      {/* Prisma 발견 */}
                      {tech.prismaDiscovery && (
                        <div className="tech-content-box prisma">
                          <div className="content-header">
                            <span className="content-icon">🔮</span>
                            <h5>Prisma 경험</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.prismaDiscovery}</p>
                        </div>
                      )}

                      {/* JWT 구현 */}
                      {tech.jwtImplementation && (
                        <div className="tech-content-box jwt">
                          <div className="content-header">
                            <span className="content-icon">🔐</span>
                            <h5>JWT 인증</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.jwtImplementation}</p>
                        </div>
                      )}

                      {/* 보안 조치 */}
                      {tech.securityMeasures && (
                        <div className="tech-content-box sec-measures">
                          <div className="content-header">
                            <span className="content-icon">🛡️</span>
                            <h5>보안 조치</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.securityMeasures}</p>
                        </div>
                      )}

                      {/* 보안 교훈 */}
                      {tech.securityLessons && (
                        <div className="tech-content-box sec-lessons">
                          <div className="content-header">
                            <span className="content-icon">📚</span>
                            <h5>보안 교훈</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.securityLessons}</p>
                        </div>
                      )}

                      {/* Turbopack 경험 */}
                      {tech.turbopackExperience && (
                        <div className="tech-content-box turbopack">
                          <div className="content-header">
                            <span className="content-icon">⚡</span>
                            <h5>Turbopack 경험</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.turbopackExperience}</p>
                        </div>
                      )}

                      {/* 최적화 과정 */}
                      {tech.optimizationProcess && (
                        <div className="tech-content-box optimization">
                          <div className="content-header">
                            <span className="content-icon">🚀</span>
                            <h5>최적화 과정</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.optimizationProcess}</p>
                        </div>
                      )}

                      {/* 접근성 */}
                      {tech.accessibility && (
                        <div className="tech-content-box accessibility">
                          <div className="content-header">
                            <span className="content-icon">♿</span>
                            <h5>접근성</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.accessibility}</p>
                        </div>
                      )}

                      {/* 반응형 디자인 */}
                      {tech.responsiveDesign && (
                        <div className="tech-content-box responsive">
                          <div className="content-header">
                            <span className="content-icon">📱</span>
                            <h5>반응형 디자인</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.responsiveDesign}</p>
                        </div>
                      )}

                      {/* Expo 발견 */}
                      {tech.expoDiscovery && (
                        <div className="tech-content-box expo">
                          <div className="content-header">
                            <span className="content-icon">📱</span>
                            <h5>Expo 경험</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.expoDiscovery}</p>
                        </div>
                      )}

                      {/* 웹 vs 모바일 */}
                      {tech.webVsMobile && (
                        <div className="tech-content-box web-mobile">
                          <div className="content-header">
                            <span className="content-icon">🖥️</span>
                            <h5>웹 vs 모바일</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.webVsMobile}</p>
                        </div>
                      )}

                      {/* AsyncStorage 통합 */}
                      {tech.asyncStorageIntegration && (
                        <div className="tech-content-box async-storage">
                          <div className="content-header">
                            <span className="content-icon">💾</span>
                            <h5>데이터 저장</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.asyncStorageIntegration}</p>
                        </div>
                      )}

                      {/* 시스템 통합 */}
                      {tech.systemIntegration && (
                        <div className="tech-content-box system">
                          <div className="content-header">
                            <span className="content-icon">🔗</span>
                            <h5>시스템 통합</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.systemIntegration}</p>
                        </div>
                      )}

                      {/* API 통합 */}
                      {tech.apiIntegration && (
                        <div className="tech-content-box api">
                          <div className="content-header">
                            <span className="content-icon">🌐</span>
                            <h5>API 통합</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.apiIntegration}</p>
                        </div>
                      )}

                      {/* 에러 처리 */}
                      {tech.errorHandling && (
                        <div className="tech-content-box error">
                          <div className="content-header">
                            <span className="content-icon">⚠️</span>
                            <h5>에러 처리</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.errorHandling}</p>
                        </div>
                      )}

                      {/* 캐싱 */}
                      {tech.caching && (
                        <div className="tech-content-box caching">
                          <div className="content-header">
                            <span className="content-icon">🗄️</span>
                            <h5>캐싱 전략</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.caching}</p>
                        </div>
                      )}

                      {/* 한국어 번역 */}
                      {tech.koreanTranslation && (
                        <div className="tech-content-box translation">
                          <div className="content-header">
                            <span className="content-icon">🇰🇷</span>
                            <h5>한국어 번역</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.koreanTranslation}</p>
                        </div>
                      )}

                      {/* UX 개선 */}
                      {tech.uxImprovement && (
                        <div className="tech-content-box ux">
                          <div className="content-header">
                            <span className="content-icon">✨</span>
                            <h5>UX 개선</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.uxImprovement}</p>
                        </div>
                      )}

                      {/* Hooks 이해 */}
                      {tech.understandingHooks && (
                        <div className="tech-content-box hooks">
                          <div className="content-header">
                            <span className="content-icon">🪝</span>
                            <h5>Hooks 이해</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.understandingHooks}</p>
                        </div>
                      )}

                      {/* 실시간 동기화 문제 */}
                      {tech.realTimeSyncProblem && (
                        <div className="tech-content-box sync-problem">
                          <div className="content-header">
                            <span className="content-icon">🔄</span>
                            <h5>실시간 동기화 문제</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.realTimeSyncProblem}</p>
                        </div>
                      )}

                      {/* 실제 예시 */}
                      {tech.realExample && (
                        <div className="tech-content-box example">
                          <div className="content-header">
                            <span className="content-icon">💼</span>
                            <h5>실제 예시</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.realExample}</p>
                        </div>
                      )}

                      {/* 딜레마 */}
                      {tech.dilemma && (
                        <div className="tech-content-box dilemma">
                          <div className="content-header">
                            <span className="content-icon">🤔</span>
                            <h5>고민했던 점</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.dilemma}</p>
                        </div>
                      )}

                      {/* 더블 체크 */}
                      {tech.doubleCheck && (
                        <div className="tech-content-box double-check">
                          <div className="content-header">
                            <span className="content-icon">✅</span>
                            <h5>재확인 사항</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.doubleCheck}</p>
                        </div>
                      )}

                      {/* 디버깅 */}
                      {tech.debugging && (
                        <div className="tech-content-box debugging">
                          <div className="content-header">
                            <span className="content-icon">🐛</span>
                            <h5>디버깅 과정</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.debugging}</p>
                        </div>
                      )}

                      {/* 퍼시스턴스 */}
                      {tech.persistence && (
                        <div className="tech-content-box persistence">
                          <div className="content-header">
                            <span className="content-icon">💾</span>
                            <h5>데이터 영속성</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.persistence}</p>
                        </div>
                      )}

                      {/* 성능 */}
                      {tech.performance && (
                        <div className="tech-content-box perf">
                          <div className="content-header">
                            <span className="content-icon">⚡</span>
                            <h5>성능</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.performance}</p>
                        </div>
                      )}

                      {/* 최적화 */}
                      {tech.optimization && (
                        <div className="tech-content-box opt">
                          <div className="content-header">
                            <span className="content-icon">🚀</span>
                            <h5>최적화</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.optimization}</p>
                        </div>
                      )}
                      
                      {/* 도전 과제 (challenges / challengesFaced) */}
                      {(tech.challengesFaced || tech.challenges) && (
                        <div className="tech-content-box challenges">
                          <div className="content-header">
                            <span className="content-icon">😓</span>
                            <h5>어떤 어려움이 있었나요?</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{tech.challengesFaced || tech.challenges}</p>
                        </div>
                      )}
                      
                      {/* 핵심 배운 점 */}
                      {tech.keyLearning && (
                        <div className="tech-key-learning">
                          <span className="learning-icon">💡</span>
                          <p>"{tech.keyLearning}"</p>
                        </div>
                      )}

                      {/* 기존 필드 지원 (하위 호환성) */}
                      {tech.reason && !tech.whyChose && (
                        <div className="tech-content-box">
                          <div className="content-header">
                            <span className="content-icon">💭</span>
                            <h5>선택 이유</h5>
                          </div>
                          <p>{tech.reason}</p>
                        </div>
                      )}
                      {tech.highlight && (
                        <div className="tech-highlight-box">
                          ✨ {tech.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🔥 주요 기능 - 모든 필드 지원 */}
          {features.length > 0 && (
            <div className="detail-section">
              <h3>✨ 주요 기능</h3>
              <div className="features-cards">
                {features.map((feature, idx) => (
                  <div key={idx} className="feature-card">
                    <div className="feature-card-header">
                      <div className="feature-title-section">
                        <span className="feature-icon">🎯</span>
                        <h4>{feature.title}</h4>
                      </div>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                    
                    <div className="feature-card-body">
                      {/* 구현 스토리 */}
                      {feature.implementationStory && (
                        <div className="feature-content-box implementation">
                          <div className="content-header">
                            <span className="content-icon">📝</span>
                            <h5>구현 과정</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.implementationStory}</p>
                        </div>
                      )}

                      {/* 도전 스토리 */}
                      {feature.challengeStory && (
                        <div className="feature-content-box challenge-story">
                          <div className="content-header">
                            <span className="content-icon">🚧</span>
                            <h5>도전 과제</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.challengeStory}</p>
                        </div>
                      )}

                      {/* 구현 방법 */}
                      {feature.implementation && (
                        <div className="feature-content-box impl">
                          <div className="content-header">
                            <span className="content-icon">⚙️</span>
                            <h5>구현 방법</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.implementation}</p>
                        </div>
                      )}

                      {/* 성능 고려사항 */}
                      {feature.performanceConsideration && (
                        <div className="feature-content-box performance">
                          <div className="content-header">
                            <span className="content-icon">⚡</span>
                            <h5>성능 최적화</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.performanceConsideration}</p>
                        </div>
                      )}

                      {/* 사용자 경험 */}
                      {feature.userExperience && (
                        <div className="feature-content-box ux">
                          <div className="content-header">
                            <span className="content-icon">👥</span>
                            <h5>사용자 경험 개선</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.userExperience}</p>
                        </div>
                      )}

                      {/* 최적화 */}
                      {feature.optimization && (
                        <div className="feature-content-box opt">
                          <div className="content-header">
                            <span className="content-icon">🚀</span>
                            <h5>최적화</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.optimization}</p>
                        </div>
                      )}

                      {/* 실제 영향 */}
                      {feature.actualImpact && (
                        <div className="feature-content-box actual-impact">
                          <div className="content-header">
                            <span className="content-icon">📈</span>
                            <h5>실제 영향</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.actualImpact}</p>
                        </div>
                      )}

                      {/* 스와이프 삭제 */}
                      {feature.swipeToDelete && (
                        <div className="feature-content-box swipe">
                          <div className="content-header">
                            <span className="content-icon">👆</span>
                            <h5>스와이프 기능</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.swipeToDelete}</p>
                        </div>
                      )}

                      {/* 다크모드 토글 */}
                      {feature.darkModeToggle && (
                        <div className="feature-content-box dark-mode">
                          <div className="content-header">
                            <span className="content-icon">🌙</span>
                            <h5>다크모드</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.darkModeToggle}</p>
                        </div>
                      )}

                      {/* 코드 하이라이트 테마 */}
                      {feature.codeHighlightTheme && (
                        <div className="feature-content-box code-theme">
                          <div className="content-header">
                            <span className="content-icon">🎨</span>
                            <h5>코드 테마</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.codeHighlightTheme}</p>
                        </div>
                      )}

                      {/* 공휴일 API */}
                      {feature.holidayAPI && (
                        <div className="feature-content-box holiday">
                          <div className="content-header">
                            <span className="content-icon">📅</span>
                            <h5>공휴일 API</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.holidayAPI}</p>
                        </div>
                      )}
                      
                      {/* 기술적 도전 */}
                      {feature.technicalChallenges && (
                        <div className="feature-content-box technical">
                          <div className="content-header">
                            <span className="content-icon">🔧</span>
                            <h5>기술적 도전</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.technicalChallenges}</p>
                        </div>
                      )}
                      
                      {/* 사용자 피드백 */}
                      {feature.userFeedback && (
                        <div className="feature-content-box feedback">
                          <div className="content-header">
                            <span className="content-icon">💬</span>
                            <h5>사용자 피드백</h5>
                          </div>
                          <p style={{ whiteSpace: 'pre-line' }}>{feature.userFeedback}</p>
                        </div>
                      )}
                      
                      {/* 영향 */}
                      {feature.impact && (
                        <div className="feature-impact-box">
                          <span className="impact-icon">📈</span>
                          <p>{feature.impact}</p>
                        </div>
                      )}

                      {/* 기존 필드 지원 (하위 호환성) */}
                      {feature.details && !feature.implementationStory && (
                        <div className="feature-content-box">
                          <div className="content-header">
                            <span className="content-icon">🔧</span>
                            <h5>구현 내용</h5>
                          </div>
                          <p>{feature.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 기술적 성과 */}
          {highlights.length > 0 && (
            <div className="detail-section">
              <h3>🎯 기술적 성과</h3>
              <div className="highlights-section">
                {highlights.map((h, idx) => (
                  <div key={idx} className="highlight-card">
                    <h4>{h.title}</h4>
                    <p className="highlight-detail" style={{ whiteSpace: 'pre-line' }}>{h.detail}</p>
                    {h.impact && (
                      <div className="highlight-impact">
                        <span className="impact-icon">📈</span>
                        <p>{h.impact}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 회고 탭 */}
      {activeTab === "retrospect" && (
        <div className="project-content">
          {/* 스크린샷 */}
          {screenshots.length > 0 && (
            <div className="detail-section">
              <h3>🎬 프로젝트 스크린샷</h3>
              <div className="screenshots-section">
                <div className="screenshots-grid">
                  {screenshots.map((img, idx) => (
                    <div key={idx} className="screenshot-item">
                      <img src={img.src} alt={img.label} />
                      <div className="screenshot-overlay"><p>{img.label}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 🔥 도전과제 - 스토리텔링 버전 */}
          {challenges.length > 0 && (
            <div className="detail-section">
              <h3>🎯 도전과제</h3>
              <div className="challenges-section">
                {challenges.map((item, idx) => (
                  <div key={idx} className="challenge-item storytelling">
                    <div className="challenge-header">
                      <h4>도전과제 {idx + 1}: {item.challenge}</h4>
                    </div>
                    <div className="challenge-content">
                      {item.context && (
                        <div className="challenge-box context">
                          <h5>📌 배경</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.context}</p>
                        </div>
                      )}
                      {item.problem && (
                        <div className="challenge-box problem">
                          <h5>🤔 문제</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.problem}</p>
                        </div>
                      )}
                      {item.solution && (
                        <div className="challenge-box solution">
                          <h5>💡 해결</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.solution}</p>
                          {item.code && (
                            <div className="code-block">
                              <pre><code>{item.code}</code></pre>
                            </div>
                          )}
                        </div>
                      )}
                      {item.result && (
                        <div className="challenge-box result">
                          <h5>📈 결과</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.result}</p>
                        </div>
                      )}
                      {item.learned && (
                        <div className="challenge-box learned">
                          <h5>📚 배운 점</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.learned}</p>
                        </div>
                      )}
                      {item.keyLearning && (
                        <div className="challenge-box learned">
                          <h5>💡 핵심 교훈</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.keyLearning}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 회고 */}
          {(growth.length > 0 || regrets.length > 0 || improvements.length > 0) && (
            <div className="detail-section">
              <h3>💭 회고</h3>
              <div className="reflection-section">
                {growth.length > 0 && (
                  <div className="reflection-category">
                    <h4>📈 기술적 성장</h4>
                    <div className="reflection-items">
                      {growth.map((item, idx) => (
                        <div key={idx} className="reflection-item">
                          <h5>{item.title}</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {regrets.length > 0 && (
                  <div className="reflection-category">
                    <h4>😔 아쉬운 점</h4>
                    <div className="reflection-items">
                      {regrets.map((item, idx) => (
                        <div key={idx} className="reflection-item">
                          <h5>{item.title}</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {improvements.length > 0 && (
                  <div className="reflection-category">
                    <h4>🚀 개선 방향</h4>
                    <div className="reflection-items">
                      {improvements.map((item, idx) => (
                        <div key={idx} className="reflection-item">
                          <h5>{item.title}</h5>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="project-actions">
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="action-btn primary">
            🔗 데모 보기
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer" className="action-btn secondary">
            📂 GitHub
          </a>
        )}
        <Link to="/projects" className="action-btn tertiary">
          ← 목록으로
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;