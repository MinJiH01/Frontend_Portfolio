  import React, { useState, useEffect, useRef } from "react";
  import { FaGraduationCap, FaBriefcase, FaCertificate, FaMapMarkerAlt, FaEnvelope, FaGithub, FaHeart } from "react-icons/fa";

  function AboutMe() {
    const [animated, setAnimated] = useState(false);
    const skillRef = useRef(null);

    // 개인 정보
    const personalInfo = {
      location: "창원, 경남",
      email: "hmj4196@naver.com", 
      github: "MinJiH01",
      interests: ["웹 개발", "UI/UX 디자인", "새로운 기술 학습", "문제 해결"]
    };

    // 목표
    const goals = [
      "사용자 중심의 직관적인 웹 서비스 개발",
      "팀과 소통하며 함께 성장하는 개발자",
      "지속적인 학습으로 기술 역량 향상",
      "실무에서 바로 활용 가능한 개발 능력 습득"
    ];

    // 기술 스택 (상세화)
    const techStack = {
      frontend: [
        { name: "HTML5", level: 80, description: "시맨틱 마크업" },
        { name: "CSS3", level: 80, description: "반응형 디자인" },
        { name: "JavaScript", level: 75, description: "ES6+ 문법" },
        { name: "React", level: 70, description: "컴포넌트 기반 개발" }
      ],
      tools: ["Git", "VS Code", "Expo Go", "Chrome DevTools"],
      learning: ["TypeScript", "JavaScript", "Next.js", "Node.js"]
    };

    const education = [
      {
        year: "2023–2025",
        title: "경남정보대학교 컴퓨터학과",
        details: [
          "학점 [4.2 / 4.5]",
          "졸업 [최종학력]",
        ],
        icon: <FaGraduationCap color="#4CAF50" />,
      },
      {
        year: "2017–2020",
        title: "성지여자고등학교",
        details: ["졸업"],
        icon: <FaGraduationCap color="#4CAF50" />,
      },
    ];

    const experience = [
      {
        year: "2021–04 ~ 2023-02",
        title: "디에이디오",
        details: ["AUTOMOTIVE PCB 전자회로 및 기능검사"],
        icon: <FaBriefcase color="#FF9800" />,
      },
      {
        year: "2024–11 ~ 2025–08",
        title: "앰코테크놀로지코리아 K5",
        details: ["반도체 패키징 완제품 최종검사"],
        icon: <FaBriefcase color="#FF9800" />,
      },
    ];

    const certifications = [
      {
        year: "2019",
        title: "정보처리기능사",
        details: ["한국산업인력공단"],
        icon: <FaCertificate color="#646cff" />,
      },
      {
        year: "2019",
        title: "컴퓨터 활용능력 2급",
        details: ["대한상공회의소 자격평가사업단"],
        icon: <FaCertificate color="#646cff" />,
      },
    ];

    // 추가 활동
    const activities = [
      {
        title: "학과 학생회 총대",
        period: "2024",
        description: "학과 행사 기획 및 학생들과의 소통 담당"
      },
      {
        title: "개인 학습 프로젝트",
        period: "진행중",
        description: "매일 코딩 테스트 풀이 및 새로운 기술 스택 학습"
      }
    ];

    // Intersection Observer 적용해서 스킬바가 보일 때 애니메이션 시작
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (skillRef.current) {
        observer.observe(skillRef.current);
      }

      return () => {
        if (skillRef.current) observer.unobserve(skillRef.current);
      };
    }, []);

    const renderSection = (title, items) => (
      <div className="section">
        <h2 className="section-title">{title}</h2>
        <ul className="section-list">
          {items.map((item, index) => (
            <li key={index} className="section-item">
              <span className="section-icon">{item.icon}</span>
              <div className="section-content">
                <p className="section-header">
                  {item.year} | <strong>{item.title}</strong>
                </p>
                {item.details.map((line, i) => (
                  <p key={i} className="section-detail">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div className="page-wrapper">
        <div className="about-container">
          {/* Hero */}
          <div className="hero">
            <img src="./profile.jpg" alt="Profile" className="profile-img" />
            <div className="hero-text">
              <h1>한민지</h1>
              <p className="role">Frontend Developer</p>
              
              {/* 개인 정보 */}
              <div className="personal-info">
                <div className="info-item">
                  <FaMapMarkerAlt color="#646cff" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <FaEnvelope color="#646cff" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="info-item">
                  <FaGithub color="#646cff" />
                  <span>github.com/{personalInfo.github}</span>
                </div>
              </div>

              <p className="intro">
                안녕하세요. 주니어 프론트엔드 개발자 한민지 입니다. <br />
                사용자에게 직관적이고 편리한 웹 서비스를 제공하는 프론트엔드 개발자를 <br />
                지향합니다. 디자인과 기능 사이의 균형을 고민하며, 더 나은 사용자 친화적인 서비스를 제공하기 위해 노력하고 있습니다.
                꾸준한 학습과 프로젝트 경험을 통해 기술 역량을 키우며, 문제를 해결하는 즐거움 속에서 성장하고 있습니다.
              </p>
            </div>
          </div>

          {/* 관심사 & 목표 */}
          <div className="interests-goals">
            <div className="interests">
              <h3><FaHeart color="#646cff" /> 관심사</h3>
              <div className="interest-tags">
                {personalInfo.interests.map((interest, index) => (
                  <span key={index} className="interest-tag">{interest}</span>
                ))}
              </div>
            </div>
            
            <div className="goals">
              <h3>🎯 목표</h3>
              <ul className="goals-list">
                {goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 학력, 경력, 자격증 */}
          {renderSection("🎓 학력", education)}
          {renderSection("💼 경력", experience)}
          {renderSection("📜 자격증", certifications)}

          {/* 기타 활동 */}
          <div className="section">
            <h2 className="section-title">🌟 기타 활동</h2>
            <div className="activities-grid">
              {activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <h4>{activity.title}</h4>
                  <span className="activity-period">{activity.period}</span>
                  <p>{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Skills */}
          <div className="skills" ref={skillRef}>
            <h2>💻 기술 스택</h2>
            
            {/* Frontend Skills */}
            <div className="skill-category">
              <h3>Frontend</h3>
              {techStack.frontend.map((skill) => (
                <div key={skill.name} className="skill-bar">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-desc">{skill.description}</span>
                    <span className="skill-percent">{animated ? skill.level : 0}%</span>
                  </div>
                  <div className="bar">
                    <div
                      className="progress"
                      style={{ width: animated ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="tools-grid">
                {techStack.tools.map((tool, index) => (
                  <span key={index} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div className="skill-category">
              <h3>Learning</h3>
              <div className="learning-grid">
                {techStack.learning.map((tech, index) => (
                  <span key={index} className="learning-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 다운로드 */}
          <div className="download-links">
            <a href="./resume.pdf" download>
              <button>이력서 다운로드</button>
            </a>
            <a href="./CoverLetter.pdf" download>
              <button>자소서 다운로드</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default AboutMe;