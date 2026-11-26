export interface Translations {
  loading: {
    line1: string;
    line2: string;
  };
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
  };
  hero: {
    statusAvailable: string;
    name: string;
    taglinePrefix: string;
    taglineHighlight: string;
    letsTalk: string;
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
    viewAllProjects: string;
  };
  caseStudies: {
    title: string;
    exploreDesign: string;
    roleMethodology: string;
    roleMethodologyValue: string;
    overview: string;
  };
  techStack: {
    title: string;
    subtitle: string;
  };
  certificates: {
    title: string;
  };
  contact: {
    headline: string;
    description: string;
    letsTalk: string;
    email: string;
  };
  footer: {
    role: string;
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
    loading: {
      line1: "hi, i'm ahmed",
      line2: "explore my work!",
    },
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
    },
    hero: {
      statusAvailable: "Open to Freelance Projects",
      name: "Ahmed Loucif",
      taglinePrefix: "Crafting Digital Experiences & ",
      taglineHighlight: "Building Modern Solutions.",
      letsTalk: "Let's Talk",
      roleSubtitle: "Software Engineering Student | Web Developer | UI/UX Designer",
      lastUpdate: "Last update: November 2026",
    },
    about: {
      title: "A Little About Me",
      bio: "I'm a Software Engineering student passionate about delivering digital solutions that combine creative design with technical development. From crafting intuitive UI/UX experiences to building modern, responsive websites, I focus on performance, quality, and creating solutions that meet clients' needs.",
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
      viewAllProjects: "View All Projects",
    },
    caseStudies: {
      title: "UI/UX Design Projects",
      exploreDesign: "Explore Design",
      roleMethodology: "• Role & Methodology",
      roleMethodologyValue: "Auto Layout & Tokens",
      overview: "Design Overview",
    },
    techStack: {
      title: "Tech Stack",
      subtitle: "Tools, technologies, and frameworks I use to bring ideas to life.",
    },
    certificates: {
      title: "Certificates",
    },
    contact: {
      headline: "Let's Build Something Together.",
      description: "Have an idea, a project, or a challenge to solve? Let's connect and turn your vision into a meaningful digital experience with smart solutions and creative design.",
      letsTalk: "Let's Talk",
      email: "Email",
    },
    footer: {
      role: "Full-Stack Engineer & Product Builder",
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
    loading: {
      line1: "أهلاً، أنا أحمد",
      line2: "استكشف أعمالي!",
    },
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
    },
    hero: {
      statusAvailable: "متاح لمشاريع العمل الحر",
      name: "أحمد لوصيف",
      taglinePrefix: "صناعة تجارب رقمية و",
      taglineHighlight: "بناء حلول برمجية حديثة.",
      letsTalk: "لنبدأ الحديث",
      roleSubtitle: "طالب هندسة برمجيات | مطور ويب | مصمم واجهات وتجربة مستخدم",
      lastUpdate: "آخر تحديث: نوفمبر 2026",
    },
    about: {
      title: "نبذة عني",
      bio: "أنا طالب هندسة برمجيات أقدم حلولاً رقمية تجمع بين التصميم الإبداعي والتطوير التقني، بدءاً من تصميم واجهات المستخدم وتجربة الاستخدام، وصولاً إلى تطوير مواقع ويب عصرية ومتجاوبة، مع التركيز على الأداء والجودة وتلبية احتياجات العملاء.",
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
      viewAllProjects: "عرض جميع المشاريع",
    },
    caseStudies: {
      title: "مشاريع تصميم الواجهات (UI/UX)",
      exploreDesign: "استكشف التصميم",
      roleMethodology: "• الدور والمنهجية",
      roleMethodologyValue: "أوتو لايوت ورموز التصميم",
      overview: "دراسات تصميم وتجربة مستخدم متعمقة تشمل نماذج تفاعلية، معمارية UX، وأنظمة تصميم متجاوبة.",
    },
    techStack: {
      title: "المكدس والمهارات التقنية",
      subtitle: "الأدوات والتقنيات وأطر العمل التي أعتمد عليها لتحويل الأفكار إلى واقع رقمي ملموس.",
    },
    certificates: {
      title: "الشهادات والإنجازات",
    },
    contact: {
      headline: "لنبتكر شيئاً استثنائياً معاً.",
      description: "هل لديك فكرة، مشروع، أو تحدٍ برمجي ترغب في حله؟ يسعدني التواصل معك لتحويل رؤيتك إلى تجربة رقمية ناجحة بحلول ذكية وتصميم إبداعي.",
      letsTalk: "لنبدأ الحديث",
      email: "البريد الإلكتروني",
    },
    footer: {
      role: "مهندس برمجيات متكامل ومطور منتجات رقمية",
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
