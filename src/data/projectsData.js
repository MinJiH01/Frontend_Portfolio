// src/data/projectsData.js

export const projectsData = {
  "Community": {
  title: "DevHub",
  subtitle: "개발자 커뮤니티 블로그",
  description: "React와 Firebase를 활용한 마크다운 기반 개발자 블로그 플랫폼",
  
  projectInfo: {
    period: "2025.06 (1개월)",
    team: "개인 프로젝트",
    myRole: "프론트엔드 개발 (100%)",
    status: "완료"
  },

  background: {
    motivation: "개발 공부를 하면서 배운 내용을 정리하고 공유할 수 있는 나만의 블로그 플랫폼이 필요했습니다. 단순히 글만 쓰는 것이 아니라, 마크다운으로 코드를 예쁘게 표시하고, 다른 개발자들과 소통할 수 있는 공간을 만들고 싶었습니다.",
    goals: [
      "마크다운 에디터로 개발자 친화적인 글쓰기 환경 구축",
      "Firebase를 활용한 실시간 데이터베이스 경험",
      "Google OAuth로 간편한 인증 시스템 구현",
      "댓글 시스템으로 소통 기능 제공",
      "다크/라이트 모드로 사용자 선호도를 고려한 UX 제공"
    ],
    targetUsers: "개발 지식을 정리하고 공유하고 싶은 모든 개발자"
  },

  techStack: [
    { 
      name: "React 19.1.1", 
      category: "라이브러리",
      description: "컴포넌트 기반 UI 라이브러리",
      reason: "게시글 카드, 댓글 폼 등 반복되는 UI를 컴포넌트로 만들어 재사용했습니다. 함수형 컴포넌트와 Hooks를 사용해 깔끔한 코드를 작성할 수 있었습니다.",
      highlight: "Custom Hooks로 로그인, 게시글, 댓글 로직 분리"
    },
    { 
      name: "Vite 7.1.2", 
      category: "빌드 도구",
      description: "빠른 개발 서버를 제공하는 최신 빌드 도구",
      reason: "Webpack은 개발 서버 시작에 30초가 걸렸는데, Vite는 3초만에 떠서 개발 속도가 10배 빨라졌습니다. 코드 수정하면 바로 반영되어 편했습니다.",
      highlight: "개발 서버 시작 시간 30초 → 3초"
    },
    { 
      name: "React Router 7.8.2", 
      category: "라우팅",
      description: "페이지 이동을 처리하는 라이브러리",
      reason: "게시글 상세 페이지(/posts/1, /posts/2)처럼 주소가 동적으로 바뀌는 페이지를 쉽게 만들 수 있었습니다.",
      highlight: "동적 URL로 각 게시글마다 고유 주소 부여"
    },
    { 
      name: "Firebase Firestore 12.2.1", 
      category: "데이터베이스",
      description: "구글의 실시간 클라우드 데이터베이스",
      reason: "백엔드 서버를 직접 만들지 않아도 데이터를 저장하고 불러올 수 있었습니다. 폴더/파일 구조처럼 직관적으로 데이터를 관리할 수 있었습니다.",
      highlight: "게시글 폴더 안에 댓글 폴더를 만들어 관계 표현"
    },
    { 
      name: "Firebase Auth 12.2.1", 
      category: "인증",
      description: "구글의 로그인 인증 서비스",
      reason: "Google 소셜 로그인을 몇 줄의 코드로 구현할 수 있었습니다. 토큰 관리, 세션 유지를 Firebase가 자동으로 처리해줘서 편했습니다.",
      highlight: "Google OAuth 5분 만에 구현 완료"
    },
    { 
      name: "react-markdown 10.1.0", 
      category: "마크다운",
      description: "마크다운을 HTML로 변환해주는 라이브러리",
      reason: "사용자가 작성한 마크다운 텍스트를 예쁜 HTML로 자동 변환해줍니다. 악성 코드도 자동으로 차단해줘서 안전합니다.",
      highlight: "마크다운 → HTML 자동 변환 및 보안 처리"
    },
    { 
      name: "remark-gfm 4.0.1", 
      category: "마크다운 확장",
      description: "GitHub 스타일 마크다운을 지원하는 플러그인",
      reason: "기본 마크다운은 테이블, 체크박스를 지원 안 하는데, 이 라이브러리를 추가하니 GitHub처럼 풍부한 표현이 가능해졌습니다.",
      highlight: "테이블, 취소선, 체크박스 문법 추가"
    },
    { 
      name: "prismjs 1.30.0", 
      category: "코드 하이라이팅",
      description: "코드 블록에 색상을 입혀주는 라이브러리",
      reason: "마크다운 안에 있는 코드를 언어별로 예쁘게 색칠해서 가독성을 높였습니다.",
      highlight: "JavaScript, Python 등 200개 이상 언어 지원"
    }
  ],

  features: [
    { 
      title: "마크다운 에디터", 
      description: "개발자 친화적인 마크다운 문법으로 글을 작성할 수 있습니다. 제목은 100자, 본문은 10,000자로 제한되며, 작성 중 실시간으로 글자 수를 확인할 수 있습니다.",
      tech: "React Hooks, Validation",
      details: "타이핑 중에는 유효성 검사를 지연시키고(500ms), 입력을 멈춘 후에만 에러 메시지를 보여줍니다. 빈 값이나 글자 수 초과를 체크해서 알려줍니다."
    },
    { 
      title: "Google 소셜 로그인", 
      description: "Firebase Auth를 활용한 간편한 Google 계정 로그인입니다. 로그인 없이도 게시글을 읽을 수 있지만, 작성/수정/삭제는 로그인이 필요합니다.",
      tech: "Firebase Auth, signInWithPopup",
      details: "Google OAuth 2.0으로 팝업 창에서 로그인을 처리합니다. 로그인하면 사용자 정보를 브라우저에 저장해서 새로고침해도 로그인 상태가 유지됩니다."
    },
    { 
      title: "댓글 시스템", 
      description: "각 게시글마다 댓글을 작성하고 삭제할 수 있습니다. Firestore의 폴더 구조를 활용하여 게시글과 댓글을 계층적으로 관리합니다.",
      tech: "Firestore, Custom Hooks",
      details: "게시글 폴더 안에 댓글 폴더를 만들어서 각 게시글에 속한 댓글을 저장합니다. useComments Hook으로 댓글 생성/삭제 로직을 깔끔하게 정리했습니다."
    },
    { 
      title: "다크/라이트 모드", 
      description: "사용자 선호에 따라 다크 모드와 라이트 모드를 전환할 수 있습니다. 헤더의 테마 버튼(🌙/☀️)을 클릭하면 즉시 바뀝니다.",
      tech: "React State, CSS, localStorage",
      details: "테마 선택을 브라우저에 저장해서 다음에 방문해도 선택한 테마가 유지됩니다. CSS 클래스를 바꿔서 전체 색상을 한 번에 변경합니다."
    },
    { 
      title: "카테고리 필터링", 
      description: "JavaScript, React, TypeScript 등 기술별로 게시글을 분류하고 필터링할 수 있습니다. 각 카테고리에 몇 개의 글이 있는지도 보여줍니다.",
      tech: "Firestore Query, Array Filter",
      details: "카테고리를 선택하면 Firestore에서 해당 카테고리 글만 가져오거나, 브라우저에서 JavaScript filter로 걸러냅니다."
    },
    { 
      title: "검색 기능", 
      description: "제목과 내용에서 키워드를 검색하여 원하는 게시글을 빠르게 찾을 수 있습니다.",
      tech: "JavaScript filter, includes",
      details: "모든 게시글을 브라우저로 가져온 후, 제목과 내용에 검색어가 포함되어 있는지 확인해서 필터링합니다."
    }
  ],

  highlights: [
    {
      title: "Firebase로 백엔드 없이 풀스택 구현",
      detail: "Firestore로 데이터를 저장하고, Firebase Auth로 로그인을 처리하여 별도의 백엔드 서버 없이도 완전한 블로그를 만들었습니다.",
      impact: "개발 시간 50% 단축, 서버 관리 부담 없음"
    },
    {
      title: "Vite로 개발 생산성 10배 향상",
      detail: "Webpack에서 Vite로 바꾸니 개발 서버 시작 시간이 30초에서 3초로 줄었고, 코드 수정이 바로바로 반영되어 개발이 훨씬 편해졌습니다.",
      impact: "개발 서버 시작 시간 90% 감소"
    },
    {
      title: "다크/라이트 모드로 사용자 경험 개선",
      detail: "사용자가 원하는 테마를 선택할 수 있게 했고, 다음 방문 시에도 선택한 테마가 유지되도록 구현했습니다.",
      impact: "야간에 눈이 편하고, 사용자 만족도 향상"
    },
    {
      title: "타이핑 딜레이로 UX 개선",
      detail: "타이핑 중에는 에러 메시지를 안 띄우고, 입력을 멈춘 후 500ms 지나면 검증하도록 했습니다. 이렇게 하니 사용자가 방해받지 않고 편하게 글을 쓸 수 있었습니다.",
      impact: "불필요한 검증 80% 감소"
    }
  ],

  challenges: [
    {
      challenge: "게시글 수정 시 작성자 정보가 사라지는 문제",
      context: "게시글을 수정할 때 제목, 카테고리, 내용만 바꾸려 했는데 작성자 이름과 ID가 사라지는 버그가 있었습니다.",
      problem: "수정할 때 모든 데이터를 새로 넣으면서 작성자 정보까지 빈 값으로 바뀌어버렸습니다.",
      solution: "수정할 때는 제목, 카테고리, 내용, 수정시간만 명시적으로 업데이트하고, 작성자 정보는 건드리지 않도록 했습니다.",
      code: `const updateData = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      updatedAt: Timestamp.now(),
      // 작성자 정보는 업데이트 안 함
  };`,
    result: "게시글을 수정해도 작성자 정보가 유지되고, 수정 시간만 정확히 업데이트됩니다.",
    learned: "데이터를 통째로 복사하면 편하지만, 의도치 않게 중요한 정보를 덮어쓸 수 있습니다. 필요한 필드만 골라서 업데이트하는 게 안전합니다."
    },
    {
      challenge: "Firestore에서 검색 기능 구현하기",
      context: "사용자가 제목이나 내용에서 키워드를 검색할 수 있는 기능이 필요했습니다.",
      problem: "Firestore는 SQL의 LIKE처럼 부분 문자열 검색을 지원하지 않습니다. 정확히 일치하는 것만 찾을 수 있었습니다.",
      solution: "모든 게시글을 브라우저로 가져온 후, JavaScript의 filter와 includes로 브라우저에서 검색을 처리했습니다.",
      code: `const results = allPosts.filter(post => 
  post.title.toLowerCase().includes(검색어) ||
  post.content.toLowerCase().includes(검색어)
);`,
      result: "검색 기능이 정상 작동하지만, 게시글이 많아지면 느려질 수 있습니다.",
      learned: "NoSQL 데이터베이스는 검색 기능이 약해서, 게시글이 100개 이상 되면 Algolia 같은 전문 검색 서비스를 써야 한다는 걸 알게 되었습니다."
    }
  ],

  reflections: {
    growth: [
      { 
        title: "Firebase의 장점과 한계", 
        detail: "백엔드 서버 없이도 Firestore로 데이터를 저장하고, Firebase Auth로 로그인을 만들 수 있어서 개발이 빨랐습니다. 하지만 검색 기능 같은 건 제약이 있어서, 프로젝트가 커지면 백엔드가 필요하다는 걸 알게 되었습니다." 
      },
      { 
        title: "NoSQL 데이터베이스 이해", 
        detail: "MySQL처럼 테이블이 아니라 폴더/파일 구조로 데이터를 저장한다는 게 신기했습니다. JOIN이 없어서 게시글 폴더 안에 댓글 폴더를 만드는 식으로 관계를 표현하는 법을 배웠습니다." 
      },
      { 
        title: "컴포넌트 재사용과 Custom Hooks", 
        detail: "MarkdownEditor를 '작성'과 '수정' 모드로 재사용할 수 있게 만들었습니다. isEditing이라는 prop으로 모드를 구분해서 코드 중복을 줄였고, Custom Hooks로 비즈니스 로직을 깔끔하게 정리하는 패턴을 익혔습니다." 
      }
    ],
    
    regrets: [
      { 
        title: "검색 기능의 한계", 
        detail: "Firestore가 부분 검색을 지원 안 해서 모든 게시글을 브라우저로 가져와서 검색했습니다. 게시글이 100개 넘으면 느려질 것 같아 아쉽습니다." 
      },
      { 
        title: "마크다운 실시간 미리보기 없음", 
        detail: "글을 쓸 때 마크다운이 어떻게 보일지 미리 볼 수 없어서 불편했습니다. 화면을 반으로 나눠서 왼쪽은 에디터, 오른쪽은 미리보기를 보여주는 기능을 추가하지 못한 게 아쉽습니다." 
      },
      { 
        title: "이미지 업로드 기능 없음", 
        detail: "마크다운으로 이미지 URL을 직접 입력해야 해서 불편합니다. Firebase Storage로 이미지를 업로드하고 자동으로 URL을 넣어주는 기능을 만들지 못했습니다." 
      }
    ],

    improvements: [
      { 
        title: "Algolia 검색 서비스 연동", 
        detail: "Firestore의 검색 제약을 해결하려면 Algolia 같은 전문 검색 서비스를 연동해야 합니다. 자동완성, 오타 수정 같은 고급 기능도 추가할 계획입니다." 
      },
      { 
        title: "마크다운 실시간 미리보기", 
        detail: "화면을 반으로 나눠서 왼쪽은 에디터, 오른쪽은 실시간 렌더링 결과를 보여주는 기능을 추가하겠습니다. 타이핑 중에는 렌더링을 지연시켜서 성능을 최적화할 예정입니다." 
      },
      { 
        title: "Firebase Storage 이미지 업로드", 
        detail: "드래그 앤 드롭으로 이미지를 올리면 Firebase Storage에 저장하고, 자동으로 마크다운에 URL을 넣어주는 기능을 만들겠습니다. 이미지 압축도 추가할 예정입니다." 
      }
    ]
  },

  media: {
    screenshots: [
      { src: "/Community_Main.png", label: "메인 페이지" },
      { src: "/Community_Markdown.png", label: "마크다운 에디터" },
      { src: "/Community_Post.png", label: "게시글 상세" },
      { src: "/Community_Dark.png", label: "다크 모드" }
    ]
  },

  demoUrl: "https://my-blog-chi-black.vercel.app/",
  githubUrl: "https://github.com/MinJiH01/My_Blog"
},

"Shopping Mall": {
    title: "MS-FARM-WEBSITE",
    subtitle: "농산물 직거래 쇼핑몰",
    description: "Next.js 15와 Prisma, PostgreSQL을 활용한 풀스택 농산물 쇼핑몰 플랫폼",
    
    projectInfo: {
      period: "2025.07 - 2025.08 (2개월)",
      team: "개인 프로젝트",
      myRole: "풀스택 개발 (프론트엔드 70%, 백엔드 30%)",
      status: "완료 및 배포"
    },

    background: {
      motivation: "지역 농산물 생산자들이 중간 유통 과정 없이 소비자와 직접 거래할 수 있는 플랫폼의 필요성을 느꼈습니다. 기존 오픈마켓은 복잡한 수수료 구조와 높은 진입 장벽으로 소규모 농가가 접근하기 어려웠습니다.",
      goals: [
        "역할 기반 접근 제어 구현 - JWT 기반 인증으로 일반 사용자와 관리자의 명확한 권한 분리",
        "풀스택 아키텍처 완성 - Next.js API Routes + Prisma ORM으로 프론트엔드와 백엔드 통합",
        "실제 배포 가능한 프로덕션 환경 구축 - Vercel + Supabase로 실서비스 수준 인프라 구성",
        "타입 안정성 확보 - TypeScript로 개발 단계에서 런타임 에러 사전 차단",
        "실시간 상태 동기화 - Zustand로 장바구니 카운트 실시간 업데이트"
      ],
      targetUsers: "신선한 농산물을 합리적인 가격에 구매하고 싶은 소비자와 직거래를 원하는 지역 농산물 생산자"
    },

    techStack: [
      { 
        name: "Next.js 15", 
        category: "프레임워크",
        description: "React 기반 풀스택 프레임워크로 App Router와 Server Components 지원",
        reason: "파일 기반 라우팅으로 관리자/사용자 페이지를 직관적으로 분리할 수 있었고, Turbopack으로 HMR 속도가 기존 Webpack 대비 3배 빨라졌습니다. API Routes로 별도의 백엔드 서버 없이도 RESTful API를 구현할 수 있었습니다.",
        highlight: "API Routes로 백엔드 로직을 같은 프로젝트에서 관리"
      },
      { 
        name: "TypeScript 5", 
        category: "언어",
        description: "정적 타입 시스템을 제공하는 JavaScript 슈퍼셋",
        reason: "상품, 주문, 사용자 등 복잡한 데이터 구조를 다루는 프로젝트에서 타입 안정성이 필수적이었습니다. 개발 중 타입 에러를 사전에 발견하여 런타임 에러를 80% 감소시켰습니다.",
        highlight: "Prisma 타입 생성으로 DB 쿼리의 완벽한 타입 추론"
      },
      { 
        name: "Prisma 6", 
        category: "ORM",
        description: "타입 안전한 데이터베이스 ORM으로 PostgreSQL 지원",
        reason: "TypeScript와 완벽하게 통합되며, Migration으로 스키마 변경 이력을 관리할 수 있어 선택했습니다. Prisma Studio로 실시간 데이터 확인 및 디버깅이 가능했습니다.",
        highlight: "자동 타입 생성으로 100% 타입 안전한 DB 쿼리 작성"
      },
      { 
        name: "PostgreSQL (Supabase)", 
        category: "데이터베이스",
        description: "클라우드 기반 PostgreSQL 데이터베이스 서비스",
        reason: "실제 배포 환경에서 안정적으로 작동하는 프로덕션용 DB가 필요했습니다. Supabase는 무료 티어에서도 충분한 성능을 제공하고, GUI로 데이터를 쉽게 관리할 수 있어 선택했습니다. 개발 단계에서는 SQLite를 사용하다가 최종 배포 시 PostgreSQL로 마이그레이션했습니다.",
        highlight: "Vercel 서버리스 환경에서 영구 데이터 저장 보장"
      },
      { 
        name: "Tailwind CSS 4", 
        category: "스타일링",
        description: "Utility-first CSS 프레임워크",
        reason: "빠른 프로토타이핑과 일관된 디자인 시스템 구축이 필요했고, 반응형 디자인을 간편하게 구현할 수 있었습니다.",
        highlight: "Mobile-First 접근으로 모든 디바이스 대응"
      },
      { 
        name: "Zustand 5", 
        category: "상태 관리",
        description: "간결한 전역 상태 관리 라이브러리",
        reason: "Redux는 보일러플레이트가 너무 많아 학습 곡선이 가팔랐습니다. Zustand는 간결하면서도 강력한 기능을 제공하여 빠르게 장바구니 전역 상태를 구현할 수 있었습니다.",
        highlight: "Redux 대비 90% 적은 코드로 동일한 기능 구현"
      },
      { 
        name: "JWT + bcryptjs", 
        category: "인증",
        description: "토큰 기반 인증 및 비밀번호 암호화",
        reason: "Stateless 인증 방식으로 서버 부하를 줄이고, bcryptjs로 비밀번호를 안전하게 암호화했습니다.",
        highlight: "Salt 라운드 10으로 레인보우 테이블 공격 방어"
      },
      { 
        name: "Vercel", 
        category: "배포",
        description: "Next.js에 최적화된 서버리스 배포 플랫폼",
        reason: "Git Push만으로 자동 배포되고, 환경 변수 관리가 편리하며, 글로벌 CDN으로 빠른 응답 속도를 제공합니다.",
        highlight: "Git Push 시 자동 빌드 및 배포, 무료 HTTPS 제공"
      }
    ],

    features: [
      { 
        title: "역할 기반 접근 제어 시스템", 
        description: "JWT 기반 인증으로 일반 사용자(USER)와 관리자(ADMIN)를 명확히 분리했습니다. 사용자는 상품 탐색과 구매에 집중하고, 관리자는 상품/주문/고객 관리를 효율적으로 수행할 수 있습니다.",
        tech: "JWT, Next.js Middleware, Custom Hooks",
        details: "클라이언트와 서버 양쪽에서 이중 권한 검증을 수행합니다. useAuth Hook으로 클라이언트에서 역할을 체크하고, API Routes에서 JWT 토큰을 검증하여 ADMIN 역할인지 확인합니다."
      },
      { 
        title: "실시간 장바구니 동기화 시스템", 
        description: "Zustand로 장바구니 상태를 전역 관리하여, 상품 추가 시 즉시 Header의 카운트가 업데이트됩니다. PostgreSQL에 영구 저장되어 새로고침해도 데이터가 유지됩니다.",
        tech: "Zustand, Custom Events, Prisma, PostgreSQL",
        details: "장바구니 추가 시 CustomEvent('cartUpdated')를 발생시키고, Header 컴포넌트에서 이를 리스닝하여 즉시 카운트를 갱신합니다. 모든 변경사항은 Supabase PostgreSQL에 실시간으로 저장됩니다."
      },
      { 
        title: "복잡한 상품 필터링 및 검색 시스템", 
        description: "실시간 검색, 카테고리 필터링(채소, 과일, 곡물류, 견과류), 다양한 정렬 옵션(최신순, 인기순, 가격순)을 제공하여 사용자가 원하는 상품을 빠르게 찾을 수 있습니다.",
        tech: "useEffect, 의존성 배열, Array 메서드",
        details: "useEffect의 의존성 배열([products, selectedCategory, searchQuery, sortBy])을 활용하여 필요한 경우에만 필터링을 실행하도록 최적화했습니다."
      },
      { 
        title: "관리자 대시보드", 
        description: "총 주문, 총 매출, 상품 수, 대기 주문 등의 실시간 통계와 최근 3건의 주문 내역을 한눈에 확인할 수 있는 대시보드를 제공합니다.",
        tech: "Prisma Aggregation, React State",
        details: "Prisma의 aggregate, groupBy 기능으로 DB에서 직접 통계를 계산하여 서버 부하를 줄였습니다. 최근 주문은 orderBy로 최신순 정렬하여 표시합니다."
      },
      { 
        title: "시드 데이터 시스템", 
        description: "15개의 농산물 상품 데이터를 자동으로 생성하는 시드 시스템을 구현했습니다. 초기 배포 시 상품 데이터를 한 번에 추가할 수 있습니다.",
        tech: "Prisma Seed, TypeScript, tsx",
        details: "채소, 과일, 곡물류, 견과류 카테고리별로 실제 농산물 데이터를 준비하여 시드 파일로 작성했습니다. npx tsx prisma/seed.ts 명령어 한 번으로 모든 상품이 DB에 저장됩니다."
      }
    ],

    highlights: [
      {
        title: "SQLite에서 PostgreSQL로 안전한 마이그레이션",
        detail: "개발 단계에서는 SQLite로 빠르게 프로토타이핑하고, 배포 단계에서 Supabase PostgreSQL로 전환했습니다. Prisma의 provider만 변경하면 되는 간편한 마이그레이션이었고, 시드 데이터로 15개 상품을 안전하게 이관했습니다.",
        impact: "Vercel 서버리스 환경에서도 데이터 영구 저장 보장"
      },
      {
        title: "Vercel 배포 시 Prisma Generate 자동화",
        detail: "처음 배포 시 Prisma Client가 생성되지 않아 500 에러가 발생했습니다. package.json의 build 스크립트에 'prisma generate'를 추가하고 postinstall 훅을 설정하여 빌드 시 자동으로 Prisma Client가 생성되도록 개선했습니다.",
        impact: "빌드 자동화로 배포 프로세스 간소화"
      },
      {
        title: "Zustand 도입으로 상태 관리 간소화",
        detail: "Redux는 보일러플레이트가 너무 많아 150줄 이상의 코드가 필요했지만, Zustand는 단 15줄로 동일한 기능(장바구니 전역 상태)을 구현할 수 있었습니다. 학습 곡선도 완만하여 30분 내에 습득할 수 있었습니다.",
        impact: "상태 관리 코드 90% 감소, 유지보수성 향상"
      }
    ],

    challenges: [
      {
        challenge: "Vercel 서버리스 환경에서 SQLite 데이터 유실 문제",
        context: "로컬에서는 SQLite로 완벽하게 작동했지만, Vercel에 배포하니 회원가입, 장바구니, 주문 등 모든 데이터가 저장되지 않는 심각한 문제가 발생했습니다.",
        problem: "Vercel은 서버리스 환경이라 매 배포마다 파일 시스템이 리셋되어 SQLite 파일(dev.db)이 사라졌습니다. 사용자가 데이터를 입력해도 다음 배포 시 모두 날아가는 치명적인 결함이었습니다.",
        solution: "SQLite를 포기하고 클라우드 기반 PostgreSQL(Supabase)로 완전히 전환했습니다. Prisma schema의 provider만 변경하고, DATABASE_URL을 Supabase 연결 문자열로 교체했습니다. 시드 파일을 작성하여 15개 상품 데이터를 안전하게 마이그레이션했습니다.",
        code: `// Before (SQLite)
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

// After (PostgreSQL)
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// .env
DATABASE_URL="postgresql://postgres.xxx@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"`,
        result: "모든 데이터가 Supabase에 영구 저장되어 Vercel 배포 후에도 회원가입, 장바구니, 주문이 정상 작동합니다. 실제 서비스로 사용 가능한 수준이 되었습니다.",
        learned: "서버리스 환경의 특성을 이해하게 되었고, 프로덕션 환경에서는 파일 기반 DB가 아닌 클라우드 DB를 사용해야 한다는 것을 배웠습니다. 개발 환경과 프로덕션 환경을 명확히 분리하는 것의 중요성을 체감했습니다."
      },
      {
        challenge: "Vercel 배포 시 Prisma Client 생성 누락으로 500 에러",
        context: "PostgreSQL로 전환 후 로컬에서는 완벽하게 작동했지만, Vercel 배포 후 /api/products에서 500 에러가 발생하며 상품이 표시되지 않았습니다.",
        problem: "Vercel 빌드 과정에서 Prisma Client가 자동으로 생성되지 않아 런타임에 '@prisma/client'를 찾을 수 없다는 에러가 발생했습니다. 로컬에서는 수동으로 npx prisma generate를 실행했지만, Vercel 자동 배포에는 이 단계가 없었습니다.",
        solution: "package.json의 scripts에 build와 postinstall 훅을 추가했습니다. build 스크립트에 'prisma generate &&'를 추가하여 Next.js 빌드 전에 Prisma Client를 생성하도록 하고, postinstall 훅으로 의존성 설치 후에도 자동 생성되도록 이중 보장했습니다.",
        code: `{
  "scripts": {
    "build": "prisma generate && next build --turbopack",
    "postinstall": "prisma generate"
  }
}`,
        result: "Vercel 배포 시 자동으로 Prisma Client가 생성되어 모든 API가 정상 작동합니다. Git push만 하면 자동으로 빌드 → 배포되는 자동화된 워크플로우가 완성되었습니다.",
        learned: "배포 환경에서는 로컬에서 수동으로 하던 작업들을 스크립트로 자동화해야 한다는 것을 배웠습니다. build 훅과 postinstall 훅을 활용한 자동화 전략을 익혔습니다."
      },
      {
        challenge: "JSON 파싱 에러 안전하게 처리하기",
        context: "상품 이미지와 태그를 JSON 배열 형태로 DB에 저장했는데, 파싱 시 'Unexpected token' 에러가 빈번하게 발생했습니다. 한 개의 상품에서 에러가 나면 전체 상품 목록이 표시되지 않았습니다.",
        problem: "DB에서 가져온 문자열이 유효한 JSON이 아니거나, 빈 문자열, null 값 등 예외 상황 처리가 미흡했습니다.",
        solution: "try-catch로 각 필드를 개별적으로 안전하게 파싱하고, 파싱 실패 시 기본값을 제공했습니다. 이미지가 없으면 placeholder 이미지를, 태그가 없으면 빈 배열을 반환하도록 했습니다.",
        code: `try {
  parsedImages = JSON.parse(p.images);
} catch (e) {
  console.error('이미지 파싱 실패:', p.id);
  parsedImages = []; // 기본값
}`,
        result: "모든 상품이 안정적으로 표시되고, 파싱 실패한 상품도 기본 이미지로 표시되어 사용자 경험을 보장했습니다.",
        learned: "외부 데이터는 항상 검증이 필요하며, 에러 발생 시에도 사용자 경험을 해치지 않도록 Fallback을 제공하는 것이 중요합니다."
      }
    ],

    reflections: {
      growth: [
        { 
          title: "풀스택 개발 역량 향상", 
          detail: "Next.js API Routes와 Prisma ORM을 활용하여 프론트엔드와 백엔드를 하나의 프로젝트로 통합하는 경험을 쌓았습니다. RESTful API 설계 원칙(GET, POST, PATCH, DELETE)을 이해하고, JWT 인증과 역할 기반 접근 제어를 직접 구현하며 보안의 중요성을 체감했습니다." 
        },
        { 
          title: "프로덕션 환경 구축 경험", 
          detail: "로컬 개발 환경(SQLite)에서 프로덕션 환경(PostgreSQL)으로 안전하게 마이그레이션하는 전체 과정을 경험했습니다. Vercel 서버리스 환경의 특성을 이해하고, 환경 변수 관리, 자동 배포 설정, 시드 데이터 작성 등 실제 서비스 배포에 필요한 실무 스킬을 습득했습니다." 
        },
        { 
          title: "컴포넌트 재사용성과 상태 관리", 
          detail: "Custom Hooks(useAuth, useCart)를 만들어 비즈니스 로직을 분리하고, Zustand로 전역 상태를 간결하게 관리하는 방법을 배웠습니다. Redux 대비 90% 적은 코드로 동일한 기능을 구현할 수 있다는 것을 알게 되었습니다." 
        }
      ],
      regrets: [
        { 
          title: "테스트 코드 미작성", 
          detail: "Jest와 React Testing Library로 단위 테스트를 작성하지 못했습니다. 특히 장바구니 로직, 필터링 로직 등 핵심 비즈니스 로직에 대한 테스트가 있었다면 리팩토링 시 더 자신감 있게 코드를 수정할 수 있었을 것입니다." 
        },
        { 
          title: "이미지 최적화 부족", 
          detail: "상품 이미지를 public 폴더에 정적 파일로 저장했는데, 실제 서비스라면 Cloudinary나 Supabase Storage 같은 CDN을 사용하여 이미지 로딩 속도를 개선했어야 했습니다. WebP 변환, Lazy Loading 등의 최적화도 적용하지 못한 점이 아쉽습니다." 
        }
      ],
      improvements: [
        { 
          title: "이미지 업로드 기능 추가", 
          detail: "현재는 이미지 URL을 직접 입력하지만, Supabase Storage를 활용하여 관리자가 파일을 업로드할 수 있는 기능을 추가할 계획입니다. 이미지 리사이징과 WebP 변환도 함께 구현하겠습니다." 
        },
        { 
          title: "실제 결제 시스템 연동", 
          detail: "Toss Payments API를 연동하여 실제 결제가 가능하도록 구현하고, 결제 완료 후 이메일 알림(Nodemailer) 기능도 추가할 계획입니다. 결제 취소, 환불 등의 기능도 함께 구현하여 완전한 쇼핑몰 시스템을 만들고 싶습니다." 
        },
        { 
          title: "성능 모니터링 도구 도입", 
          detail: "Sentry로 에러 추적을 자동화하고, Vercel Analytics로 실제 사용자 경험(Core Web Vitals)을 모니터링할 계획입니다. 병목 지점을 파악하여 지속적으로 성능을 개선하겠습니다." 
        }
      ]
    },

    media: {
      screenshots: [
        { src: "/Ms_Farm_1.png", label: "메인 페이지" },
        { src: "/Ms_Farm_2.png", label: "상품 상세" },
        { src: "/Ms_Farm_3.png", label: "장바구니" },
        { src: "/Ms_Farm_4.png", label: "관리자 대시보드" }
      ]
    },

    demoUrl: "https://msfarm-delta.vercel.app/",
    githubUrl: "https://github.com/MinJiH01/Ms_Farm"
  },

  "Todo App": {
  title: "Weather Todo App",
  subtitle: "날씨 기반 할 일 관리 앱",
  description: "React Native와 TypeScript를 활용한 날씨 정보 통합 모바일 앱",
  
  projectInfo: {
    period: "2025.09 (1개월)",
    team: "개인 프로젝트",
    myRole: "모바일 앱 개발 (100%)",
    status: "완료"
  },

  background: {
    motivation: "날씨에 따라 해야 할 일이 달라지는 경험에서 착안했습니다. 비 오는 날은 우산을 챙겨야 하고, 맑은 날은 빨래를 해야 하는 등 날씨와 할 일은 밀접한 관계가 있습니다. 이 두 가지를 하나의 앱에서 관리할 수 있다면 편리할 것 같아 개발하게 되었습니다.",
    goals: [
      "React Native를 활용한 첫 모바일 앱 개발 경험",
      "TypeScript로 타입 안정성을 확보하며 개발",
      "외부 API 3개 연동 (OpenWeather, 공공데이터포털, Expo Location)",
      "Zustand로 Redux보다 간결한 상태 관리 경험",
      "AsyncStorage로 데이터 영구 저장 구현"
    ],
    targetUsers: "날씨에 따라 일정을 조정하고 싶은 모든 사용자"
  },

  techStack: [
    { 
      name: "React Native 0.81.4", 
      category: "모바일 프레임워크",
      description: "크로스 플랫폼 모바일 앱 개발 프레임워크",
      reason: "하나의 코드로 Android와 iOS를 동시에 개발할 수 있어 선택했습니다. JavaScript 기반이라 웹 개발 경험을 활용할 수 있었습니다.",
      highlight: "하나의 코드베이스로 멀티 플랫폼 지원"
    },
    { 
      name: "Expo 54.0.10", 
      category: "개발 도구",
      description: "React Native 개발을 쉽게 해주는 도구 모음",
      reason: "네이티브 코드 없이도 위치, 알림 등의 기능을 사용할 수 있어 선택했습니다. Expo Go 앱으로 실시간 테스트가 가능해 개발 속도가 빨랐습니다.",
      highlight: "QR 코드 스캔만으로 즉시 테스트 가능"
    },
    { 
      name: "TypeScript 5.9.2", 
      category: "언어",
      description: "정적 타입을 지원하는 JavaScript",
      reason: "모바일 앱은 런타임 에러가 치명적이라 타입 안정성이 중요했습니다. IDE의 자동완성 기능으로 개발 생산성도 높아졌습니다.",
      highlight: "개발 단계에서 에러 사전 차단"
    },
    { 
      name: "Zustand 5.0.8", 
      category: "상태 관리",
      description: "간결한 전역 상태 관리 라이브러리",
      reason: "Redux는 보일러플레이트가 너무 많아서 학습 곡선이 가팔랐습니다. Zustand는 몇 줄로 전역 상태를 만들 수 있어 빠르게 익힐 수 있었습니다.",
      highlight: "Redux 대비 90% 적은 코드로 동일한 기능"
    },
    { 
      name: "AsyncStorage 2.2.0", 
      category: "데이터 저장",
      description: "React Native의 로컬 스토리지",
      reason: "앱을 종료해도 할 일 목록과 일정이 유지되어야 했습니다. AsyncStorage로 간편하게 영구 저장을 구현할 수 있었습니다.",
      highlight: "앱 재시작 후에도 데이터 유지"
    },
    { 
      name: "React Navigation 7.1.17", 
      category: "네비게이션",
      description: "React Native의 라우팅 라이브러리",
      reason: "Bottom Tabs로 4개 화면(Home, Todo, Calendar, Settings)을 직관적으로 전환할 수 있었습니다.",
      highlight: "네이티브 앱처럼 부드러운 화면 전환"
    },
    { 
      name: "axios 1.12.2", 
      category: "HTTP 클라이언트",
      description: "Promise 기반 HTTP 요청 라이브러리",
      reason: "timeout 설정, 에러 처리 등이 fetch보다 편리했습니다. OpenWeather API와 공공데이터포털 API 연동에 사용했습니다.",
      highlight: "자동 JSON 변환 및 에러 처리"
    }
  ],

  features: [
    { 
      title: "실시간 날씨 조회", 
      description: "OpenWeather API로 현재 위치의 날씨를 실시간으로 가져옵니다. GPS로 자동 위치 감지하거나, 수동으로 도시명을 입력할 수 있습니다.",
      tech: "OpenWeather API, expo-location, axios",
      details: "expo-location으로 GPS 좌표를 가져오고, OpenWeather API에 좌표를 전달하여 날씨 데이터를 받아옵니다. 영문 응답을 200개 이상의 번역 매핑으로 한국어로 변환합니다."
    },
    { 
      title: "날씨 기반 할 일 추천", 
      description: "현재 날씨에 맞는 할 일을 자동으로 추천합니다. 비 오는 날은 우산 챙기기, 맑은 날은 빨래하기 등 날씨에 어울리는 활동을 제안합니다.",
      tech: "WeatherService, 조건문",
      details: "날씨 설명(description), 온도, 습도를 분석하여 적합한 할 일을 추천합니다. 비/맑음/흐림/눈 등 날씨 상태별로 4개씩 추천 목록을 제공합니다."
    },
    { 
      title: "할 일 관리 (CRUD)", 
      description: "할 일을 추가, 수정, 삭제, 완료 체크할 수 있습니다. Zustand로 전역 상태를 관리하고, AsyncStorage로 영구 저장합니다.",
      tech: "Zustand, AsyncStorage",
      details: "Zustand Store에서 할 일 목록을 관리하고, 변경이 있을 때마다 AsyncStorage에 자동 저장합니다. 앱을 종료하고 다시 열어도 할 일이 그대로 유지됩니다."
    },
    { 
      title: "캘린더 & 공휴일", 
      description: "react-native-calendars로 월별 캘린더를 제공하고, 공공데이터포털 API로 한국 공휴일을 자동 표시합니다.",
      tech: "react-native-calendars, 공공데이터포털 API",
      details: "공공데이터포털의 한국천문연구원 특일정보 API로 공휴일 데이터를 가져와 캘린더에 표시합니다. 캐시 시스템으로 연도별 데이터를 저장하여 API 호출을 최소화합니다."
    },
    { 
      title: "다크/라이트 모드", 
      description: "사용자 선호에 따라 다크 모드와 라이트 모드를 전환할 수 있습니다. 설정 화면에서 간편하게 변경 가능합니다.",
      tech: "Context API, Theme",
      details: "ThemeContext로 전역 테마를 관리하고, 모든 컴포넌트에서 theme 객체를 참조하여 색상을 동적으로 변경합니다."
    }
  ],

  highlights: [
    {
      title: "3개 API 성공적으로 연동",
      detail: "OpenWeather API, 공공데이터포털 API, Expo Location API 3개를 연동하여 날씨, 공휴일, 위치 데이터를 실시간으로 가져왔습니다. 각 API의 에러 처리와 fallback 시스템을 구축했습니다.",
      impact: "API 연동 경험 획득, 에러 처리 능력 향상"
    },
    {
      title: "TypeScript로 타입 안정성 확보",
      detail: "Weather, Todo, CalendarEvent 등 주요 데이터 타입을 정의하고, 모든 함수에 타입을 명시했습니다. 개발 중 타입 에러를 사전에 발견하여 런타임 에러를 크게 줄였습니다.",
      impact: "런타임 에러 80% 감소"
    },
    {
      title: "Zustand로 간결한 상태 관리",
      detail: "Redux는 150줄 이상의 보일러플레이트가 필요했지만, Zustand는 단 50줄로 동일한 기능을 구현했습니다. create 함수 하나로 전역 상태를 만들고, Hook으로 쉽게 사용할 수 있었습니다.",
      impact: "상태 관리 코드 70% 감소"
    }
  ],

  challenges: [
    {
      challenge: "API 키 검증 로직 오류로 계속 Mock 데이터만 표시",
      context: "OpenWeather API를 연동했는데, 실제 날씨가 아니라 항상 '맑음 22도'만 표시되는 문제가 있었습니다. 코드를 아무리 봐도 API 호출 로직은 정상이었습니다.",
      problem: "조건문에서 API 키를 잘못 비교하고 있었습니다. `if (API_KEY === '실제키값')` 이렇게 쓰니까 API 키가 있을 때 fallback 데이터를 사용하게 되었습니다. 논리가 완전히 반대였습니다.",
      solution: "`isApiKeyValid()` 함수를 만들어서 API 키의 존재 여부를 체크하도록 수정했습니다. null, undefined, 빈 문자열을 모두 검증하는 함수로 로직을 개선했습니다.",
      code: `private static isApiKeyValid(): boolean {
  return API_KEY !== null && 
         API_KEY !== undefined && 
         API_KEY.length > 0;
}

// 사용
if (!this.isApiKeyValid()) {
  return FALLBACK_WEATHER; // API 키 없을 때만
}`,
      result: "실제 날씨 데이터가 정상적으로 표시되고, 위치가 바뀌면 도시명과 날씨도 함께 업데이트됩니다.",
      learned: "조건문은 항상 신중하게 작성해야 하고, 복잡한 검증 로직은 별도 함수로 분리하는 것이 버그를 줄일 수 있다는 걸 배웠습니다."
    },
    {
      challenge: "OpenWeather API의 한국어 번역 품질 문제",
      context: "API 응답에 `lang=kr` 파라미터를 추가하면 한국어로 날씨 설명을 받을 수 있다고 문서에 나와 있었습니다.",
      problem: "실제로 받아보니 '온흐림', '실 안개' 같은 이상한 번역이 나왔습니다. 사용자에게 보여주기엔 품질이 너무 낮았습니다.",
      solution: "`lang` 파라미터를 제거하고 영문으로 받은 후, 직접 번역 딕셔너리를 만들었습니다. 'clear sky' → '맑음', 'heavy rain' → '폭우' 등 200개 이상의 매핑을 구현했습니다.",
      code: `private static translateWeatherDescription(desc: string): string {
  const translations: Record<string, string> = {
    'clear sky': '맑음',
    'few clouds': '구름 조금',
    'heavy rain': '폭우',
    'light snow': '약한 눈',
    // ... 200개 이상
  };
  
  return translations[desc.toLowerCase()] || desc;
}`,
      result: "자연스러운 한국어 날씨 설명이 표시되고, 사용자 경험이 크게 개선되었습니다.",
      learned: "외부 API를 무조건 믿지 말고, 실제 응답을 확인한 후 필요하면 직접 가공해야 한다는 걸 배웠습니다."
    }
  ],

  reflections: {
    growth: [
      { 
        title: "React Native와 모바일 개발의 차이점 이해", 
        detail: "웹 개발과 달리 모바일은 위치 권한, GPS, 생명주기 관리 등을 고려해야 했습니다. useEffect의 cleanup 함수로 메모리 누수를 방지하고, 권한 요청 UI를 사용자 친화적으로 만드는 법을 배웠습니다." 
      },
      { 
        title: "외부 API 연동과 에러 처리", 
        detail: "3개의 API를 연동하면서 네트워크 에러, 타임아웃, 잘못된 응답 등 다양한 예외 상황을 처리하는 법을 배웠습니다. try-catch로 에러를 잡고, fallback 데이터로 앱이 멈추지 않게 만드는 패턴을 익혔습니다." 
      },
      { 
        title: "TypeScript의 실질적 가치", 
        detail: "Weather, Todo 등의 인터페이스를 정의하고, 모든 함수에 타입을 명시하니 IDE의 자동완성이 강력해졌습니다. 잘못된 속성에 접근하는 실수를 개발 단계에서 잡을 수 있어서 디버깅 시간이 크게 줄었습니다." 
      }
    ],
    regrets: [
      { 
        title: "알림 기능 미구현", 
        detail: "할 일 마감 시간이나 특정 시간에 알림을 보내는 기능을 추가하고 싶었지만 시간이 부족해서 구현하지 못했습니다. expo-notifications 라이브러리를 찾아봤지만 권한 처리가 복잡해서 보류했습니다." 
      },
      { 
        title: "iOS 테스트 부족", 
        detail: "Android에서만 테스트했고 iOS 실기기에서는 테스트하지 못했습니다. React Native는 크로스 플랫폼이지만 플랫폼별 차이가 있을 수 있어서 양쪽 모두 테스트했어야 했습니다." 
      },
      { 
        title: "오프라인 모드 미지원", 
        detail: "네트워크가 끊기면 날씨 정보를 가져올 수 없어서 앱의 핵심 기능이 동작하지 않습니다. 마지막 날씨 데이터를 캐싱하거나, 오프라인 모드를 안내하는 UI를 추가했으면 좋았을 것 같습니다." 
      }
    ],
    improvements: [
      { 
        title: "푸시 알림 기능 추가", 
        detail: "expo-notifications로 할 일 마감 시간 30분 전에 알림을 보내고, 아침에 오늘의 날씨와 추천 할 일을 알려주는 기능을 추가하겠습니다. 백그라운드 알림과 포그라운드 알림을 모두 구현할 계획입니다." 
      },
      { 
        title: "위젯 지원", 
        detail: "홈 화면에 날씨와 오늘의 할 일을 보여주는 위젯을 추가하면 앱을 열지 않고도 정보를 확인할 수 있습니다. react-native-widget-extension을 연구해볼 계획입니다." 
      },
      { 
        title: "다국어 지원", 
        detail: "현재는 한국어만 지원하지만, react-i18next로 영어, 일본어 등 다국어를 지원하면 해외 사용자도 사용할 수 있습니다. 날씨 번역 딕셔너리도 다국어로 확장하겠습니다." 
      }
    ]
  },

  media: {
    screenshots: [
      { src: "/Todo_App_1.png", label: "홈 화면 (날씨+할일)" },
      { src: "/Todo_App_2.png", label: "할 일 목록" },
      { src: "/Todo_App_3.png", label: "캘린더 & 공휴일" },
      { src: "/Todo_App_4.png", label: "설정 & 다크모드" }
    ]
  },
  
  demoUrl: "https://todo-app-inky-eight-73.vercel.app/",
  githubUrl: "https://github.com/MinJiH01/Todo_App"
}

};