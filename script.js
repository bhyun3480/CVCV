// js/data.js

const cvData = {
  // --- 1. 개인 정보 (Profile) ---
  profile: {
    name: {
      kor: "홍길동",
      eng: "Gildong Hong"
    },
    tagline: {
      kor: "혁신적인 솔루션을 만드는 소프트웨어 엔지니어",
      eng: "Software Engineer Building Innovative Solutions"
    },
    photoUrl: "assets/images/profile.png"
  },
  // --- 2. 연락처 및 링크 (Contact & Links) ---
  contact: {
    email: "gildong.hong@example.com",
    phone: "010-1234-5678",
    location: {
      kor: "대한민국 서울",
      eng: "Seoul, South Korea"
    }
  },
  externalLinks: {
    github: "https://github.com/gildong-hong",
    linkedin: "https://linkedin.com/in/gildong-hong",
    blog: "https://gildong.dev"
  },
  // --- 3. 핵심 역량 (Keywords & Summary) ---
  keywords: {
    kor: ["대규모 트래픽 처리", "MSA 설계", "DevOps", "애자일", "클린 아키텍처"],
    eng: ["Large-Scale Traffic", "MSA Design", "DevOps", "Agile", "Clean Architecture"]
  },
  summary: {
    kor: "AWS 공인 솔루션스 아키텍트 - 어소시에이트 (SAA)",
    eng: "AWS Certified Solutions Architect – Associate (SAA)"
  },
  // --- 4. 자기소개 (Introduction) ---
  introduction: {
    introduction: {
      kor: "1000자 미만의 자기소개 텍스트입니다. 저는 사용자에게 최고의 경험을 제공하는 것에 가치를 두는 개발자입니다. 분산 시스템 환경에서의 서비스 개발과 운영 경험을 통해 얻은 지식으로 안정적이고 확장 가능한 소프트웨어를 만드는 데 기여하고 싶습니다...",
      eng: "A self-introduction text under 1000 characters. I am a developer who values providing the best user experience. With my knowledge gained from developing and operating services in a distributed system environment, I want to contribute to creating stable and scalable software..."
    },
    objective: {
      kor: "2000자 미만의 목표 서술 텍스트입니다. 저의 단기적인 목표는 현재의 기술 스택에 대한 깊이를 더하는 것입니다. 특히, Kubernetes 기반의 오케스트레이션 환경을 심도 있게 이해하고, 이를 통해 프로덕션 환경의 안정성을 한 단계 높이는 것입니다. 장기적으로는...",
      eng: "A statement of objectives under 2000 characters. My short-term goal is to deepen my expertise in the current tech stack. Specifically, I aim to gain a profound understanding of Kubernetes-based orchestration environments to enhance production stability. In the long term..."
    }
  },
  // --- 5. 학력 (Education) ---
  education: [
    {
      degree: { kor: "소프트웨어공학 석사", eng: "M.S. in Software Engineering" },
      institution: { kor: "한국대학교 대학원", eng: "Hanguk University Graduate School" },
      period: "2018.03 - 2020.02",
      description: {
        kor: "논문: 대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구",
        eng: "Thesis: A Study on Efficient Data Processing Techniques in Large-Scale Distributed Systems"
      }
    },
    {
      degree: { kor: "컴퓨터공학 학사", eng: "B.S. in Computer Science" },
      institution: { kor: "한국대학교", eng: "Hanguk University" },
      period: "2012.03 - 2018.02",
      description: {
        kor: "전공 평점: 4.1/4.5 (우수 졸업)",
        eng: "GPA: 4.1/4.5 (Graduated with Honors)"
      }
    }
  ],
  // --- 6. 경력 (Experience) ---
  experience: [
    {
      position: { kor: "시니어 소프트웨어 엔지니어", eng: "Senior Software Engineer" },
      company: { kor: "네카라 주식회사", eng: "Nekara Corp." },
      period: "2022.01 - 현재",
      tasks: [
        { kor: "주문 처리 마이크로서비스(MSA) 설계 및 개발", eng: "Designed and developed order processing microservices (MSA)." },
        { kor: "Kafka를 이용한 비동기 메시지 큐 시스템 구축 및 운영", eng: "Built and operated an asynchronous message queue system using Kafka." },
        { kor: "CI/CD 파이프라인 자동화를 통한 배포 주기 50% 단축", eng: "Reduced deployment cycles by 50% through CI/CD pipeline automation." }
      ]
    },
    {
      position: { kor: "소프트웨어 엔지니어", eng: "Software Engineer" },
      company: { kor: "쿠배당 컴퍼니", eng: "Kubaedang Company" },
      period: "2020.03 - 2021.12",
      tasks: [
        { kor: "레거시 모놀리식 애플리케이션을 MSA로 전환하는 프로젝트 참여", eng: "Participated in a project to convert a legacy monolithic application to MSA." },
        { kor: "사내 인증/인가 시스템 개발", eng: "Developed an in-house authentication/authorization system." }
      ]
    },
    {
      position: { kor: "백엔드 개발 인턴", eng: "Backend Developer Intern" },
      company: { kor: "토스뱅크", eng: "Toss Bank" },
      period: "2019.07 - 2019.08",
      tasks: [
        { kor: "금융 상품 추천 API 개발 지원", eng: "Assisted in developing a financial product recommendation API." },
        { kor: "단위 테스트 및 통합 테스트 코드 작성", eng: "Wrote unit and integration test codes." }
      ]
    }
  ],
  // --- 7. 프로젝트 (Projects) ---
  projects: Array.from({ length: 8 }).map((_, i) => ({
    id: `proj-${i + 1}`,
    title: { kor: `개인화 추천 시스템 ${i + 1}`, eng: `Personalized Recommendation System ${i + 1}` },
    description: {
      kor: `사용자 행동 데이터를 기반으로 상품을 추천하는 시스템입니다. 머신러닝 모델을 서빙하기 위한 API를 개발하고, 대용량 트래픽을 처리하기 위한 인프라를 구축했습니다.`,
      eng: `A system that recommends products based on user behavior data. Developed an API to serve a machine learning model and built infrastructure to handle large-scale traffic.`
    },
    thumbnail: `assets/images/project_${i + 1}.png`,
    techStack: ["Python", "FastAPI", "Redis", "Docker", "Kubernetes"],
    period: "2023.01 - 2023.06",
    links: {
      github: "#",
      demo: "#"
    }
  })),
  // --- 8. 기술 (Skills) ---
  skills: [
    {
      category: { kor: "프로그래밍 언어", eng: "Programming Languages" },
      items: [
        { name: "Java", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript / TypeScript", level: 75 }
      ]
    },
    {
      category: { kor: "프레임워크 & 라이브러리", eng: "Frameworks & Libraries" },
      items: [
        { name: "Spring Boot / WebFlux", level: 90 },
        { name: "JPA / Hibernate", level: 85 },
        { name: "QueryDSL", level: 80 },
        { name: "React", level: 60 }
      ]
    },
    {
      category: { kor: "데이터베이스 & 인프라", eng: "Databases & Infra" },
      items: [
        { name: "MySQL / Aurora", level: 85 },
        { name: "Redis", level: 90 },
        { name: "Kafka", level: 80 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "AWS (EC2, S3, RDS, etc.)", level: 80 }
      ]
    }
  ],
  // --- 9. 연구 (Research) ---
  research: [
    {
      title: { kor: "대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "A Study on Efficient Data Processing Techniques in Large-Scale Distributed Systems" },
      publication: { kor: "한국 소프트웨어공학 학회 (KSEC)", eng: "Korea Software Engineering Conference (KSEC)" },
      date: "2020.02",
      link: "http://sol-link.com/paper1"
    }
  ],
  // --- 10. 수상 및 자격증 (Awards & Certifications) ---
  awards: [
    {
      title: { kor: "AWS Certified Solutions Architect – Associate", eng: "AWS Certified Solutions Architect – Associate" },
      issuer: "Amazon Web Services",
      date: "2022.08"
    },
    {
      title: { kor: "정보처리기사", eng: "Engineer Information Processing" },
      issuer: { kor: "한국산업인력공단", eng: "HRD Korea" },
      date: "2018.05"
    }
  ]
};
