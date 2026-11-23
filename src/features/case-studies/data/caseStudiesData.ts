import tabibMockup from "../../../assets/case-studies/mockups/al-tabib-transparent.webp";
import tabibFramed from "../../../assets/case-studies/mockups/al-tabib-framed.webp";
import rokhsaMockup from "../../../assets/case-studies/mockups/rokhsa-transparent.webp";
import rokhsaFramed from "../../../assets/case-studies/mockups/rokhsa-framed.webp";
import hafezMockup from "../../../assets/case-studies/mockups/7afez-transparent.webp";
import hafezFramed from "../../../assets/case-studies/mockups/7afez-framed.webp";
import hafezLaptopLeft from "../../../assets/case-studies/mockups/7afez-laptop-left.webp";
import hafezLaptopRight from "../../../assets/case-studies/mockups/7afez-laptop-right.webp";
import hafezScreen01 from "../../../assets/case-studies/7afez/7afez-web-01.webp";
import hafezScreen02 from "../../../assets/case-studies/7afez/7afez-web-02.webp";
import hafezLogoHero from "../../../assets/case-studies/hafez-logo/hafez-logo-hero.webp";
import hafezLogoIdentity from "../../../assets/case-studies/hafez-logo/hafez-logo-identity.webp";
import hafezLogoColors from "../../../assets/case-studies/hafez-logo/hafez-logo-colors.webp";
// Al-Tabib Al-Hafiz Screens (WebP)
import tabibScreen01 from "../../../assets/case-studies/al-tabib/iPhone 17 - 1.webp";
import tabibScreen02 from "../../../assets/case-studies/al-tabib/iPhone 17 - 2.webp";
import tabibScreen03 from "../../../assets/case-studies/al-tabib/iPhone 17 - 3.webp";
import tabibScreen04 from "../../../assets/case-studies/al-tabib/iPhone 17 - 1099.webp";
import tabibScreen05 from "../../../assets/case-studies/al-tabib/iPhone 17 - 106.webp";
import tabibScreen06 from "../../../assets/case-studies/al-tabib/iPhone 17 - 17.webp";
import tabibScreen07 from "../../../assets/case-studies/al-tabib/iPhone 17 - 18.webp";
import tabibScreen08 from "../../../assets/case-studies/al-tabib/iPhone 17 - 20.webp";
import tabibScreen09 from "../../../assets/case-studies/al-tabib/iPhone 17 - 21.webp";
import tabibScreen10 from "../../../assets/case-studies/al-tabib/iPhone 17 - 28.webp";
import tabibScreen11 from "../../../assets/case-studies/al-tabib/iPhone 17 - 40.webp";
import tabibScreen12 from "../../../assets/case-studies/al-tabib/iPhone 17 - 46.webp";
import tabibScreen13 from "../../../assets/case-studies/al-tabib/iPhone 17 - 49.webp";
import tabibScreen14 from "../../../assets/case-studies/al-tabib/iPhone 17 - 50.webp";
import tabibScreen15 from "../../../assets/case-studies/al-tabib/iPhone 17 - 85.webp";
import tabibScreen16 from "../../../assets/case-studies/al-tabib/iPhone 17 - 86.webp";
import tabibScreen17 from "../../../assets/case-studies/al-tabib/iPhone 17 - 88.webp";
import tabibScreen18 from "../../../assets/case-studies/al-tabib/iPhone 17 - 91.webp";
import tabibScreen19 from "../../../assets/case-studies/al-tabib/iPhone 17 - 96.webp";

// Rokhsa Screens (WebP)
import rokhsaScreen02 from "../../../assets/case-studies/rokhsa/iPhone 17 - 3.webp";
import rokhsaScreen03 from "../../../assets/case-studies/rokhsa/iPhone 17 - 2.webp";
import rokhsaScreen04 from "../../../assets/case-studies/rokhsa/iPhone 17 - 4.webp";
import rokhsaScreen05 from "../../../assets/case-studies/rokhsa/iPhone 17 - 20.webp";
import rokhsaScreen06 from "../../../assets/case-studies/rokhsa/iPhone 17 - 15.webp";
import rokhsaScreen07 from "../../../assets/case-studies/rokhsa/iPhone 17 - 16.webp";
import rokhsaScreen08 from "../../../assets/case-studies/rokhsa/iPhone 17 - 18.webp";
import rokhsaScreen09 from "../../../assets/case-studies/rokhsa/iPhone 17 - 19.webp";
import rokhsaScreen10 from "../../../assets/case-studies/rokhsa/iPhone 17 - 23.webp";
import rokhsaScreen11 from "../../../assets/case-studies/rokhsa/iPhone 17 - 25.webp";
import rokhsaScreen12 from "../../../assets/case-studies/rokhsa/iPhone 17 - 6.webp";
import rokhsaScreen13 from "../../../assets/case-studies/rokhsa/iPhone 17 - 7.webp";
import rokhsaScreen14 from "../../../assets/case-studies/rokhsa/iPhone 17 - 40.webp";
import rokhsaScreen15 from "../../../assets/case-studies/rokhsa/iPhone 17 - 46.webp";
import rokhsaScreen16 from "../../../assets/case-studies/rokhsa/iPhone 17 - 44.webp";
import rokhsaScreen17 from "../../../assets/case-studies/rokhsa/iPhone 17 - 43.webp";
import tabibPhoneLeft from "../../../assets/case-studies/mockups/phones/tabib-left.webp";
import tabibPhoneCenter from "../../../assets/case-studies/mockups/phones/tabib-center.webp";
import tabibPhoneRight from "../../../assets/case-studies/mockups/phones/tabib-right.webp";
import rokhsaPhoneLeft from "../../../assets/case-studies/mockups/phones/rokhsa-left.webp";
import rokhsaPhoneCenter from "../../../assets/case-studies/mockups/phones/rokhsa-center.webp";
import rokhsaPhoneRight from "../../../assets/case-studies/mockups/phones/rokhsa-right.webp";
import {
  FigmaIcon,
  ReactIcon,
  TypescriptIcon,
  TaillwindIcon,
} from "../../../constants/Icon";
import type { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "al-tabib-al-hafiz",
    title: "Al-Tabib Al-Hafiz",
    arabicTitle: "الطبيب الحافظ",
    subtitle: "Quran Memorization & Study Platform for Medical Students",
    shortDescription:
      "A digital platform designed to help medical students organize and manage their Quran memorization journey.",
    projectType: "Mobile Application Concept",
    platformType: "app",
    role: "UI/UX Designer",
    designResponsibilities: [
      "User Interface Design",
      "User Experience Design",
      "Design System",
      "Auto Layout",
      "Components & Variants",
      "Variables",
      "Interactive Prototyping",
    ],
    mainDesignFocus:
      "Empathetic mobile experience, clear daily revision schedules, and cognitive-load reduction for intensive medical studies.",
    platform: "Mobile App (iOS & Android)",
    timeline: "2026",
    organization: "Faculty of Medicine — Constantine (كلية الطب - قسنطينة)",
    heroImage: tabibMockup,
    mockupImage: tabibMockup,
    framedMockupImage: tabibFramed,
    phoneMockups: {
      left: tabibPhoneLeft,
      center: tabibPhoneCenter,
      right: tabibPhoneRight,
    },
    galleryMockups: [
      {
        title: "Transparent Isometric Perspective",
        image: tabibMockup,
        caption: "Hi-Fi Mobile Mockup in Figma",
      },
      {
        title: "Framed Presentation Showcase",
        image: tabibFramed,
        caption: "Framed Device Portfolio Presentation",
      },
      {
        title: "7afez Web Platform Showcase",
        image: hafezMockup,
        caption: "Hi-Fi MacBook Pro Web Mockup in Figma (Node 595:449)",
      },
    ],
    presentationHeading: "Mobile Presentation",
    tools: [{ label: "Figma", icon: FigmaIcon }],
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=585-24",

    // 01 — Overview
    overview: {
      summary:
        "Al-Tabib Al-Hafiz (الطبيب الحافظ) is a specialized educational and spiritual platform designed specifically for medical students at the University of Constantine. The interface bridges the gap between rigorous medical training and consistent Quran memorization, providing students with structured daily revision planners, direct virtual study circle access, and distraction-free progress metrics.",
      objectives: [
        "Design a calm, empathetic interface that reduces cognitive fatigue for medical students.",
        "Streamline the entry process into virtual study circles with persistent one-tap access.",
        "Provide clear, granular progress tracking across Ahzab (أحزاب), Athman (أثمان), and attendance.",
        "Build a scalable Figma design system with reusable components, auto layout, and responsive tokens.",
      ],
    },

    // 02 — Problems (Short, Clear Bullet Points)
    problemsList: [
      {
        title: "Cognitive Fatigue & Time Fragmentation",
        description:
          "Intensive clinical hospital shifts and demanding coursework leave medical students with zero mental bandwidth to navigate complicated, multi-step menus.",
      },
      {
        title: "Disorganized Study Circle Access",
        description:
          "Virtual recitation circles (حلقات) rely on scattered chat groups, causing students to frequently lose meeting links and miss live sessions.",
      },
      {
        title: "Lack of Granular Revision Tracking",
        description:
          "Traditional paper notes fail to distinguish newly memorized verses (حفظ) from active recurring revision (مراجعة), risking memory retention loss.",
      },
      {
        title: "Visual Noise in Generic Applications",
        description:
          "Commercial apps are overloaded with advertisements and intrusive notifications that create friction rather than spiritual serenity.",
      },
    ],

    // 03 — User Needs (UML Use Case Diagram)
    useCaseDiagram: {
      systemName: "Al-Tabib Al-Hafiz Mobile Platform",
      actors: [
        {
          id: "student",
          name: "Medical Student",
          arabicName: "طالب الطب",
          role: "Learner & Reciter",
          useCases: [
            "Join Virtual Recitation Circle (1-Click)",
            "Track Memorization & Revision (Ahzab)",
            "Review Attendance & Absence Records",
            "Consult Daily Revision Schedule",
          ],
        },
        {
          id: "instructor",
          name: "Sheikh / Instructor",
          arabicName: "الشيخ المشرف",
          role: "Study Circle Lead",
          useCases: [
            "Host Live Recitation Halaqa",
            "Evaluate Student Recitations & Score",
            "Record & Justify Attendance Logs",
          ],
        },
      ],
    },

    // 05 — Tools Used
    toolsUsed: [
      {
        name: "Figma",
        category: "UI/UX Interface Design",
        description: "Engineered high-fidelity responsive screens, atomic components, and dark surface tokens.",
      },
      {
        name: "Auto Layout 5.0",
        category: "Spatial Grid Architecture",
        description: "8-point spacing system ensuring fluid adaptation across diverse mobile viewports.",
      },
      {
        name: "Design System Tokens",
        category: "Variables & Color Palette",
        description: "Constructed soothing medical teal, dark slate (#161513), and Arabic typography tokens.",
      },
      {
        name: "Interactive Prototyping",
        category: "Interaction & Motion Design",
        description: "Smart animations, ease-out screen linkages, and realistic 1-tap room launch flows.",
      },
    ],

    // 02 — The Problem
    problem: {
      statement:
        "Medical students face demanding academic workloads that make it difficult to balance coursework with consistent Quran memorization and progress tracking.",
      context:
        "Medical education requires intense focus, continuous clinical rotations, and heavy exam schedules. When students attempt to pursue Quran memorization alongside this demanding academic load, existing generic apps fail to respect their unique time constraints, resulting in irregular revision, forgotten virtual sessions, and cognitive fatigue.",
      targetAudience:
        "Medical and healthcare students balancing clinical hospital duties, academic examinations, and personal Quran memorization commitments.",
      challenges: [
        {
          number: "01",
          title: "Cognitive Fatigue & Time Fragmentation",
          description:
            "After prolonged clinical hours and rigorous anatomy/pathology study, students have minimal mental energy to manage complex, multi-step navigation systems.",
        },
        {
          number: "02",
          title: "Disorganized Study Circle Access",
          description:
            "Virtual recitation circles (حلقات) often rely on scattered chat groups, causing students to miss sessions due to lost or expired meeting links.",
        },
        {
          number: "03",
          title: "Lack of Granular Progress Feedback",
          description:
            "Traditional paper notebooks do not clearly reflect memorized portions versus portions requiring active revision, dampening long-term motivation.",
        },
        {
          number: "04",
          title: "Visual Noise in Generic Applications",
          description:
            "Overly dense layouts with loud advertisements or excessive notifications create friction instead of providing a calm environment for contemplation.",
        },
      ],
    },

    // 03 — Research & Discovery
    research: {
      overview:
        "Research was grounded in understanding the lived reality of medical student peers in Constantine. The discovery phase focused on analyzing study rhythms, clinical shift schedules, and the specific pain points students encounter when balancing spiritual goals with dense academic commitments.",
      userNeeds: [
        "A distraction-free visual environment with gentle contrast suitable for late-night or early-morning revision.",
        "Immediate, zero-friction access to assigned virtual classrooms (e.g. Sheikh Saeed's room) with a consistent URL.",
        "Precise tracking separated into New Memorization (الحفظ) and Active Revision (المراجعة) by Ahzab and Athman.",
        "Clear attendance accountability displaying justified vs unjustified absence records.",
      ],
      persona: {
        name: "Medical Student Archetype",
        tagline: "Year 3 Medical Student at Constantine 2 — Aspiring Physician & Hafiz",
        quote:
          "My clinical hospital shifts and exam deadlines are unpredictable. I need a calm tool that tells me exactly what to revise today without extra mental overhead.",
        demographics: [
          { label: "Faculty", value: "Medicine (NTIC / Constantine)" },
          { label: "Academic Load", value: "35+ hours/week + Hospital Rotations" },
          { label: "Target Goal", value: "30 Ahzab Quran Memorization" },
          { label: "Primary Device", value: "Mobile (iOS / Android)" },
        ],
        goals: [
          "Maintain daily Quran revision during short hospital breaks and transit.",
          "Join scheduled recitation Halaqat on time without searching for links.",
          "Track exact revision status (Ahzab, Athman, and instructor feedback score).",
        ],
        painPoints: [
          "Exhaustion after 10-hour hospital rotations leaving zero patience for complex UIs.",
          "Forgetting which Surah or Hizb was scheduled for review each day.",
          "Scattered communication across messaging apps for attendance and schedules.",
        ],
        isPlaceholder: false,
      },
      journey: [
        {
          phase: "01. Launch & Welcome",
          goal: "Open app during a study break",
          action: "Views inspiring splash emblem and clear introductory mission statement",
          touchpoint: "Splash & Onboarding Screens",
          experience: "positive",
        },
        {
          phase: "02. Quick Sign-in",
          goal: "Access account without password hurdles",
          action: "Inputs credentials with clear validation states and direct password recovery",
          touchpoint: "Login Portal",
          experience: "positive",
        },
        {
          phase: "03. Virtual Hall Entry",
          goal: "Join the live Sheikh recitation circle",
          action: "Taps the prominent 'Virtual Rooms' card with fixed instructor room link",
          touchpoint: "Dashboard Virtual Room Card",
          experience: "positive",
        },
        {
          phase: "04. Progress Logging",
          goal: "Check memorization and revision milestones",
          action: "Views 30-Hizb progress bar, 8 Ahzab memorized, 2 Ahzab under revision, 74.4 rating",
          touchpoint: "Memorization Progress Section",
          experience: "positive",
        },
        {
          phase: "05. Attendance Review",
          goal: "Check absence and attendance records",
          action: "Inspects circular attendance chart showing 22 total sessions and justified absence breakdown",
          touchpoint: "Attendance Analytics Card",
          experience: "positive",
        },
      ],
      keyInsights: [
        {
          number: "01",
          title: "Calm Visual Hierarchy",
          takeaway:
            "A soothing medical teal and slate color palette creates psychological relief, signaling a safe space away from stressful hospital spreadsheets.",
        },
        {
          number: "02",
          title: "Direct Action Over Deep Menus",
          takeaway:
            "The primary daily action—joining the virtual class—must be visible immediately upon dashboard load without scrolling or sub-menus.",
        },
        {
          number: "03",
          title: "Cultural & Arabic Typography Elegance",
          takeaway:
            "Using clean modern Arabic typography with proper line-height and generous white space ensures effortless readability for Quranic terms.",
        },
        {
          number: "04",
          title: "Clear Separation of Memorization vs Revision",
          takeaway:
            "Students require separate tracking for newly learned verses (حفظ) versus recurring revision (مراجعة) to prevent retention loss.",
        },
      ],
    },

    // 04 — Design Process
    designProcess: {
      overview:
        "The design process was executed entirely in Figma, emphasizing atomic design principles, modular tokens, and responsive Auto Layout structures to ensure a cohesive experience across diverse mobile viewports.",
      informationArchitecture: {
        description:
          "The architecture is organized around five primary pillars with a flat hierarchy, minimizing taps required to reach essential daily actions.",
        hierarchy: [
          {
            title: "Entry & Onboarding Flow",
            items: ["Brand Splash (Emblem)", "Value Proposition Onboarding", "Student Authentication"],
          },
          {
            title: "Home Hub (الرئيسية)",
            items: [
              "Student Profile & Search",
              "Virtual Classrooms Card (Direct Teacher Room Link)",
              "Memorization Progress Bar (Ahzab / Athman / Score)",
              "Attendance Analytics (Visual Donut Chart)",
            ],
          },
          {
            title: "Study Circles (حلقاتي)",
            items: ["Assigned Sheikh Group", "Daily Recitation Schedule", "Curriculum Materials"],
          },
          {
            title: "Communications (المراسلات)",
            items: ["Direct Instructor Chat", "Administrative Notices", "Study Partner Updates"],
          },
          {
            title: "Tracking (المتابعة)",
            items: ["Full 30-Hizb Visual Roadmap", "Weekly Evaluation History", "Revision Reminders"],
          },
        ],
      },
      userFlow: {
        description:
          "Streamlined linear progression from app launch directly to classroom entry in under 3 taps, preventing cognitive friction.",
        steps: [
          "Splash Screen (Branding & Identity)",
          "Onboarding Screen (Platform Purpose & Action Choice)",
          "Authentication (Secure Medical Student Sign-in)",
          "Dashboard Overview (Immediate Status Assessment)",
          "Virtual Room (Direct 1-Click Launch to Teacher Session)",
        ],
        nodes: [
          {
            step: 1,
            title: "Launch & Splash",
            touchpoint: "Splash Screen",
            userAction: "Opens app during hospital break or transit",
            systemResponse: "Displays medical emblem & faculty accreditation",
          },
          {
            step: 2,
            title: "Onboarding Choice",
            touchpoint: "Onboarding View",
            userAction: "Reviews platform mission and selects Sign In",
            systemResponse: "Presents clear path tailored for medical students",
          },
          {
            step: 3,
            title: "Medical Auth",
            touchpoint: "Login Portal",
            userAction: "Enters student credentials with instant validation",
            systemResponse: "Authenticates and routes directly to student workspace",
          },
          {
            step: 4,
            title: "Dashboard Overview",
            touchpoint: "Main Hub",
            userAction: "Reviews daily revision targets & attendance score",
            systemResponse: "Displays 30-Hizb tracker & attendance analytics donut",
          },
          {
            step: 5,
            title: "Virtual Classroom",
            touchpoint: "Virtual Room Card",
            userAction: "Taps 1-click persistent join button",
            systemResponse: "Directly opens Sheikh's active live recitation session",
          },
        ],
      },
      wireframes: {
        description:
          "Low-fidelity wireframing focused on card proportions, thumbs-up zone ergonomics, and clean Arabic right-to-left layout balance before high-fidelity visual styling.",
        points: [
          "Ergonomic bottom navigation positioned within thumb reach for single-handed mobile usage.",
          "Card-based dashboard layout grouping related information into digestible visual units.",
          "Generous padding and whitespace preventing visual clutter and accidental clicks.",
          "Clear typography scale separating section headers from instructional sub-copy.",
        ],
      },
      designSystem: [
        {
          category: "Color Palette",
          description: "Soothing medical teal, cyan accents, and neutral dark slate surfaces.",
          details: [
            "Primary Teal: #5197ff (Energy & Modern Focus)",
            "Deep Background: #161513 / #1F1F1F (Dark Surface Hierarchy)",
            "Soft Emerald: #10b981 (Attendance & Positive Milestone Feedback)",
            "Text Primary: #FFFFFF (High Contrast Readability)",
            "Text Muted: #9CA3AF (Secondary Guidance Copy)",
          ],
        },
        {
          category: "Typography",
          description: "Expressive Arabic typography paired with clean geometric Latin sans-serif.",
          details: [
            "Display Arabic: High-legibility modern font for headlines and Quranic metrics.",
            "Body Text: Balanced line heights (1.6 - 1.75) for effortless scanning.",
            "Metric Numerals: Clean monospaced and tabular numbers for Ahzab counts.",
          ],
        },
        {
          category: "Auto Layout & Spacing",
          description: "8-point spatial grid system ensuring responsive fluidity.",
          details: [
            "Standard card radii: 16px to 24px for approachable, soft tactile surfaces.",
            "Padding scales: 8px, 12px, 16px, 24px, 32px for uniform rhythm.",
            "Full auto-layout frames with fill and hug constraints for multi-device adaptation.",
          ],
        },
      ],
      componentsAndVariants: {
        description:
          "Engineered reusable Figma components with interactive variant states to simulate realistic application behavior.",
        items: [
          "Button System: Primary CTA, Secondary Outlined, Ghost Action, and Icon Buttons with Hover/Tap states.",
          "Input Fields: Label, Placeholder, Email/Password icons, Focus state, and Validation indicators.",
          "Metric Progress Card: Linear progress bar with milestone tooltip ('30 حزب') and percentage tracker.",
          "Attendance Chart Component: Custom SVG donut graph with breakdown legend (Present, Excused, Unexcused).",
          "Bottom Navigation Bar: 5 active/inactive tab states with custom stroke icons and typography labels.",
        ],
      },
      interactivePrototyping: {
        description:
          "Figma interactive prototype utilizing smart animations, ease-out transitions, and realistic screen linkages.",
        features: [
          "Seamless screen-to-screen transitions with 300ms ease-out curves.",
          "Interactive input field focus and button press micro-interactions.",
          "Real-time feedback when navigating between the five core bottom tabs.",
          "Direct launch interaction for the virtual classroom joining button.",
        ],
      },
    },

    // 05 — Final Solution
    solution: {
      headline: "A Purpose-Built Digital Sanctuary for Medical Learners",
      description:
        "The final high-fidelity design delivers a harmonious balance between Islamic reverence and modern digital product design. Every screen was meticulously crafted with auto layout, component variants, and clear typography to serve students under demanding conditions.",
      screens: [
        {
          id: "tabib-screen-1",
          number: "01",
          title: "Splash & Institutional Identity",
          arabicTitle: "شاشة البداية — هوية الطبيب الحافظ",
          subtitle: "Emblem uniting medical commitment with Quranic dedication",
          category: "Onboarding & Auth",
          description:
            "The launch screen introduces the official emblem of Al-Tabib Al-Hafiz: an intertwined ECG heartbeat pulse, Quranic manuscript, and medical crescent, grounding the user in the core mission of Constantine's Faculty of Medicine.",
          uxHighlights: [
            "Minimalist presentation with generous white background for brand clarity.",
            "Official institutional attribution: 'كلية الطب - قسنطينة'.",
            "Zero loading distraction, swiftly transitioning to the introductory onboarding.",
          ],
          image: tabibScreen01,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-2",
          number: "02",
          title: "Purpose-Driven Onboarding",
          arabicTitle: "رسالة المنصة وقيمها التعليمية",
          subtitle: "Clear mission framing with gentle visual resonance",
          category: "Onboarding & Auth",
          description:
            "Presents the platform's vision with an artistic Quran bookstand illustration and precise copy: 'An educational platform for medical students, enabling Quran memorization and Islamic study while respecting their medical curriculum and intensive schedules.'",
          uxHighlights: [
            "Calming royal blue background reducing visual stimulation.",
            "High-contrast dual CTAs: 'سجّل الآن' (Register Now) and 'تسجيل الدخول' (Sign In).",
            "Clear value proposition removing ambiguity before account creation.",
          ],
          image: tabibScreen02,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-3",
          number: "03",
          title: "Frictionless Authentication",
          arabicTitle: "تسجيل الدخول — مرحباً بعودتك",
          subtitle: "Warm, empathetic welcome for returning students",
          category: "Onboarding & Auth",
          description:
            "The login screen features an approachable illustration of a medical student in white coat and stethoscope reading the Holy Quran, accompanied by warm greeting copy: 'We missed you! Sign in and resume your Quranic journey.'",
          uxHighlights: [
            "Clear visual input fields with intuitive envelope and lock icons.",
            "Prominent 'Forgot Password' recovery link preventing login frustration.",
            "Direct navigation escape hatch to return home if needed.",
          ],
          image: tabibScreen03,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-4",
          number: "04",
          title: "Centralized Student Dashboard",
          arabicTitle: "لوحة التحكم الرئيسية للطالب",
          subtitle: "All essential tools visible in a single, glanceable viewport",
          category: "Primary Workspace",
          description:
            "The operational nerve center of the application: personal greeting with student avatar (Ahmed Loucif), active notification bell, search bar, virtual classroom direct launcher, 30-Hizb memorization tracker, and attendance analytics.",
          uxHighlights: [
            "Prominent Virtual Rooms card with 1-click launch to Sheikh Saeed's active session.",
            "Granular memorization metrics: 8 Ahzab & 2 Athman memorized, 2 Ahzab & 7 Athman under review, 74.4 rating.",
            "Visual attendance donut chart tracking 22 total sessions with justified/unjustified absence breakdown.",
            "Ergonomic 5-tab bottom navigation with Home, Circles, Messages, Tracking, and More.",
          ],
          image: tabibScreen04,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-5",
          number: "05",
          title: "Granular Memorization Progress",
          arabicTitle: "شريط تقدّم الحفظ وسرعة المراجعة",
          subtitle: "Separating newly memorized verses from active recurring revision",
          category: "Primary Workspace",
          description:
            "A dedicated progress tracking screen illustrating individual Ahzab (أحزاب) and Athman (أثمان) milestones, preventing memory decay through structured visual velocity gauges.",
          uxHighlights: [
            "Strict separation between active new memorization (حفظ) and recurring revision (مراجعة).",
            "High-contrast teal progress bar delivering instantaneous feedback.",
            "Global search input for quick lookup of specific Surahs or instructors.",
          ],
          image: tabibScreen05,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-6",
          number: "06",
          title: "Virtual Halaqat Listing",
          arabicTitle: "قائمة الحلقات القرآنية المتاحة",
          subtitle: "Filterable recitation groups sorted by schedule and level",
          category: "Study Circles (Halaqat)",
          description:
            "Browse active and upcoming recitation circles with detailed Sheikh attribution, timing (e.g. Maghrib session), and curriculum coverage (Surah Al-Baqarah).",
          uxHighlights: [
            "Dual filter tabs: 'حلقاتي' (My Enrolled Circles) vs 'الحلقات المتاحة' (Open Circles).",
            "Concise session metadata tags: time, date, teacher, and recitation category.",
            "Elevated cards with high readability under varied screen brightness.",
          ],
          image: tabibScreen06,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-7",
          number: "07",
          title: "Circle Details & Instructor Card",
          arabicTitle: "تفاصيل جلسات التسميع والشيخ المشرف",
          subtitle: "Detailed schedule and curriculum targets per circle",
          category: "Study Circles (Halaqat)",
          description:
            "Provides deep insight into recitation objectives, instructor credentials, room capacity, and recurring daily session timetables.",
          uxHighlights: [
            "Clear status chips displaying live room availability.",
            "Official supervisor accreditation to cultivate learner confidence.",
            "Integrated calendar sync to prevent attendance conflicts with hospital rotations.",
          ],
          image: tabibScreen07,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-8",
          number: "08",
          title: "Direct Virtual Room Launcher",
          arabicTitle: "روابط القاعات الافتراضية المباشرة",
          subtitle: "Persistent 1-tap room launch eliminating scattered chat links",
          category: "Study Circles (Halaqat)",
          description:
            "Solves the recurring friction of lost meeting URLs by providing direct, persistent classroom launchers for assigned teachers (e.g. Teacher Lina).",
          uxHighlights: [
            "Persistent 'دخول قاعة الأستاذ' buttons removing reliance on messy chat apps.",
            "Clear teacher card layout with active connection status indicators.",
            "Streamlined single-tap launch taking students into recitation in under 2 seconds.",
          ],
          image: tabibScreen08,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-9",
          number: "09",
          title: "1-on-1 Recitation Booking",
          arabicTitle: "حجز جلسة تسميع خاصة",
          subtitle: "Flexible appointment scheduling tailored to hospital on-call shifts",
          category: "Study Circles (Halaqat)",
          description:
            "Enables medical students with irregular clinical shifts to reserve private 1-on-1 recitation evaluations with assigned Sheikhs during free windows.",
          uxHighlights: [
            "Dynamic time slot chips aligned with hospital shift transitions.",
            "Direct instructor confirmation feedback loop.",
            "Gentle cancellation policy designed for emergency surgical call-outs.",
          ],
          image: tabibScreen09,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-10",
          number: "10",
          title: "Revision & Goal Tracking Hub",
          arabicTitle: "مركز متابعة المسيرة القرآنية",
          subtitle: "Centralized action portal for recitation, listening, and exams",
          category: "Analytics & Progress",
          description:
            "Action-oriented student launchpad with 4 primary interactive modules: Recitation (التسميع), Audio Player (المسجلات), Revision Logs (سجل المراجعة), and Tests (الدورات).",
          uxHighlights: [
            "Balanced 4-card grid layout with intuitive Islamic and medical iconography.",
            "Empathetic contextual subtitle: 'من هنا يمكنك متابعة مسيرتك في الحفظ'.",
            "Clear visual affordance guiding students to daily essential actions.",
          ],
          image: tabibScreen10,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-11",
          number: "11",
          title: "Private Audio Recitation Slots",
          arabicTitle: "جلسات الاستماع والتسميع الفردي",
          subtitle: "Audio-focused listening appointments for commute revision",
          category: "Study Circles (Halaqat)",
          description:
            "Allows students to book targeted listening reviews, ideal for hands-free audio revision while traveling between university campus and hospital clinics.",
          uxHighlights: [
            "Optimized lightweight audio pipeline for low-bandwidth hospital networks.",
            "Seat availability indicators showing remaining open appointments.",
            "One-tap slot rescheduling up to 2 hours prior to session start.",
          ],
          image: tabibScreen11,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-12",
          number: "12",
          title: "Granular Revision Log Table",
          arabicTitle: "سجل المراجعة اليومي المفصل",
          subtitle: "Tabular ledger tracking Surah, Hizb, Thumn, and evaluator notes",
          category: "Analytics & Progress",
          description:
            "A clean, scannable data grid documenting past recitation performance, verse ranges covered, examiner remarks, and exact score percentages.",
          uxHighlights: [
            "Compact row spacing presenting 10+ revision entries without horizontal scrolling.",
            "Clear hierarchical column headers: Surah, Ahzab range, date, evaluation.",
            "High contrast text formatting meeting WCAG 2.1 AA accessibility standards.",
          ],
          image: tabibScreen12,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-13",
          number: "13",
          title: "Monthly Exam & Evaluation Notice Board",
          arabicTitle: "مواعيد الاختبارات الشهرية والتقييمات",
          subtitle: "Official timetable for oral evaluations and Tajweed testing",
          category: "Analytics & Progress",
          description:
            "Keeps students apprised of upcoming formal testing deadlines, oral jury sessions, and weekly memorization threshold exams.",
          uxHighlights: [
            "Chronological card feed highlighting upcoming assessment milestones.",
            "Unobtrusive notification tags that encourage consistent preparation.",
            "Exact date and hour chips preventing scheduling overlaps.",
          ],
          image: tabibScreen13,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-14",
          number: "14",
          title: "Smart Khatmah Completion Calculator",
          arabicTitle: "حاسبة الختمة الذكية",
          subtitle: "Predictive completion date estimator based on personalized pace",
          category: "Analytics & Progress",
          description:
            "An interactive mathematical forecasting tool allowing students to configure daily pages and weekly days to calculate their estimated Khatmah (ختمة) milestone date.",
          uxHighlights: [
            "Interactive numerical stepper controls: daily amount (30 pages) & active days.",
            "Dynamic predictive forecast banner: 'تاريخ الختمة المتوقع: 9 يوليو 2026 (خلال 21 يوم)'.",
            "Encouraging tutor illustration fostering spiritual dedication.",
          ],
          image: tabibScreen14,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-15",
          number: "15",
          title: "Examination Scores & Grade Ledger",
          arabicTitle: "دفتر العلامات ونتائج الاختبارات",
          subtitle: "Official scores across Surah Al-Baqarah, Al-Imran, and An-Nisa",
          category: "Certificates & Dossier",
          description:
            "The official student grading ledger compiling evaluation marks across Quranic sections with examiner validation and academic timestamps.",
          uxHighlights: [
            "Dual navigation tabs: 'دفتر العلامات' (Gradebook) and 'الشهادات' (Certificates).",
            "Clear numerical marks paired with official faculty pass criteria.",
            "Search and filter capability to inspect specific Surahs.",
          ],
          image: tabibScreen15,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-16",
          number: "16",
          title: "Digital Certificate of Memorization",
          arabicTitle: "شهادة التميز في الحفظ والإتقان",
          subtitle: "Cryptographically verifiable certificate with scannable QR code",
          category: "Certificates & Dossier",
          description:
            "Formal digital accreditation awarded upon completing 5 Ahzab, featuring official Faculty of Medicine insignia, Sheikh signatures, and a verification QR code.",
          uxHighlights: [
            "Embedded QR code for third-party institutional authenticity verification.",
            "Formal decorative border evoking Islamic scholastic tradition.",
            "One-tap high-resolution PDF download: 'تحميل الشهادة'.",
          ],
          image: tabibScreen16,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-17",
          number: "17",
          title: "AI-Powered Tajweed & Study Assistant",
          arabicTitle: "المساعد الذكي «حافظ»",
          subtitle: "Conversational bot answering Tajweed rules and schedule planning",
          category: "AI & Smart Tools",
          description:
            "A friendly conversational AI helper designed to assist students with quick Tajweed inquiries, pronunciation rules, and tailored revision reminders.",
          uxHighlights: [
            "Approachable robotic mascot avatar welcoming students: 'مرحباً أنا حافظ'.",
            "Quick-suggestion chips for instant one-tap queries.",
            "Ergonomic chat layout with generous bottom keyboard breathing room.",
          ],
          image: tabibScreen17,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-18",
          number: "18",
          title: "Administrative Announcements Feed",
          arabicTitle: "لوحة إعلانات الحلقات والكلية",
          subtitle: "Official broadcast notices from faculty leadership and Sheikhs",
          category: "Primary Workspace",
          description:
            "Chronological notification stream delivering critical updates on schedule changes, holiday breaks, and upcoming academic Quran seminars.",
          uxHighlights: [
            "High-contrast megaphone alert badge for immediate visual recognition.",
            "Timestamped updates attributed to system administration ('مدير النظام').",
            "Urgent notices pinned to the top of the feed.",
          ],
          image: tabibScreen18,
          aspectRatio: "app",
        },
        {
          id: "tabib-screen-19",
          number: "19",
          title: "Student Profile & Medical Dossier",
          arabicTitle: "الملف الشخصي والبيانات الأكاديمية",
          subtitle: "Faculty affiliation, contact information, and study preferences",
          category: "Certificates & Dossier",
          description:
            "Comprehensive profile dashboard for student Ahmed Loucif detailing university email, phone number, medical specialty, and memorization targets.",
          uxHighlights: [
            "Personalized header card with student avatar and institutional contact details.",
            "Academic year and clinical department affiliation tags.",
            "Direct access to notification preferences, privacy, and account settings.",
          ],
          image: tabibScreen19,
          aspectRatio: "app",
        },
      ],
      coreFeatures: [
        {
          title: "Instant Virtual Classroom Entry",
          arabicTitle: "القاعات الافتراضية",
          description:
            "Eliminated the recurring headache of lost meeting links by providing a persistent, direct-launch button on the dashboard for assigned teachers.",
          impact: "100% elimination of meeting link confusion and delayed session starts.",
        },
        {
          title: "Dual Memorization & Revision Tracking",
          arabicTitle: "شريط تقدّم الحفظ",
          description:
            "Separated progress into distinct tracks: new verses committed to memory vs active revision to maintain long-term retention across the 30 Ahzab curriculum.",
          impact: "Provides students with immediate clarity on daily revision priorities.",
        },
        {
          title: "Attendance & Accountability Analytics",
          arabicTitle: "سجل الحضور والمتابعة",
          description:
            "Visual donut chart displaying session attendance percentage, total class count, and excused absence logging, supporting university accountability.",
          impact: "Transparent tracking that motivates consistent weekly participation.",
        },
        {
          title: "Calm, Distraction-Free Dark Aesthetic",
          arabicTitle: "واجهة مريحة ومصممة للتركيز",
          description:
            "Engineered with soft contrast, gentle curves, and generous whitespace to ensure zero eye fatigue during late-night study breaks.",
          impact: "Prevents cognitive exhaustion for medical students after hospital shifts.",
        },
      ],
    },

    // 06 — Reflection & Learnings
    reflection: {
      challenges: [
        "Designing for extreme cognitive fatigue: Medical students consume vast amounts of dense information daily; every redundant UI element had to be aggressively pruned.",
        "Arabic typography alignment & baseline balance: Ensuring right-to-left layout hierarchy, numeral formatting, and Islamic terminology rendered seamlessly across screen sizes.",
        "Balancing technical precision with spiritual warmth: Creating an interface that feels as clean as modern medical software while retaining the serene dignity of a Quranic platform.",
      ],
      approaches: [
        {
          challenge: "Extreme Cognitive Fatigue & Dense Medical Workload",
          approach: "Ruthlessly pruned visual noise, reduced primary path to under 3 taps, and placed the daily virtual classroom link persistently on the primary home dashboard.",
        },
        {
          challenge: "Arabic Right-to-Left Typography & Baseline Harmony",
          approach: "Engineered an 8-point spatial system in Figma with dedicated Arabic font scales and optical margin adjustments to ensure effortless readability across all mobile viewports.",
        },
        {
          challenge: "Balancing Medical Rigor with Spiritual Serenity",
          approach: "Harmonized deep dark slate surfaces (#161513) with calming teal and cyan accents, using generous negative space to evoke reverence while maintaining clinical clarity.",
        },
      ],
      learnings: [
        "Empathy in UI is about reducing friction, not adding decorative elements. Persistent links and clear status indicators carry immense real-world value.",
        "Design systems in Figma are substantially more effective when built with strict Auto Layout constraints and variables from the very first wireframe.",
        "Separating new memorization from active revision is the single most critical structural requirement for serious Quranic learners.",
      ],
      improvements: [
        "Integrate an offline audio recitation player with variable playback speeds for hands-free revision during hospital transit.",
        "Add an interactive peer study circle matching system for joint revision sessions between medical classmates.",
        "Implement a smart spaced-repetition algorithm tailored to individual forgetfulness curves.",
      ],
      futurePossibilities: [
        "Direct integration with Constantine Faculty of Medicine academic calendars to automatically pause or reschedule Halaqat during exam seasons.",
        "AI-powered speech-to-text recitation assistance providing real-time feedback on Tajweed pronunciation.",
        "Dedicated web portal for Sheikhs and instructors to grade recitations and manage student cohorts in bulk.",
      ],
    },
  },
  {
    id: "3",
    slug: "7afez-web",
    title: "7afez Web Platform",
    arabicTitle: "منصة حافظ — المنظومة السحابية",
    subtitle: "Quran Memorization & Study Circles Web Ecosystem",
    shortDescription:
      "A dedicated cloud web platform designed to streamline Quran memorization, coordinate academic halaqat, and connect students with certified instructors.",
    projectType: "Responsive Web Platform",
    platformType: "web",
    presentationHeading: "Web & Brand Presentation",
    role: "UI/UX Designer",
    designResponsibilities: [
      "User Interface Design",
      "User Experience Design",
      "Design System & Tokens",
      "Arabic Typography & Visual Hierarchy",
      "Responsive Desktop & Tablet Layouts",
      "Component Variants & Auto Layout",
      "Interactive Prototyping in Figma",
    ],
    mainDesignFocus:
      "Serene spiritual aesthetic, structured halaqat administration, and frictionless inquiry workflows for academic reciters.",
    platform: "Responsive Web (Desktop & Tablet)",
    timeline: "2026",
    organization: "Quranic Circles (المدارس القرآنية)",
    heroImage: hafezMockup,
    mockupImage: hafezMockup,
    framedMockupImage: hafezFramed,
    laptopMockups: {
      left: hafezLaptopLeft,
      right: hafezLaptopRight,
    },
    galleryMockups: [
      {
        title: "Dual-Laptop Web Presentation",
        image: hafezMockup,
        caption: "Hi-Fi MacBook Pro Web Mockup in Figma (Node 595:449)",
      },
      {
        title: "Hafez Brand Identity & Logo Showcase",
        image: hafezLogoHero,
        caption: "Visual Identity & Arabic Calligraphy Typography on Behance",
      },
      {
        title: "Color Palette & Visual Tokens",
        image: hafezLogoColors,
        caption: "Dark Teal Blue (#1A5A81) & Golden Beige (#CAB178)",
      },
      {
        title: "Framed Presentation Showcase",
        image: hafezFramed,
        caption: "Framed Device Portfolio Presentation",
      },
    ],
    tools: [
      { label: "Figma", icon: FigmaIcon },
      { label: "React", icon: ReactIcon },
      { label: "TypeScript", icon: TypescriptIcon },
      { label: "Tailwind CSS", icon: TaillwindIcon },
    ],
    liveDemo: "https://7afez.platform",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=595-449&t=4FLL2zwFHHIvH7Z5-4",
    behanceLink: "https://www.behance.net/gallery/256578087/_",

    // 01 — Project Overview
    overview: {
      summary:
        "7afez Web (منصة حافظ) is the desktop web extension of the Quran memorization ecosystem, designed to provide a comprehensive, distraction-free environment for students, reciters, and study circle supervisors. While mobile devices excel at quick daily revisions on the go, the web platform serves as the central operational hub: managing study circle schedules, exploring institutional halaqat, submitting inquiries, and fostering a structured daily habit with the Holy Quran.",
      objectives: [
        "Create a harmonious, culturally resonant Arabic design system centered on serene deep-teal and warm golden accents.",
        "Provide a clear, conversion-optimized landing page articulating the platform's mission, circle features, and institutional benefits.",
        "Streamline communication and inquiries through an empathetic, accessible support portal with friendly illustrative assistance.",
        "Deliver high-fidelity interactive prototypes in Figma using rigorous Auto Layout, Component Variants, and Design Tokens.",
      ],
    },

    // 02 — Problems (Short bullet points)
    problemsList: [
      {
        title: "Fragmented Circle Coordination",
        description:
          "Halaqat leads and students rely on scattered messaging channels, losing track of recitation schedules, attendance, and student levels.",
      },
      {
        title: "Cognitive Fatigue & Visual Noise",
        description:
          "Standard educational tools lack serene spiritual aesthetics, introducing visual clutter rather than fostering calm, focused Quran study.",
      },
      {
        title: "Lack of Centralized Institutional Portal",
        description:
          "Faculties and Quranic associations lack a dedicated desktop web hub to showcase their halaqat, onboard cohorts, and handle inquiries.",
      },
    ],
    problem: {
      statement:
        "Students and reciters balancing demanding academic coursework struggle with fragmented communication and cluttered tools that fail to support consistent, distraction-free Quran revision and halaqat coordination.",
      context:
        "Rigorous university curricula leave minimal discretionary time. Physical recitation circles require digital coordination to maintain attendance, log progress, and connect students with qualified sheikhs through a dependable, accessible platform.",
      targetAudience:
        "University students, Quran memorizers, halaqat supervisors, academic study circles, and Islamic educational institutions.",
      challenges: [
        {
          number: "01",
          title: "Arabic Cultural & Calligraphic Harmony",
          description:
            "Harmonizing modern web UI components with classical Arabic calligraphy accents and right-to-left visual balance.",
          iconName: "book",
        },
        {
          number: "02",
          title: "Calm Spiritual Focus & Contrast",
          description:
            "Designing an atmospheric interface that minimizes cognitive load and induces tranquility through deep teal palettes and soft golden accents.",
          iconName: "heart",
        },
        {
          number: "03",
          title: "Frictionless Inquiries & Onboarding Funnel",
          description:
            "Ensuring halaqat questions, registration assistance, and institutional demo requests ('طلب نسخة') flow without bureaucratic obstacles.",
          iconName: "message",
        },
      ],
    },

    // 03 — User Needs (UML Use Case Diagram)
    useCaseDiagram: {
      systemName: "7afez Web Platform Ecosystem",
      actors: [
        {
          id: "reciter",
          name: "Reciter / Student",
          arabicName: "الطالب الحافظ",
          role: "Active Reciter & Circle Member",
          useCases: [
            "Explore Study Circles (تصفح الحلقات)",
            "Request Platform Access (طلب نسخة)",
            "Submit Inquiries & Questions (تواصل معنا)",
            "Access Structured Memorization Schedules",
          ],
        },
        {
          id: "sheikh",
          name: "Sheikh / Circle Supervisor",
          arabicName: "الشيخ المشرف",
          role: "Study Circle Leader",
          useCases: [
            "Manage Halaqat Cohorts",
            "Review Recitation Progress",
            "Publish Circle Schedules & Timetables",
            "Respond to Student Queries & Advice",
          ],
        },
        {
          id: "admin",
          name: "Institutional Administrator",
          arabicName: "مدير المنظومة",
          role: "Platform Coordinator",
          useCases: [
            "Monitor Institutional Enrollment",
            "Manage System Licenses & Circle Quotas",
            "Broadcast Announcements & Guidelines",
            "Oversee Support Requests & Feedback",
          ],
        },
      ],
    },
    research: {
      overview:
        "User research conducted with university students and Quranic supervisors underscored the necessity of a dedicated desktop web interface that complements the mobile app for scheduling, onboarding, and comprehensive circle administration.",
      userNeeds: [
        "Distraction-free environment with high contrast, calm colors, and legible Arabic typography.",
        "Direct communication channels with project coordinators without intimidating multi-step forms.",
        "Prominent demonstration request ('طلب نسخة') for institutions and study groups.",
        "Responsive desktop and tablet experience that remains clear across varying screen resolutions.",
      ],
      persona: {
        name: "Ahmed & Sheikh Abdelrahman",
        tagline:
          "Medical Student & Halaqat Supervisor — University of Constantine",
        quote:
          "«من خلال منصة حافظ، نسعى إلى جعل رحلة حفظ القرآن الكريم ومراجعته أكثر سهولة وتنظيماً واستمرارية مع كتاب الله»",
        demographics: [
          { label: "Primary Role", value: "Student Reciter & Circle Lead" },
          { label: "Environment", value: "Desktop & Tablet Web" },
          {
            label: "Focus",
            value: "Memorization Consistency & Halaqat Management",
          },
          { label: "Location", value: "Constantine, Algeria" },
        ],
        goals: [
          "Establish an unbreakable daily Quran revision habit alongside medical studies.",
          "Centralize circle communication and session schedules in one accessible web hub.",
          "Provide intuitive onboarding for new reciters joining academic halaqat.",
        ],
        painPoints: [
          "Disorganized messaging groups with buried announcements and missed sessions.",
          "Complicated software interfaces that induce screen fatigue after intensive study.",
          "Lack of dedicated desktop access for administrative and planning tasks.",
        ],
      },
      journey: [
        {
          phase: "Discovery",
          goal: "Explore 7afez Platform",
          action:
            "Lands on homepage, discovers core platform features, values, and project mission",
          touchpoint: "Hero Section & Arabic Calligraphy Identity",
          experience: "positive",
        },
        {
          phase: "Evaluation",
          goal: "Understand Value & Offerings",
          action:
            "Reviews system features, target audiences, and student benefits across sections",
          touchpoint: "Features Bar & Target User Grid",
          experience: "positive",
        },
        {
          phase: "Inquiry",
          goal: "Contact Team for Halaqat",
          action:
            "Submits inquiry form assisted by friendly illustrated guide for circle questions",
          touchpoint: "Contact Us (تواصل معنا) Page",
          experience: "positive",
        },
        {
          phase: "Onboarding",
          goal: "Request Platform Demo",
          action:
            "Clicks 'طلب نسخة' to begin institutional setup for their university circle",
          touchpoint: "Demo Call-to-Action",
          experience: "positive",
        },
      ],
      keyInsights: [
        {
          number: "01",
          title: "Desktop Ergonomics for Planning",
          takeaway:
            "While recitation happens on phones, scheduling and circle coordination benefit significantly from spacious desktop real estate.",
        },
        {
          number: "02",
          title: "Empathy Through Friendly Guidance",
          takeaway:
            "An illustrated mascot in the support section noticeably reduces intimidation for users asking questions about circles.",
        },
        {
          number: "03",
          title: "Serene Color Psychology",
          takeaway:
            "Deep teal hues (#173c52) paired with warm golden tones invoke cultural heritage and focus, enhancing spiritual serenity.",
        },
      ],
    },

    // 04 — Design Process & User Flow
    designProcess: {
      overview:
        "The web platform's design process followed a human-centered approach: defining brand identity foundations, crafting atmospheric visual tokens, building reusable Auto Layout components, and assembling responsive desktop screens.",
      informationArchitecture: {
        description:
          "Hierarchical structure organized to serve both prospective students exploring halaqat and registered institutions requiring direct communication.",
        hierarchy: [
          {
            title: "Header Navigation",
            items: [
              "الرئيسية (Home)",
              "مميزات النظام (Features)",
              "المستخدمون (Users)",
              "العروض (Offers)",
              "الدعم (Support)",
              "الشروط والأحكام (Terms)",
            ],
          },
          {
            title: "Flagship Actions",
            items: [
              "طلب نسخة (Request Demo / Enrollment)",
              "إنشاء حساب (Create Account)",
              "تسجيل الدخول (Sign In)",
            ],
          },
          {
            title: "Communication Portal",
            items: [
              "تواصل معنا (Direct Contact Form)",
              "Halaqat Inquiry Categories",
              "Institutional Onboarding Assistance",
            ],
          },
        ],
      },
      userFlow: {
        description:
          "Frictionless user flow transitioning from brand discovery directly to demo request and inquiry submission in minimal steps.",
        steps: [
          "Landing Page (Explore Platform Values & Visual Calligraphy)",
          "Discover Features (Understand Circles & Student Tracking)",
          "Demo / Access Request (Submit 'طلب نسخة' for University Cohort)",
          "Direct Communication (Reach project leads via friendly mascot assistant)",
        ],
        nodes: [
          {
            step: 1,
            title: "Discover Vision",
            touchpoint: "Hero Section",
            userAction: "Lands on web hub and reads platform mission",
            systemResponse: "Displays authentic Arabic typography and brand atmosphere",
          },
          {
            step: 2,
            title: "Evaluate Offerings",
            touchpoint: "Features Bar",
            userAction: "Reviews halaqat support and teacher coordination features",
            systemResponse: "Highlights structured revision and institutional benefits",
          },
          {
            step: 3,
            title: "Inquire & Support",
            touchpoint: "Contact Form",
            userAction: "Fills full name, email, and halaqat question",
            systemResponse: "Validates inputs and dispatches to project supervisors",
          },
          {
            step: 4,
            title: "Onboard Institution",
            touchpoint: "Primary CTA",
            userAction: "Clicks 'طلب نسخة' for medical circle adoption",
            systemResponse: "Initiates institutional onboarding flow",
          },
        ],
      },
      wireframes: {
        description:
          "Desktop wireframes focused on balanced negative space, prominent Arabic typography hierarchy, and unobstructed conversion touchpoints.",
        points: [
          "Generous hero section with centered calligraphic emblem and high-contrast CTA.",
          "Persistent desktop navigation bar with distinct sign-in and action buttons.",
          "Two-column contact layout balancing illustrative warmth with clean input fields.",
          "Responsive breakpoint adaptations preserving layout dignity across widescreen and laptop displays.",
        ],
      },
      designSystem: [
        {
          category: "Color Palette",
          description: "Serene deep teal, noble gold, and pure white surfaces.",
          details: [
            "Primary Ocean Teal: #173c52 / #102838 (Spiritual Depth & Stability)",
            "Accent Gold: #C99738 / #dfa84a (Noble Calligraphy & Primary CTA)",
            "Dark Background: #161513 / #1F1F1F (Deep Canvas Hierarchy)",
            "Card Neutral: #FFFFFF & Slate Glass (Readability & Contrast)",
            "Text Primary: #FFFFFF / #E5E7EB (Legibility & Scanning Ease)",
          ],
        },
        {
          category: "Typography",
          description: "Expressive Arabic calligraphy paired with clean modern geometric sans-serif.",
          details: [
            "Display Arabic: Traditional Arabic & Cairo for expressive, dignified headers.",
            "Body Prose: High-legibility line heights (1.6 - 1.8) for comfortable reading.",
            "Latin & Monospace: Poppins and Inter for metadata and input placeholders.",
          ],
        },
        {
          category: "Auto Layout & Components",
          description: "Strict 8-point spatial system and modular component library in Figma.",
          details: [
            "MacBook Pro 15 & 16 vector device frames with precise screen viewports.",
            "Interactive form inputs with label, active focus ring, and helper states.",
            "Floating pill buttons with smooth hover and active state transitions.",
          ],
        },
      ],
      componentsAndVariants: {
        description:
          "Engineered modular Figma components with interactive variants simulating real desktop software interactions.",
        items: [
          "Navigation Bar: Desktop sticky header with links, login buttons, and primary CTA pill.",
          "Form Input Components: Name, Email, and Textarea inputs with RTL placeholder states.",
          "MacBook Pro Presentation Frames: Authentic Apple vector hardware frames with screen clipping.",
          "Mascot Visual Element: Friendly illustrated assistant guiding users through inquiries.",
        ],
      },
      interactivePrototyping: {
        description:
          "Figma prototype showcasing realistic transitions, hover reactions, and screen connections.",
        features: [
          "Smooth 300ms ease-out transitions between landing page and inquiry hub.",
          "Interactive hover effects on primary 'طلب نسخة' and contact submission buttons.",
          "Responsive auto-layout resizing test across 1440px and 1280px screen widths.",
        ],
      },
    },

    // 05 — Solution Screens
    solution: {
      headline: "A Harmonious Desktop Sanctuary for Quranic Study & Community",
      description:
        "The finalized web platform provides an inspiring, distraction-free environment for medical students and halaqat leads. Every component is built with strict Auto Layout, bilingual typography harmony, and authentic Arabic spiritual aesthetics.",
      coreFeatures: [
        {
          title: "Institutional Mission & Brand Presence",
          arabicTitle: "الرئيسية — هوية المنصة ورسالتها",
          description:
            "A welcoming desktop landing page that immediately communicates the platform's vision of organized, effortless Quran memorization.",
          impact: "Significantly enhances student trust and institutional credibility.",
        },
        {
          title: "Empathetic Direct Support Portal",
          arabicTitle: "تواصل معنا — خدمة المستفيدين",
          description:
            "A friendly, illustrated contact interface that simplifies submitting halaqat questions and registration inquiries.",
          impact: "Reduces communication friction and encourages student engagement.",
        },
        {
          title: "Multi-Device Desktop Presentation",
          arabicTitle: "عرض تفاعلي بأجهزة ماك بوك",
          description:
            "Realistic MacBook Pro presentation mockup in Figma (Node 595:449) highlighting simultaneous desktop interactions.",
          impact: "Provides stakeholders with clear real-world visual context.",
        },
      ],
      screens: [
        {
          id: "7afez-web-screen-1",
          number: "01",
          title: "Platform Landing & Spiritual Brand Identity",
          arabicTitle: "الرئيسية — هوية منصة حافظ ورسالة المشروع",
          subtitle:
            "Purpose-built desktop portal welcoming reciters and halaqat supervisors",
          description:
            "The landing page establishes the core brand message: empowering Quran memorization through structured daily habits, clear progress tracking, and supportive study communities. Features deep-ocean teal hues, golden accents, and authentic Arabic calligraphy typography.",
          uxHighlights: [
            "Atmospheric spiritual visual palette with deep teal and warm golden accents",
            "Clear conversion funnel with prominent 'Request a Demo' (طلب نسخة) primary action",
            "Transparent institutional value proposition addressing both learners and teachers",
            "Contextual top navigation with quick authentication and circle discovery",
          ],
          image: hafezScreen01,
          category: "Landing & Brand",
          aspectRatio: "web",
        },
        {
          id: "7afez-web-screen-2",
          number: "02",
          title: "Direct Inquiries & Project Communication Hub",
          arabicTitle: "تواصل معنا — مركز الاستفسارات وخدمة المستفيدين",
          subtitle:
            "Approachable communication portal with friendly illustrated assistant",
          description:
            "A human-centered contact screen designed to lower friction for prospective study circles, student inquiries, and technical support. Features an illustrated mascot, clear input fields, and prompt direct feedback.",
          uxHighlights: [
            "Engaging illustrated guide providing friendly guidance and emotional warmth",
            "Accessible Arabic form fields with clear visual labels and focus states",
            "Direct routing for registration, halaqat inquiries, and technical assistance",
            "Responsive card architecture maintaining readability across all viewports",
          ],
          image: hafezScreen02,
          category: "Communication & Support",
          aspectRatio: "web",
        },
        {
          id: "7afez-logo-hero",
          number: "03",
          title: "Brand Identity & Arabic Calligraphy Logo",
          arabicTitle: "هوية منصة حافظ — الشعار والخط العربي الأصيل",
          subtitle: "Harmonious fusion of Quranic sacred geometry, the open book, and classic calligraphy",
          category: "Brand Identity",
          description:
            "Custom brandmark designed for Hafez Platform, integrating the letter 'ح' with an open Quran upon a reading stand, rendered in elegant spiritual proportions.",
          uxHighlights: [
            "Bespoke Arabic letterform craft communicating reverence and academic rigor.",
            "Integrated open Quran icon signifying direct engagement with the scripture.",
            "Complete Behance design showcase documenting the design methodology.",
          ],
          image: hafezLogoHero,
          aspectRatio: "web",
        },
        {
          id: "7afez-logo-identity",
          number: "04",
          title: "Brand Philosophy & Mission Typography",
          arabicTitle: "فلسفة الهوية ورسالة المنظومة",
          subtitle: "Digital platform empowering the Quran memorization journey with daily consistency",
          category: "Brand Identity",
          description:
            "Typography and mission statement presentation: 'حافظ منصة رقمية تساعد على تنظيم رحلة حفظ القرآن الكريم ومراجعته، من خلال متابعة التقدم، تنظيم المهام، وبناء عادة يومية مستمرة مع كتاب الله.'",
          uxHighlights: [
            "Modern balanced Arabic typeface pairing.",
            "Watermark Quranic typographic background.",
            "Focused mission articulation for educational institutions.",
          ],
          image: hafezLogoIdentity,
          aspectRatio: "web",
        },
        {
          id: "7afez-logo-colors",
          number: "05",
          title: "Design Tokens & Brand Color Palette",
          arabicTitle: "ألوان الشعار وتوكنز الهوية البصرية",
          subtitle: "Dark Teal Blue (#1A5A81) and Golden Beige (#CAB178)",
          category: "Brand Identity",
          description:
            "Core color tokens establishing the serene spiritual atmosphere of the platform: Dark Teal Blue (RGB: 26, 90, 129) evoking trust and focus, paired with Golden Beige (RGB: 202, 177, 120) reflecting warmth and noble tradition.",
          uxHighlights: [
            "WCAG AAA compliance against clean neutral backgrounds.",
            "Accessible high-contrast palette.",
            "Shared color tokens mapped directly from Figma into Tailwind CSS.",
          ],
          image: hafezLogoColors,
          aspectRatio: "web",
        },
      ],
    },

    // 06 — Reflection & Learnings
    reflection: {
      challenges: [
        "Balancing modern web SaaS patterns with reverent spiritual themes without appearing overly commercial.",
        "Ensuring seamless typography legibility for Arabic RTL text across all browser zoom levels.",
        "Creating an overlapping multi-device presentation in Figma that highlights both macro messaging and micro interactions.",
      ],
      approaches: [
        {
          challenge: "Avoiding Commercial Clutter",
          approach:
            "Focused on spacious typographic layouts, subtle golden accents, and clear institutional benefits instead of aggressive marketing banners.",
        },
        {
          challenge: "Arabic RTL Layout Precision",
          approach:
            "Built all components from the ground up using RTL-first flexbox logic and verified proper alignment in Figma auto layout.",
        },
        {
          challenge: "Dual-Device Presentation Harmony",
          approach:
            "Offset the MacBook Pro 15 and MacBook Pro 16 frames with realistic physical perspective and drop shadows to establish natural depth.",
        },
      ],
      learnings: [
        "Color psychology plays a profound role in faith-based educational tools; deep teal evokes both intellect and spiritual tranquility.",
        "Presenting web designs inside realistic multi-device desktop frames immediately conveys scale and real-world credibility.",
        "Figma components and design tokens drastically accelerate bilingual adaptations and theme consistency.",
      ],
      improvements: [
        "Incorporate an interactive audio recitation preview directly within the web hero section.",
        "Develop an interactive timetable planner for virtual and physical halaqat sessions.",
        "Add a multi-language switcher supporting Arabic, French, and English for international students.",
      ],
      futurePossibilities: [
        "AI-assisted recitation pronunciation verification embedded directly into browser sessions.",
        "Real-time synchronized Mushaf pages for live group recitation circles.",
        "Unified mobile-and-web synchronization for seamless transitioning between transit revision and desktop study.",
      ],
    },
  },
  {
    id: "2",
    slug: "rokhsa",
    title: "Rokhsa — Smart Driving School Platform",
    arabicTitle: "رخصة — منصة ذكية لمدارس تعليم السياقة",
    subtitle: "Modern Mobile Ecosystem for Driving Education",
    shortDescription:
      "A smart mobile platform that digitizes driving school operations, lesson bookings, and student tracking.",
    projectType: "Mobile Application",
    platformType: "app",
    role: "UI/UX Designer",
    designResponsibilities: [
      "User Research",
      "User Interface Design",
      "User Experience Design",
      "Design System & Tokens",
      "Learner Mobile App",
      "Figma High-Fidelity Prototype",
    ],
    mainDesignFocus:
      "Mobile ecosystem digitizing driving school operations, lesson booking, and candidate tracking.",
    platform: "Mobile Application (iOS & Android)",
    timeline: "2026",
    organization: "Driving Education Ecosystem",
    heroImage: rokhsaMockup,
    mockupImage: rokhsaMockup,
    framedMockupImage: rokhsaFramed,
    phoneMockups: {
      left: rokhsaPhoneLeft,
      center: rokhsaPhoneCenter,
      right: rokhsaPhoneRight,
    },
    galleryMockups: [
      {
        title: "Transparent Perspective Mockup",
        image: rokhsaMockup,
        caption: "Cross-Device Driving Education Platform",
      },
      {
        title: "Framed Presentation Showcase",
        image: rokhsaFramed,
        caption: "Framed Portfolio Showcase",
      },
    ],
    presentationHeading: "Mobile Presentation",
    tools: [{ label: "Figma", icon: FigmaIcon }],
    liveDemo:
      "https://lnkd.in/p/dz_eNQ82",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=585-131",
    linkedin:
      "https://lnkd.in/p/dz_eNQ82",

    // 01 — Overview
    overview: {
      summary:
        "Rokhsa (رخصة) is a modern digital platform engineered to modernize driving education across Algeria. By replacing obsolete paper ledgers, telephone scheduling, and manual record keeping with an integrated dual-interface system, Rokhsa delivers a centralized web dashboard for school administrators and instructors, alongside an intuitive mobile interface for student learners.",
      objectives: [
        "Digitize driving school operational workflows, lesson booking, and exam readiness tracking.",
        "Design a high-efficiency desktop dashboard for school owners to manage instructors, fleets, and students.",
        "Craft an approachable mobile interface empowering learners to book driving slots and review road regulations.",
        "Establish an accessible design system with over 20 high-fidelity screens spanning desktop and mobile.",
      ],
    },

    // 02 — Problems (Short, Clear Bullet Points)
    problemsList: [
      {
        title: "Paper-Based Administrative Bottlenecks",
        description:
          "Managing dozens of concurrent candidate files in physical paper ledgers causes lost paperwork and administrative overhead.",
      },
      {
        title: "Fragmented Lesson Scheduling",
        description:
          "Coordinating driving sessions via ad-hoc phone calls creates confusion and double-booked training vehicles.",
      },
      {
        title: "Lack of Clear Exam Readiness Indicators",
        description:
          "Students and school owners lack real-time visibility into required road hours completed vs state exam criteria.",
      },
      {
        title: "Fleet and Instructor Coordination Gaps",
        description:
          "School owners lack a centralized, live overview of instructor rosters and vehicle fleet availability.",
      },
    ],

    // 03 — User Needs (UML Use Case Diagram)
    useCaseDiagram: {
      systemName: "Rokhsa Driving Education Ecosystem",
      actors: [
        {
          id: "candidate",
          name: "Candidate Driver",
          arabicName: "المترشح للسياقة",
          role: "Learner & Candidate",
          useCases: [
            "Book Practical Driving Slots",
            "Practice Highway Code Tests",
            "Track Lesson Hours & Exam Readiness",
            "Communicate with School Admin",
          ],
        },
        {
          id: "admin",
          name: "School Administrator",
          arabicName: "مدير مدرسة السياقة",
          role: "School Manager",
          useCases: [
            "Manage Candidate Dossiers & Fees",
            "Schedule Instructors & Fleet Vehicles",
            "Verify Exam Readiness & Submit Lists",
            "Monitor Real-Time School Analytics",
          ],
        },
      ],
    },

    // 05 — Tools Used
    toolsUsed: [
      {
        name: "Figma",
        category: "UI/UX Interface Design",
        description: "Dual desktop dashboard and mobile companion application interface design.",
      },
      {
        name: "Auto Layout 5.0",
        category: "Responsive Architecture",
        description: "Wide desktop 1440px data tables adapting fluidly to mobile 375px viewports.",
      },
      {
        name: "Component Variants",
        category: "Design System",
        description: "Engineered interactive calendar time-slot selectors and multi-status candidate tables.",
      },
      {
        name: "Interactive Prototyping",
        category: "Interaction & Workflow",
        description: "Smart animate slot booking flow and interactive candidate dossier review.",
      },
    ],

    // 02 — The Problem
    problem: {
      statement:
        "Driving education in Algeria is largely managed through paper ledgers, phone calls, and manual records, leading to scheduling conflicts, lost student files, and administrative overhead.",
      context:
        "Traditional driving schools face constant operational friction: lesson bookings written in physical logbooks get double-booked, student progress towards theoretical highway code exams vs practical driving tests is hard to verify, and vehicle fleet maintenance is tracked informally.",
      targetAudience:
        "Driving school administrators, certified instructors, and student learner drivers seeking streamlined licensing certification.",
      challenges: [
        {
          number: "01",
          title: "Paper-Based Administrative Bottlenecks",
          description:
            "Managing dozens of concurrent student files through physical logbooks causes scheduling errors and lost paperwork.",
        },
        {
          number: "02",
          title: "Fragmented Lesson Booking Communication",
          description:
            "Coordinating driving sessions via ad-hoc phone calls creates confusion for both instructors and busy students.",
        },
        {
          number: "03",
          title: "Lack of Clear Exam Readiness Indicators",
          description:
            "Students lack real-time visibility into required driving hours completed and readiness for official state exams.",
        },
        {
          number: "04",
          title: "Fleet & Instructor Coordination Gaps",
          description:
            "School owners lack a centralized birds-eye view of which instructors and training vehicles are available at any given hour.",
        },
      ],
    },

    // 03 — Research & Discovery
    research: {
      overview:
        "Research focused on analyzing driving school administrative friction and understanding learner expectations. The discovery phase highlighted the critical need for a dual-sided architecture that serves both high-speed desk administration and on-the-go student actions.",
      userNeeds: [
        "A clear, responsive desktop dashboard with instant access to active student files, revenue, and daily schedules.",
        "A mobile booking interface enabling learners to view available instructor slots and confirm lessons in under a minute.",
        "Visual exam readiness progress tracking for both traffic law (Code de la route) and practical driving hours.",
        "Accessible bilingual Arabic and French interface support tailored to local Algerian driving regulations.",
      ],
      persona: {
        name: "School Administrator & Student Learner",
        tagline: "Driving School Owner & Candidate Driver in Constantine",
        quote:
          "Managing schedules across 4 instructors and 60 students on paper ledgers was chaotic. We needed a single dashboard that tells us who is driving, who has paid, and who is ready for the exam.",
        demographics: [
          { label: "Target Sector", value: "Driving Schools (Auto-Écoles)" },
          { label: "Primary Users", value: "School Managers & Learner Drivers" },
          { label: "Devices", value: "Web (Desktop Admin) & Mobile (Students)" },
          { label: "Region", value: "Algeria (Wilaya System)" },
        ],
        goals: [
          "Eliminate double-booking of training vehicles and instructors.",
          "Provide transparent tracking of candidate lesson hours and payment status.",
          "Enable candidate drivers to practice highway code questions from mobile devices.",
        ],
        painPoints: [
          "Lost student payment receipts and exam paperwork.",
          "Last-minute lesson cancellations without automatic rescheduling.",
          "Difficulty tracking which vehicle is undergoing maintenance.",
        ],
        isPlaceholder: false,
      },
      journey: [
        {
          phase: "01. School Onboarding",
          goal: "Register driving school profile and fleet",
          action: "Administrator inputs school branches, instructor roster, and training vehicles",
          touchpoint: "Web Admin Setup",
          experience: "positive",
        },
        {
          phase: "02. Candidate Registration",
          goal: "Create new candidate profile",
          action: "Enrolls student with licensing category, photo ID, and payment package",
          touchpoint: "Candidate Management Table",
          experience: "positive",
        },
        {
          phase: "03. Interactive Booking",
          goal: "Book practical driving slot",
          action: "Candidate selects instructor, available vehicle, and morning/afternoon slot",
          touchpoint: "Calendar & Schedule View",
          experience: "positive",
        },
        {
          phase: "04. Progress Milestones",
          goal: "Evaluate exam readiness",
          action: "Instructor logs completed road hours and rates student parking/highway competencies",
          touchpoint: "Student Progress Card",
          experience: "positive",
        },
        {
          phase: "05. Exam Scheduling",
          goal: "Confirm state driving exam date",
          action: "System verifies completed requirements and generates candidate exam dossier",
          touchpoint: "Exam Management Module",
          experience: "positive",
        },
      ],
      keyInsights: [
        {
          number: "01",
          title: "Dual-Interface Synergy",
          takeaway:
            "Admins need wide desktop dashboards with dense tabular data, while students need lightweight, visual mobile flows.",
        },
        {
          number: "02",
          title: "Glanceable Calendar Scheduling",
          takeaway:
            "A visual drag-and-drop calendar immediately prevents double-booking cars or instructors during peak hours.",
        },
        {
          number: "03",
          title: "Exam Readiness Clarity",
          takeaway:
            "Clearly separating theoretical traffic law progress from practical behind-the-wheel hours accelerates test success.",
        },
        {
          number: "04",
          title: "Familiar Arabic Typography",
          takeaway:
            "Using clean Arabic interface typography (`إدارة مدرستك من مكان واحد`) establishes instant credibility with Algerian school owners.",
        },
      ],
    },

    // 04 — Design Process
    designProcess: {
      overview:
        "Designed in Figma using a robust responsive grid system, cohesive color tokens matching the Algerian driving school aesthetic (Navy Blue, Clean White, Safety Amber), and extensive component variant sets.",
      informationArchitecture: {
        description:
          "Dual-layer architecture organizing the desktop admin suite and mobile candidate companion.",
        hierarchy: [
          {
            title: "Admin Web Dashboard",
            items: [
              "Central Overview (Active students, revenue, today's driving slots)",
              "Candidate Records (Dossiers, payments, license category)",
              "Instructor & Vehicle Fleet Management",
              "Interactive Schedule & Booking Calendar",
              "Exam Readiness Analytics & Official Lists",
            ],
          },
          {
            title: "Learner Mobile App",
            items: [
              "Home Hub (Next driving lesson countdown, assigned car/instructor)",
              "Slot Booking & Availability Picker",
              "Interactive Highway Code Practice Tests",
              "Personal Progress & Exam Checklist",
              "Direct Chat with School Administration",
            ],
          },
        ],
      },
      userFlow: {
        description:
          "End-to-end flow from candidate enrollment to practical driving session completion and exam readiness sign-off.",
        steps: [
          "Candidate Enrollment on Web Admin",
          "Automated Credentials sent to Learner Mobile",
          "Learner Books Weekly Driving Sessions",
          "Instructor Conducts Session & Logs Progress",
          "System Verifies Exam Readiness Threshold",
        ],
        nodes: [
          {
            step: 1,
            title: "Candidate Enrollment",
            touchpoint: "Web Admin Portal",
            userAction: "Admin registers student dossier & licensing category",
            systemResponse: "Generates credentials and initiates exam roadmap",
          },
          {
            step: 2,
            title: "Credential Dispatch",
            touchpoint: "Learner Mobile App",
            userAction: "Learner signs into mobile companion app",
            systemResponse: "Loads personalized highway code & road hours roadmap",
          },
          {
            step: 3,
            title: "Lesson Slot Booking",
            touchpoint: "Interactive Schedule",
            userAction: "Selects preferred instructor, vehicle, and date slot",
            systemResponse: "Verifies fleet availability and locks reservation",
          },
          {
            step: 4,
            title: "Progress & Competency",
            touchpoint: "Evaluation Module",
            userAction: "Instructor logs completed road hours and maneuvers",
            systemResponse: "Updates candidate exam readiness percentage",
          },
          {
            step: 5,
            title: "Exam Readiness Sign-off",
            touchpoint: "State Exam Dossier",
            userAction: "Admin generates certified candidate exam list",
            systemResponse: "Prepares official Wilaya transport submission file",
          },
        ],
      },
      wireframes: {
        description:
          "High-density desktop wireframes tested against mobile viewports to ensure seamless cross-device parity.",
        points: [
          "Dense data tables with quick sorting, filters, and status pill badges.",
          "Responsive cards summarizing weekly hours, active cars, and pass rates.",
          "Mobile-first bottom navigation for student actions.",
          "Bilingual right-to-left layout balance.",
        ],
      },
      designSystem: [
        {
          category: "Color Palette",
          description: "Professional deep navy blue, clean slate, and safety traffic accents.",
          details: [
            "Primary Navy: #1E3A8A (Trust & Institutional Authority)",
            "Accent Blue: #5197ff (Action CTAs & Interactive Highlights)",
            "Safety Amber: #F59E0B (Pending Reviews & Exam Milestones)",
            "Success Emerald: #10B981 (Completed Hours & Passed Tests)",
            "Surface Dark: #161513 / #1F1F1F (Portfolio Cohesive Shell)",
          ],
        },
        {
          category: "Typography Scale",
          description: "Bold Arabic display typography paired with legible Latin numerals.",
          details: [
            "Arabic Display: High-impact headline weights for marketing & dashboard banners.",
            "Body Copy: Clean, high-contrast sans-serif for dense data tables.",
            "Tabular Numbers: Monospaced numbers for schedule hours and financial entries.",
          ],
        },
        {
          category: "Responsive Components",
          description: "Full auto layout frames adapting from 1440px desktop to 375px mobile viewports.",
          details: [
            "Data Tables with expandable student rows.",
            "Visual vehicle status cards showing active training status.",
            "Calendar time slot buttons with available / booked states.",
          ],
        },
      ],
      componentsAndVariants: {
        description:
          "Engineered over 20 high-fidelity screens and component variant sets in Figma.",
        items: [
          "Status Badges: Active, In Training, Exam Ready, Licensed, Suspended.",
          "Calendar Slot Selectors: Available, Selected, Reserved, Past.",
          "Metric Cards: Total Students, Active Fleet, Weekly Bookings, Exam Pass Rate.",
          "Mobile Tab Bar: Home, Bookings, Highway Code, Progress, Profile.",
          "Dossier Modal: Full student file with documentation upload states.",
        ],
      },
      interactivePrototyping: {
        description:
          "Complete Figma interactive prototype with smart animates demonstrating the booking flow and admin management.",
        features: [
          "Interactive slot booking on mobile with instant state changes.",
          "Desktop dashboard table filtering by license category (B, C, D).",
          "Smooth modal transitions for candidate file inspection.",
          "Live preview available directly in the Figma file.",
        ],
      },
    },

    // 05 — Final Solution
    solution: {
      headline: "A Unified Digital Ecosystem for Modern Driving Schools",
      description:
        "Rokhsa delivers an end-to-end digital experience that brings efficiency, transparency, and pride to driving schools in Algeria. The platform seamlessly bridges admin oversight with student convenience.",
      screens: [
        {
          id: "rokhsa-screen-3",
          number: "01",
          title: "Driving School Value Onboarding",
          arabicTitle: "مرحباً بك في مدرستك الرقمية",
          subtitle: "Empowering school managers to digitize candidates and payments",
          category: "Onboarding & Auth",
          description:
            "Introduces driving school proprietors to the digital ecosystem: tracking candidates, logging driving sessions, managing state exams, and receiving installment payments.",
          uxHighlights: [
            "Clear value proposition: 'أدر المتدربين، وتابع الحصص، ونظم الامتحانات والدفعات بكل سهولة'.",
            "Prominent primary CTA: 'ابدأ الآن' (Get Started) with high visual affordance.",
            "Polished corporate palette instilling trust in administrative capabilities.",
          ],
          image: rokhsaScreen02,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-4",
          number: "02",
          title: "Secure Administrator Mobile Login",
          arabicTitle: "تسجيل الدخول لإدارة مدرستك",
          subtitle: "Role-based authentication for school owners and instructors",
          category: "Onboarding & Auth",
          description:
            "Streamlined mobile sign-in portal with dedicated credentials inputs, password visibility toggle, and administrative support links.",
          uxHighlights: [
            "Pre-filled admin username hint reducing mobile typing friction.",
            "Accessible support link: 'ليس لديك حساب؟ تواصل مع الإدارة'.",
            "Immediate form validation preventing submission errors.",
          ],
          image: rokhsaScreen03,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-5",
          number: "03",
          title: "Mobile Command Center Dashboard",
          arabicTitle: "لوحة التحكم الرئيسية عبر الهاتف",
          subtitle: "Enrolled candidates (426), vehicle fleet, and live activity feed",
          category: "Operations & Fleet",
          description:
            "The primary operational dashboard on mobile: at-a-glance candidate counts (426), revenue analytics (24,960 DA), and live chronological activity stream.",
          uxHighlights: [
            "Hero summary card highlighting 426 total active driving candidates.",
            "Live activity timeline tracking new candidate registrations and payments.",
            "Ergonomic bottom tab navigation for one-handed thumb interaction.",
          ],
          image: rokhsaScreen04,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-6",
          number: "04",
          title: "Modular Operations Navigation Drawer",
          arabicTitle: "القائمة الجانبية وإدارة الأقسام",
          subtitle: "Fast access to exams, packages, assistants, and timetables",
          category: "Operations & Fleet",
          description:
            "A structured side drawer providing quick navigation to essential modules: Exams (الامتحانات), Packages (الباقات), Assistants (المساعدون), and Schedules (الجدول).",
          uxHighlights: [
            "Color-coded module icons enabling rapid optical recognition.",
            "Direct access to school vehicle fleet status and settings.",
            "Smooth animated open/close drawer transitions.",
          ],
          image: rokhsaScreen05,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-7",
          number: "05",
          title: "Driving Lesson Category Selector",
          arabicTitle: "اختيار نوع الحصة التدريبية",
          subtitle: "Code de la route, Maneuvers (Circuit), or Road Driving (Circulation)",
          category: "Lesson Booking & Timer",
          description:
            "Allows driving instructors to initiate practical sessions by choosing between Highway Code (كود), Maneuvers (مناورات), or Road Driving (سياقة).",
          uxHighlights: [
            "Three official Algerian driving license curriculum test modules.",
            "Daily training hours tracker at top displaying 5:30 cumulative hours.",
            "Visual iconography illustrating each driving discipline.",
          ],
          image: rokhsaScreen06,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-8",
          number: "06",
          title: "Live In-Car Driving Lesson Timer",
          arabicTitle: "عداد الحصة التدريبية المباشر",
          subtitle: "Precision stopwatch ensuring candidates receive mandated road time",
          category: "Lesson Booking & Timer",
          description:
            "A real-time session stopwatch (24:59) allowing instructors to start, pause, and log practical driving minutes directly from inside the training vehicle.",
          uxHighlights: [
            "Glanceable high-contrast numerical timer: 24:59 with circular countdown gauge.",
            "Oversized 'ابدأ / توقف' (Start/Stop) touch targets optimized for car cabin usage.",
            "Session metadata logging start time (10:30) and candidate assignment.",
          ],
          image: rokhsaScreen07,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-9",
          number: "07",
          title: "Candidate Selection for Practical Drive",
          arabicTitle: "اختيار الطالب للجلسة التدريبية",
          subtitle: "Searchable directory of enrolled learners with Category B filters",
          category: "Lesson Booking & Timer",
          description:
            "Searchable list of driving students enabling instructors to quickly bind an active lesson to a specific candidate's national record.",
          uxHighlights: [
            "Fast filter pills: All, Road Driving, Maneuvers, Highway Code.",
            "Candidate cards showing registered name, phone, and license class (صنف ب).",
            "Real-time instant search bar supporting query by name or phone.",
          ],
          image: rokhsaScreen08,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-10",
          number: "08",
          title: "Archive of Completed Driving Lessons",
          arabicTitle: "سجل الحصص التدريبية المنتهية",
          subtitle: "Archived ledger of driving hours and completed student lessons",
          category: "Operations & Fleet",
          description:
            "A chronological record of completed lessons, instructor approvals, dates, and vehicle mileage.",
          uxHighlights: [
            "Daily cumulative training hours meter: 'عدد ساعات اليوم 5:30'.",
            "Clear card list highlighting student name, category, and completion stamp.",
            "Floating '+' button facilitating quick manual lesson logging.",
          ],
          image: rokhsaScreen09,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-11",
          number: "09",
          title: "Official State Exam Candidates Ledger",
          arabicTitle: "قائمة المترشحين للامتحان والنتائج",
          subtitle: "Pass/Fail results across Highway Code, Circuit, and Road Drive",
          category: "Exams & Candidates",
          description:
            "Formal state driving exam ledger tracking candidates scheduled for testing on Sunday 5 January, with official Green (Pass) and Red (Fail) result stamps.",
          uxHighlights: [
            "Official traffic inspection header and state exam date banner.",
            "Color-coded status badges: Green for 'ناجح' (Pass) vs Red for 'راسب' (Fail).",
            "Curriculum tabs: Information, Road Signs, Maneuvers, Highway Drive.",
          ],
          image: rokhsaScreen10,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-12",
          number: "10",
          title: "Create New State Exam Session",
          arabicTitle: "إضافة موعد امتحان جديد",
          subtitle: "Scheduling state driving exams with licensing authority dates",
          category: "Exams & Candidates",
          description:
            "Form interface to register upcoming official exam sessions with candidate cohorts, exam discipline (Signs, Maneuvers, Driving), and venue.",
          uxHighlights: [
            "Calendar date picker for official state exam inspection days.",
            "Category radio buttons: إشارات (Signs), مناورات (Circuit), سياقة (Road).",
            "Dual actions: 'محو' (Reset) and 'التالي' (Next step).",
          ],
          image: rokhsaScreen11,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-13",
          number: "11",
          title: "Candidate Profile & Driving Dossier",
          arabicTitle: "ملف المترشح والبيانات الشخصية",
          subtitle: "Ahmed Loucif dossier, national registration code, and contact",
          category: "Exams & Candidates",
          description:
            "Full student dossier for Ahmed Loucif displaying Category B classification, state registration number, registration date, phone, and address.",
          uxHighlights: [
            "4-tab dossier navigation: Info (المعلومات), Payments (المدفوعات), Sessions (الجلسات), Exams (الامتحانات).",
            "Clear student metadata chips and quick action buttons for Edit and Delete.",
            "Clean layout compliant with Algerian transport ministry documentation standards.",
          ],
          image: rokhsaScreen12,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-14",
          number: "12",
          title: "Candidate Payments & Installment Ledger",
          arabicTitle: "سجل دفعات وأقساط المتدرب",
          subtitle: "Total tuition (8,960 DA), paid installments, and remaining balance",
          category: "Exams & Candidates",
          description:
            "A transparent financial ledger tracking student installment payments, receipt timestamps, and remaining account balance.",
          uxHighlights: [
            "Prominent summary card: 'المبلغ الإجمالي 8,960 دج'.",
            "Itemized receipts for each installment with exact payment dates.",
            "Prevents candidate exam registration if required tuition thresholds are unmet.",
          ],
          image: rokhsaScreen13,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-15",
          number: "13",
          title: "School Administrator Profile",
          arabicTitle: "الملف التعريفي لمدير المدرسة",
          subtitle: "License accreditation, school branding, and contact channels",
          category: "School Management",
          description:
            "Owner profile screen detailing driving school accreditation number, commercial phone, email, and geographic location.",
          uxHighlights: [
            "School branding and official administrator avatar.",
            "One-tap phone and email triggers for client inquiries.",
            "Clear accreditation badge establishing state compliance.",
          ],
          image: rokhsaScreen14,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-16",
          number: "14",
          title: "Edit School Profile & Credentials",
          arabicTitle: "تعديل معلومات وبيانات المدرسة",
          subtitle: "Updating school address, commercial phone, and license classes",
          category: "School Management",
          description:
            "Administrative form enabling proprietors to edit school name, commercial phone number, physical address, and offered license classes (A, B, C, D).",
          uxHighlights: [
            "Validated input fields for commercial contact numbers and physical address.",
            "License category selector with multi-class support.",
            "Save button with immediate update feedback.",
          ],
          image: rokhsaScreen15,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-17",
          number: "15",
          title: "Platform Settings & Subscription",
          arabicTitle: "إعدادات التطبيق وخطة الاشتراك",
          subtitle: "Cloud synchronization, billing tier, and alert notifications",
          category: "School Management",
          description:
            "Central settings panel managing cloud backup frequency, active subscription plan, and candidate SMS reminder preferences.",
          uxHighlights: [
            "Subscription tier card displaying active service features.",
            "Granular notification controls for candidate exam alerts.",
            "One-tap data export for tax and transport ministry reporting.",
          ],
          image: rokhsaScreen16,
          aspectRatio: "app",
        },
        {
          id: "rokhsa-screen-18",
          number: "16",
          title: "Advanced Features & Future Roadmap",
          arabicTitle: "ميزات متقدمة قادمة في التحديثات",
          subtitle: "Preview of upcoming GPS fleet tracking and AI exam simulators",
          category: "School Management",
          description:
            "Roadmap notice card previewing upcoming premium features such as real-time GPS tracking for driving school vehicles and AI-powered Highway Code test simulators.",
          uxHighlights: [
            "Friendly maintenance notice: 'هذا الإعداد غير متوفر حالياً! سيتوفر لاحقاً مع تحديثات قادمة'.",
            "Clear roadmap expectation management.",
            "Encourages school owners to request specific workflow additions.",
          ],
          image: rokhsaScreen17,
          aspectRatio: "app",
        },
      ],
      coreFeatures: [
        {
          title: "Centralized School Operations Hub",
          arabicTitle: "إدارة مدرستك من مكان واحد",
          description:
            "Replaced physical ledgers with a cloud-connected dashboard that tracks candidate dossiers, payments, and exam scheduling in real time.",
          impact: "Over 80% reduction in administrative record-keeping time.",
        },
        {
          title: "Frictionless Learner Slot Booking",
          arabicTitle: "حجز حصص السياقة بسهولة",
          description:
            "Learners book practical driving sessions directly from their mobile devices based on real-time instructor and vehicle availability.",
          impact: "Complete elimination of double-booked vehicles and scheduling disputes.",
        },
        {
          title: "Exam Readiness Analytics",
          arabicTitle: "متابعة الجاهزية للامتحان",
          description:
            "Visual tracking separating highway code knowledge tests from required practical road hours, guaranteeing students meet all state standards.",
          impact: "Transparent progress monitoring that elevates candidate test pass rates.",
        },
        {
          title: "Complete Figma Design System",
          arabicTitle: "نظام تصميم شامل ومتجاوب",
          description:
            "Over 20 production-ready screens spanning desktop and mobile viewports with comprehensive component variants, auto layout, and responsive tokens.",
          impact: "Delivered a fully documented design system ready for engineering handoff.",
        },
      ],
    },

    // 06 — Reflection & Learnings
    reflection: {
      challenges: [
        "Designing for varying digital literacy: Driving school owners often have decades of paper-based habits; the desktop dashboard had to feel immediately familiar and reassuring.",
        "Synchronizing two distinct user personas: Creating a unified brand experience that feels rigorous for school administrators yet approachable and modern for young learner drivers.",
        "Navigating local Algerian driving regulations: Accommodating Wilaya-specific licensing workflows, official exam dossiers, and bilingual Arabic/French requirements.",
      ],
      approaches: [
        {
          challenge: "Overcoming Decades of Paper-Based Administrative Habits",
          approach: "Designed the desktop dashboard around intuitive tabular layouts and drag-and-drop calendar slots that mirror physical scheduling books without steep learning curves.",
        },
        {
          challenge: "Synchronizing Administrator and Learner Personas",
          approach: "Engineered a dual-sided architecture: dense high-throughput controls for desktop managers, paired with a fast thumb-friendly mobile app for learner lesson booking.",
        },
        {
          challenge: "Accommodating Algerian Wilaya Transport Regulations",
          approach: "Structured candidate dossiers to strictly match official Ministry of Transport paperwork requirements with bilingual Arabic and French metadata support.",
        },
      ],
      learnings: [
        "Dual-interface systems require designing the shared data model first before drawing individual screens to prevent architectural mismatches.",
        "Component variants in Figma save dozens of hours when designing complex states like calendar time-slots and multi-status candidate tables.",
        "Clear status color-coding (Green for Exam Ready, Amber for In Progress) immediately reduces administrative scanning fatigue.",
      ],
      improvements: [
        "Incorporate an automated SMS / WhatsApp notification engine to remind students of early morning driving sessions.",
        "Add a GPS route tracking feature allowing instructors to review candidate driving routes and parking maneuvers.",
        "Develop an offline practice mode for the mobile Highway Code test simulator.",
      ],
      futurePossibilities: [
        "Direct integration with the Ministry of Transport licensing portal for automated exam date submissions.",
        "AI-assisted mock driving theory exams with personalized mistake analysis.",
        "Fleet OBD-II telemetry integration to monitor vehicle fuel efficiency and brake wear during student sessions.",
      ],
    },
  },
];
