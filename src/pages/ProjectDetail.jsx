import React from "react";
import { useParams, Link } from "react-router-dom";

const projectDetails = {
  "Shopping Mall": {
    title: "Shopping Mall",
    subtitle: "농산물 직거래 쇼핑몰",
    description: "Next.js 13 App Router와 TypeScript를 활용해 제작한 농산물 직거래 쇼핑몰 웹사이트입니다. 관리자 페이지와 일반 사용자 페이지가 분리되어 있으며, 상품 관리, 주문, 회원 관리 등 다양한 기능을 제공합니다. 반응형 UI와 Google Geist 폰트를 적용하여 모든 디바이스에서 최적의 쇼핑 경험을 제공합니다.",
    
    // 프로젝트 기본 정보
    projectInfo: {
      period: "2025.07 - 2025.08 (2개월)",
      team: "개인 프로젝트",
      myRole: "프론트엔드 개발 (100%)",
      status: "완료"
    },

    // 기술 스택 상세
    techStack: [
        { name: "Next.js 13 (App Router)", description: "최신 React 기반 SSR 및 파일 기반 라우팅", usage: "전체 프로젝트 구조 및 페이지 라우팅 설계" },
        { name: "React", description: "UI 컴포넌트 구성 및 상태 관리", usage: "모든 화면 UI 및 컴포넌트 개발" },
        { name: "TypeScript", description: "정적 타입 검사 및 코드 안정성 강화", usage: "전체 코드 베이스 타입 안정성 확보 및 오류 예방" },
        { name: "HTML5", description: "시맨틱 마크업으로 구조화된 웹페이지 제작", usage: "전체 페이지 구조 설계" },
        { name: "CSS3", description: "반응형 디자인 및 스타일링", usage: "Grid, Flexbox를 활용한 레이아웃과 스타일링" },
        { name: "Responsive Design", description: "모바일 최적화", usage: "다양한 화면 크기 대응 및 반응형 UI 구현" }
    ],

    // 주요 기능
    features: [
      { title: "상품 리스트 조회 및 상세 페이지", description: "사용자가 상품을 편리하게 탐색하고 상세 정보를 확인할 수 있습니다.", icon: "🛒" },
      { title: "관리자 상품 관리", description: "관리자가 상품 추가, 수정, 삭제를 할 수 있는 관리자 페이지 제공", icon: "✏️" },
      { title: "장바구니 및 주문 내역 확인", description: "사용자가 장바구니에 상품을 담고 주문 내역을 확인할 수 있습니다.", icon: "🛍" },
      { title: "회원가입 및 로그인", description: "안전한 인증 시스템으로 회원가입과 로그인 기능 지원", icon: "🔐" },
      { title: "주문 및 고객 관리 대시보드", description: "관리자를 위한 주문 현황과 고객 관리, 분석 기능 제공", icon: "📦" },
      { title: "반응형 UI 및 네비게이션", description: "모든 디바이스에서 최적화된 사용자 경험 제공", icon: "📱" },
    ],

    // 도전과제와 해결방법
    challenges: [
      {
        challenge: "TypeScript와 React를 활용한 동적 상품 필터링 구현",
        solution: "배열 메소드(filter, map)와 상태 관리를 통해 실시간 필터링 로직 구현",
        learned: "React와 TypeScript 기반 상태 관리 및 배열 조작 능력 향상"
      },
      {
        challenge: "CSS Grid와 Flexbox를 이용한 반응형 레이아웃 설계",
        solution: "모바일 퍼스트 방식으로 설계하고 미디어 쿼리를 단계적으로 적용",
        learned: "반응형 웹 디자인의 체계적인 접근법 습득"
      },
      {
        challenge: "로컬스토리지를 활용한 장바구니 데이터 관리",
        solution: "JSON 형태로 데이터를 저장하고 페이지 새로고침 시에도 데이터 유지",
        learned: "브라우저 저장소 활용 능력 및 데이터 지속성 이해"
      }
    ],

    // 프로젝트를 통해 배운 점
    learned: [
      "TypeScript와 React를 통한 타입 안전성 및 컴포넌트 관리 능력 향상",
      "사용자 중심의 UI/UX 설계 경험 및 접근성 고려",
      "웹 표준과 시맨틱 마크업의 중요성 이해",
      "반응형 웹 디자인 실무 적용 경험",
      "프로젝트 계획 수립부터 배포까지 전체 개발 프로세스 경험",
      "https://msfarm-delta.vercel.app/admin/login 관리자 페이지 개별 관리"
    ],

    // 링크
    demoUrl: "https://msfarm-delta.vercel.app/",
    githubUrl: "https://github.com/MinJiH01/Ms_Farm"
  },
  
  "Blog": {
    title: "Personal Blog",
    subtitle: "개인 블로그 플랫폼",
    description: "React와 Markdown을 활용하여 제작한 개인 블로그 웹사이트입니다. 현대적인 UI/UX와 다크모드, 즐겨찾기 등의 기능을 통해 사용자에게 편리한 블로그 경험을 제공합니다.",
    
    projectInfo: {
      period: "2024.06 - 2024.06 (1개월)",
      team: "개인 프로젝트",
      myRole: "프론트엔드 개발 (100%)",
      status: "완료"
    },

    techStack: [
      { name: "React", description: "컴포넌트 기반 UI 라이브러리", usage: "전체 애플리케이션 구조 설계" },
      { name: "Markdown", description: "콘텐츠 작성 및 렌더링", usage: "블로그 포스트 작성 시스템" },
      { name: "Vite", description: "빠른 빌드 도구 및 개발 서버", usage: "개발 환경 구성 및 빌드 최적화" },
      { name: "CSS Modules", description: "컴포넌트 스코프 스타일링", usage: "재사용 가능한 스타일 시스템" }
    ],

    features: [
      { title: "반응형 디자인", description: "모든 화면 크기에 최적화된 레이아웃", icon: "💻" },
      { title: "다크/라이트 모드", description: "사용자 선호에 따른 테마 전환 기능", icon: "🌓" },
      { title: "마크다운 에디터", description: "실시간 미리보기가 가능한 에디터", icon: "📝" },
      { title: "즐겨찾기", description: "관심 있는 포스트 북마크 기능", icon: "⭐" },
      { title: "검색 기능", description: "제목 및 내용 기반 포스트 검색", icon: "🔍" },
      { title: "카테고리 분류", description: "포스트 주제별 카테고리 관리", icon: "📂" }
    ],

    challenges: [
      {
        challenge: "React Hook을 활용한 상태 관리 최적화",
        solution: "useState, useEffect, useContext를 적절히 조합하여 효율적인 상태 관리 구현",
        learned: "React의 생명주기와 Hook 사용법 심화 학습"
      },
      {
        challenge: "마크다운 파서와 실시간 프리뷰 구현",
        solution: "react-markdown 라이브러리를 활용하고 debouncing으로 성능 최적화",
        learned: "외부 라이브러리 활용 능력 및 성능 최적화 경험"
      },
      {
        challenge: "로컬스토리지를 이용한 테마 설정 영속화",
        solution: "Context API와 localStorage를 연동하여 테마 상태 관리",
        learned: "전역 상태 관리와 데이터 지속성에 대한 이해"
      }
    ],

    learned: [
      "React의 컴포넌트 설계 원칙과 재사용성 고려 방법",
      "함수형 컴포넌트와 Hook을 활용한 현대적인 React 개발",
      "사용자 경험을 개선하는 인터랙션 디자인 적용",
      "빌드 도구(Vite) 활용을 통한 개발 효율성 향상",
      "Git을 활용한 버전 관리 및 GitHub Pages 배포 경험"
    ],

    demoUrl: "https://my-blog-chi-black.vercel.app/",
    githubUrl: "https://github.com/MinJiH01/My_Blog"
  },

  "Todo-App": {
    title: "Weather Todo App",
    subtitle: "React Native를 활용한 심플한 투두 리스트 앱",
    description: "Weather Todo App은 직관적인 사용자 경험(UX)을 중심으로 설계된 모바일 투두 앱입니다. 할 일을 작성하고, 우선순위를 지정하며, 통계와 날씨 정보까지 확인할 수 있는 기능이 하나의 화면에 통합되어 있습니다. 단일 파일로 구성되어 UI 설계와 스타일링에 집중한 프로토타입 앱입니다.",
    
    projectInfo: {
      period: "2025.09 - 2025.09 (1개월)",
      team: "개인 프로젝트",
      myRole: "프론트엔드 개발 (100%)",
      status: "완료"
    },

    techStack: [
      { name: "React Native", description: "모바일 앱 프레임워크", usage: "전체 애플리케이션 구조 설계 및 UI 개발" },
      { name: "JavaScript (ES6+)", description: "주요 개발 언어", usage: "앱 로직 및 상태 관리 구현" },
      { name: "Expo", description: "빠른 개발을 위한 툴체인", usage: "개발 환경 구성 및 빌드 최적화" },
      { name: "StyleSheet", description: "네이티브 스타일 구성", usage: "컴포넌트 스타일링 및 반응형 레이아웃 설계" }
    ],

    features: [
      { title: "할 일 입력 및 리스트 관리", description: "사용자가 할 일을 작성하고 관리할 수 있습니다.", icon: "📝" },
      { title: "우선순위 및 카테고리 태그 지정", description: "할 일에 우선순위와 태그를 지정하여 체계적으로 관리", icon: "⭐" },
      { title: "통계 카드", description: "오늘 완료한 항목 수를 시각적으로 확인할 수 있습니다.", icon: "📊" },
      { title: "실시간 날씨 정보 표시", description: "현재 위치 기반 실시간 날씨 정보를 제공합니다.", icon: "🌤" },
      { title: "캘린더 형태 할 일 시각화", description: "날짜별 할 일을 캘린더 UI로 확인 가능", icon: "🗓" },
      { title: "일관된 카드 기반 UI", description: "카드 단위로 구분된 깔끔한 UI 디자인 적용", icon: "🎨" }
    ],

    challenges: [
      {
        challenge: "단일 파일(App.js) 내에서 UI와 로직을 효율적으로 구성",
        solution: "섹션별 카드 컴포넌트 분리 개념으로 UI를 명확히 구분하고 스타일 네이밍 체계화",
        learned: "컴포넌트 분리 없이도 유지보수성을 고려한 스타일 및 UI 설계법 습득"
      },
      {
        challenge: "실시간 날씨 API 연동 및 표시",
        solution: "날씨 API 데이터를 받아와 UI에 반영, 비동기 처리 최적화",
        learned: "API 연동 및 비동기 데이터 처리 경험"
      },
      {
        challenge: "반응형 레이아웃 및 다크모드 고려",
        solution: "StyleSheet 내 rgba 및 반투명 배경 적용, 여백과 레이아웃 조정",
        learned: "React Native 스타일링 심화 및 사용자 경험 개선"
      }
    ],

    learned: [
      "React Native와 Expo를 활용한 모바일 앱 개발 프로세스 이해",
      "단일 파일 구성의 한계와 스타일링 최적화 방법 습득",
      "사용자 친화적인 UI/UX 설계 및 반응형 디자인 적용 경험",
      "외부 API 연동과 비동기 처리 경험",
      "모바일 앱 프로토타입 개발 및 빠른 피드백 사이클 경험"
    ],

    demoUrl: "https://todo-app-five-alpha-66.vercel.app/",
    githubUrl: "https://github.com/MinJiH01/My_Blog"
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="project-detail-error">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/projects" className="back-btn">프로젝트 목록으로 돌아가기</Link>
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
        
        {/* Quick Links */}
        <div className="header-links">
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="header-link demo">
            🚀 라이브 데모
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="header-link github">
            📂 GitHub 코드
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Project Info */}
        <div className="detail-section">
          <h3>📋 프로젝트 정보</h3>
          <div className="project-info-grid">
            <div className="info-card">
              <h4>개발 기간</h4>
              <p>{project.projectInfo.period}</p>
            </div>
            <div className="info-card">
              <h4>팀 구성</h4>
              <p>{project.projectInfo.team}</p>
            </div>
            <div className="info-card">
              <h4>담당 역할</h4>
              <p>{project.projectInfo.myRole}</p>
            </div>
            <div className="info-card">
              <h4>프로젝트 상태</h4>
              <p><span className="status-badge">{project.projectInfo.status}</span></p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="detail-section">
          <h3>🛠️ 기술 스택</h3>
          <div className="tech-stack-detailed">
            {project.techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <h4>{tech.name}</h4>
                <p className="tech-description">{tech.description}</p>
                <p className="tech-usage"><strong>활용:</strong> {tech.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="detail-section">
          <h3>✨ 주요 기능</h3>
          <div className="features-detailed">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="detail-section">
          <h3>🎯 도전과제 & 해결방법</h3>
          <div className="challenges-section">
            {project.challenges.map((item, index) => (
              <div key={index} className="challenge-item">
                <div className="challenge-header">
                  <h4>도전과제 {index + 1}</h4>
                </div>
                <div className="challenge-content">
                  <div className="challenge-problem">
                    <h5>🤔 문제</h5>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="challenge-solution">
                    <h5>💡 해결</h5>
                    <p>{item.solution}</p>
                  </div>
                  <div className="challenge-learned">
                    <h5>📚 배운 점</h5>
                    <p>{item.learned}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Learned */}
        <div className="detail-section">
          <h3>📚 프로젝트를 통해 배운 점</h3>
          <div className="learned-section">
            {project.learned.map((item, index) => (
              <div key={index} className="learned-item">
                <span className="learned-bullet">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="project-actions">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="action-btn primary"
          >
            🔗 데모 사이트 보기
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="action-btn secondary"
          >
            📂 GitHub 코드 보기
          </a>
          <Link to="/projects" className="action-btn tertiary">
            ← 프로젝트 목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;