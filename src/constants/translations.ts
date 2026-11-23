export interface Translations {
  nav: {
    home: string;
    projects: string;
    caseStudies: string;
    stack: string;
    certificates: string;
    contact: string;
    github: string;
    linkedin: string;
    switchLang: string;
    langShort: string;
  };
  hero: {
    statusAvailable: string;
    name: string;
    taglinePrefix: string;
    taglineHighlight: string;
    bio: string;
    letsTalk: string;
    github: string;
    email: string;
    roleSubtitle: string;
    lastUpdate: string;
  };
  about: {
    title: string;
    bio: string;
    downloadCV: string;
  };
  timeline: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    s1Num: string;
    s1Title: string;
    s1Desc: string;
    s2Num: string;
    s2Title: string;
    s2Desc: string;
    s3Num: string;
    s3Title: string;
    s3Desc: string;
  };
  projects: {
    badge: string;
    title: string;
    viewProject: string;
    viewAllProjects: string;
    backToPortfolio: string;
    exploreCode: string;
    liveDemo: string;
    overview: string;
    features: string;
    technologies: string;
  };
  caseStudies: {
    badge: string;
    title: string;
    exploreDesign: string;
    roleMethodology: string;
    roleMethodologyValue: string;
    targetSector: string;
    targetInstitution: string;
    overview: string;
    designSystem: string;
    screens: string;
    backToCaseStudies: string;
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
  };
  certificates: {
    badge: string;
    title: string;
    verify: string;
  };
  contact: {
    badge: string;
    headline: string;
    description: string;
    letsTalk: string;
    email: string;
  };
  footer: {
    role: string;
    stack: string;
    rights: string;
  };
  floatingBubble: {
    about: string;
    projects: string;
    caseStudies: string;
    contact: string;
  };
}

export const translations: Record<"en" | "ar", Translations> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      caseStudies: "UI/UX Design",
      stack: "Tech Stack",
      certificates: "Certificates",
      contact: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      switchLang: "العربية",
      langShort: "AR",
    },
    hero: {
      statusAvailable: "Open to Freelance Projects",
      name: "Ahmed Loucif",
      taglinePrefix: "Crafting Digital Experiences & ",
      taglineHighlight: "Building Modern Solutions.",
      bio: "I'm a Software Engineering Student, Web Developer, and UI/UX Designer passionate about creating modern, functional, and user-centered digital experiences.",
      letsTalk: "Let's Talk",
      github: "GitHub",
      email: "Email",
      roleSubtitle: "Software Engineering Student | Web Developer | UI/UX Designer",
      lastUpdate: "Last update: November 2026",
    },
    about: {
      title: "A Little About Me",
      bio: "I'm a Software Engineering student with a passion for web development and UI/UX design. I enjoy solving problems, exploring new technologies, and transforming complex ideas into simple, intuitive, and functional digital products. My approach combines creative thinking with technical skills to build experiences that are both visually appealing and technically reliable.",
      downloadCV: "Download CV",
    },
    timeline: {
      title: "Developer & Designer",
      subtitle: "A continuous path of engineering scalable software, crafting user-centered interfaces, and building hackathon MVPs.",
    },
    services: {
      title: "Services",
      s1Num: "01",
      s1Title: "UI/UX Design",
      s1Desc: "Creating intuitive, visually engaging interfaces that deliver seamless and meaningful user experiences.",
      s2Num: "02",
      s2Title: "Web Development",
      s2Desc: "Building modern, responsive, and high-performance websites and web applications tailored to your needs.",
      s3Num: "03",
      s3Title: "Digital Solutions",
      s3Desc: "Turning business ideas into tailored digital solutions that solve real problems and drive growth.",
    },
    projects: {
      badge: "Projects",
      title: "Featured Projects",
      viewProject: "View Project",
      viewAllProjects: "View All Projects",
      backToPortfolio: "Back to Portfolio",
      exploreCode: "Code",
      liveDemo: "Live Demo",
      overview: "Overview",
      features: "Key Features",
      technologies: "Technologies Used",
    },
    caseStudies: {
      badge: "Design",
      title: "UI/UX Design Projects",
      exploreDesign: "Explore Design",
      roleMethodology: "• Role & Methodology",
      roleMethodologyValue: "Auto Layout & Tokens",
      targetSector: "Target Sector",
      targetInstitution: "Target Institution",
      overview: "Design Overview",
      designSystem: "Design System",
      screens: "High-Fidelity Screens",
      backToCaseStudies: "Back to Designs",
    },
    techStack: {
      badge: "Skills",
      title: "Tech Stack",
      subtitle: "Tools, technologies, and frameworks I use to bring ideas to life.",
    },
    certificates: {
      badge: "Credentials",
      title: "Certificates",
      verify: "Verify Credential",
    },
    contact: {
      badge: "Get in touch",
      headline: "Let's Build Something Together.",
      description: "Have an idea, a project, or a challenge to solve? Let's connect and turn your vision into a meaningful digital experience with smart solutions and creative design.",
      letsTalk: "Let's Talk",
      email: "Email",
    },
    footer: {
      role: "Full-Stack Engineer & Product Builder",
      stack: "React · Django · Figma · PostgreSQL",
      rights: "© 2026 All rights reserved.",
    },
    floatingBubble: {
      about: "About",
      projects: "Projects",
      caseStudies: "UI/UX Design",
      contact: "Contact",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      caseStudies: "تصميم الواجهات",
      stack: "التقنيات",
      certificates: "الشهادات",
      contact: "تواصل معي",
      github: "جيت هاب",
      linkedin: "لينكد إن",
      switchLang: "English",
      langShort: "EN",
    },
    hero: {
      statusAvailable: "متاح لمشاريع العمل الحر",
      name: "أحمد لوصيف",
      taglinePrefix: "صناعة تجارب رقمية و",
      taglineHighlight: "بناء حلول برمجية حديثة.",
      bio: "مهندس برمجيات، مطور ويب، ومصمم واجهات وتجربة مستخدم (UI/UX). شغوف بابتكار تجارب رقمية عصرية وفعالة ترتكز على راحة المستخدم وبناء حلول متكاملة تترك أثراً حقيقياً.",
      letsTalk: "لنبدأ الحديث",
      github: "جيت هاب",
      email: "البريد الإلكتروني",
      roleSubtitle: "طالب هندسة برمجيات | مطور ويب | مصمم واجهات وتجربة مستخدم",
      lastUpdate: "آخر تحديث: نوفمبر 2026",
    },
    about: {
      title: "نبذة عني",
      bio: "أنا طالب هندسة برمجيات وشغوف بتطوير الويب وتصميم واجهات وتجربة المستخدم. أستمتع بحل المشكلات واستكشاف التقنيات الحديثة وتحويل الأفكار المعقدة إلى منتجات رقمية بسيطة، بديهية وفعالة. يجمع أسلوبي بين التفكير الإبداعي والمهارات التقنية لبناء تجارب جذابة بصرياً وقوية برمجياً.",
      downloadCV: "تحميل السيرة الذاتية",
    },
    timeline: {
      title: "مطور ومصمم واجهات",
      subtitle: "مسيرة متواصلة في هندسة برمجيات قابلة للتوسع، وتصميم واجهات محورها المستخدم، وبناء مشاريع هاكاثون عملية.",
    },
    services: {
      title: "الخدمات",
      s1Num: "01",
      s1Title: "تصميم واجهات وتجربة المستخدم",
      s1Desc: "ابتكار واجهات سهلة الاستخدام وجذابة بصرياً تقدم تجارب رقمية سلسة واستثنائية للمستخدم.",
      s2Num: "02",
      s2Title: "تطوير تطبيقات الويب",
      s2Desc: "بناء مواقع وتطبيقات ويب حديثة، متجاوبة وسريعة ومصممة بأعلى معايير الأداء لتلائم احتياجاتك.",
      s3Num: "03",
      s3Title: "الحلول الرقمية المتكاملة",
      s3Desc: "تحويل الأفكار إلى حلول رقمية مخصصة تعالج التحديات الحقيقية وتدعم نمو الأعمال ونجاحها.",
    },
    projects: {
      badge: "المشاريع",
      title: "أبرز المشاريع البرمجية",
      viewProject: "عرض تفاصيل المشروع",
      viewAllProjects: "عرض جميع المشاريع",
      backToPortfolio: "العودة للرئيسية",
      exploreCode: "الكود المصدري",
      liveDemo: "معاينة حية",
      overview: "نظرة عامة",
      features: "المميزات الرئيسية",
      technologies: "التقنيات المستخدمة",
    },
    caseStudies: {
      badge: "التصميم",
      title: "مشاريع تصميم الواجهات (UI/UX)",
      exploreDesign: "استكشف التصميم",
      roleMethodology: "• الدور والمنهجية",
      roleMethodologyValue: "أوتو لايوت ورموز التصميم",
      targetSector: "القطاع المستهدف",
      targetInstitution: "المؤسسة المستهدفة",
      overview: "دراسات تصميم وتجربة مستخدم متعمقة تشمل نماذج تفاعلية، معمارية UX، وأنظمة تصميم متجاوبة.",
      designSystem: "نظام التصميم",
      screens: "واجهات التصميم عالية الدقة",
      backToCaseStudies: "العودة للتصاميم",
    },
    techStack: {
      badge: "المهارات",
      title: "المكدس والمهارات التقنية",
      subtitle: "الأدوات والتقنيات وأطر العمل التي أعتمد عليها لتحويل الأفكار إلى واقع رقمي ملموس.",
    },
    certificates: {
      badge: "الاعتمادات",
      title: "الشهادات والإنجازات",
      verify: "التحقق من الشهادة",
    },
    contact: {
      badge: "تواصل معي",
      headline: "لنبتكر شيئاً استثنائياً معاً.",
      description: "هل لديك فكرة، مشروع، أو تحدٍ برمجي ترغب في حله؟ يسعدني التواصل معك لتحويل رؤيتك إلى تجربة رقمية ناجحة بحلول ذكية وتصميم إبداعي.",
      letsTalk: "لنبدأ الحديث",
      email: "البريد الإلكتروني",
    },
    footer: {
      role: "مهندس برمجيات متكامل ومطور منتجات رقمية",
      stack: "React · Django · Figma · PostgreSQL",
      rights: "© 2026 جميع الحقوق محفوظة.",
    },
    floatingBubble: {
      about: "نبذة عني",
      projects: "المشاريع",
      caseStudies: "تصميم الواجهات",
      contact: "تواصل معي",
    },
  },
};
