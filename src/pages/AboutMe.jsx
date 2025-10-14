import React, { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaMapMarkerAlt, FaEnvelope, FaGithub, FaHeart } from "react-icons/fa";

function AboutMe() {
  const [animated, setAnimated] = useState(false);
  const skillRef = useRef(null);

  // 개인 정보
  const personalInfo = {
    location: "서울",
    email: "hmj4196@naver.com", 
    github: "MinJiH01",
    interests: ["React 컴포넌트 설계", "사용자 인터페이스 개선", "코드 품질 향상"]
  };

  // 목표
  const goals = [
    "사용자가 직관적으로 사용할 수 있는 웹 인터페이스 구현",
    "웹 접근성과 성능을 고려한 React 컴포넌트 개발",
    "실무에서 요구되는 협업 능력과 문제 해결 역량 습득",
    "지속적인 코드 리뷰와 학습을 통한 개발 실력 향상"
  ];

  // 기술 스택
  const techStack = {
    frontend: [
      { name: "HTML5", level: 70, description: "시맨틱 마크업" },
      { name: "CSS3", level: 70, description: "반응형 디자인" },
      { name: "JavaScript", level: 65, description: "ES6+ 문법" },
      { name: "React", level: 65, description: "컴포넌트 기반 개발" }
    ],
    tools: ["Git", "VS Code", "Expo Go", "Chrome DevTools"],
    learning: ["성능 최적화", "CI/CD 파이프라인 구축", "테스팅", "웹 접근성"]
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
      year: "2023–03 ~ 현재",
      title: "프론트엔드 개발 학습",
      details: [
        "React 기반 웹 애플리케이션 개발 학습"
      ],
      icon: <FaBriefcase color="#FF9800" />,
    },
    {
      year: "2021–04 ~ 2023-02",
      title: "AUTOMOTIVE PCB 검사원 (디에이디오)",
      details: [
        "자동차 전자회로 및 기능검사 업무",
        "정밀한 작업을 통한 집중력과 책임감 습득"
      ],
      icon: <FaBriefcase color="#FF9800" />,
    },
    {
      year: "2024–12 ~ 2025-08",
      title: "반도체 완제품 검사원 (앰코테크놀로지코리아 K5)",
      details: [
        "세계 2위 반도체 패키징 전문 기업",
        "반도체 패키지 완제품 육안 및 스코프 검사",
        "품질 기준에 따른 체계적 검사 프로세스 경험"
      ],
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
      description: "학과 행사 기획 및 운영, 학생들 간 소통 창구 역할 담당"
    },
    {
      title: "개인 프로젝트 개발",
      period: "2023 ~ 현재",
      description: "React 기반 쇼핑몰, 블로그, 모바일 앱 개발 및 Vercel 배포"
    },
    {
      title: "GitHub 활동",
      period: "2025 ~ 현재",
      description: "프로젝트 코드 관리, 체계적인 커밋 메시지 작성 및 버전 관리"
    }
  ];

  // Intersection Observer 적용해서 스킬바가 보일 때 애니메이션 시작
  useEffect(() => {
    const currentRef = skillRef.current;
    
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
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
              안녕하세요. 프론트엔드 개발자를 목표로 하는 한민지입니다. <br />
              컴퓨터학과를 졸업했고 React 기반 프론트엔드 개발에 집중하고 있습니다. <br />
              사용자가 불편함 없이 사용할 수 있는 인터페이스를 만드는 것에 관심이 많으며,
              개인 프로젝트를 통해 실력을 쌓아가고 있습니다. 아직 부족한 점이 많지만
              꾸준한 학습과 실습으로 실무에서 활용할 수 있는 역량을 기르고자 합니다.
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
      </div>
    </div>
  );
}

export default AboutMe;