import tabibImg from "../../../assets/Slide 4_3 - 1.webp";
import splashImg from "../../../assets/case-studies/al-tabib/screen-1-splash.webp";
import onboardingImg from "../../../assets/case-studies/al-tabib/screen-2-onboarding.webp";
import loginImg from "../../../assets/case-studies/al-tabib/screen-3-login.webp";
import dashboardImg from "../../../assets/case-studies/al-tabib/screen-4-dashboard.webp";
import { FigmaIcon } from "../../../constants/Icon";
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
    heroImage: tabibImg,
    tools: [{ label: "Figma", icon: FigmaIcon }],
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    figmaLink: "",

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
          id: "screen-1",
          number: "01",
          title: "Splash & Brand Identity",
          subtitle: "Emblem uniting medical commitment with Quranic dedication",
          description:
            "The launch screen introduces the official emblem of Al-Tabib Al-Hafiz: an intertwined heartbeat pulse, Quranic manuscript, and medical crescent, grounding the user in the core mission of Constantine's Faculty of Medicine.",
          uxHighlights: [
            "Minimalist presentation with generous white background for brand clarity.",
            "Official institutional attribution: 'كلية الطب - قسنطينة'.",
            "Zero loading distraction, swiftly transitioning to the introductory onboarding.",
          ],
          image: splashImg,
        },
        {
          id: "screen-2",
          number: "02",
          title: "Purpose-Driven Onboarding",
          subtitle: "Clear mission framing with gentle visual resonance",
          description:
            "Presents the platform's vision with an artistic Quran bookstand illustration and precise copy: 'An educational platform for medical students, enabling Quran memorization and Islamic study while respecting their medical curriculum and intensive schedules.'",
          uxHighlights: [
            "Calming royal blue background reducing visual stimulation.",
            "High-contrast dual CTAs: 'سجّل الآن' (Register Now) and 'تسجيل الدخول' (Sign In).",
            "Clear value proposition removing ambiguity before account creation.",
          ],
          image: onboardingImg,
        },
        {
          id: "screen-3",
          number: "03",
          title: "Frictionless Authentication",
          subtitle: "Warm, empathetic welcome for returning students",
          description:
            "The login screen features an approachable illustration of a medical student in white coat and stethoscope reading the Holy Quran, accompanied by warm greeting copy: 'We missed you! Sign in and resume your Quranic journey.'",
          uxHighlights: [
            "Clear visual input fields with intuitive envelope and lock icons.",
            "Prominent 'Forgot Password' recovery link preventing login frustration.",
            "Direct navigation escape hatch to return home if needed.",
          ],
          image: loginImg,
        },
        {
          id: "screen-4",
          number: "04",
          title: "Centralized Student Dashboard",
          subtitle: "All essential tools visible in a single, glanceable viewport",
          description:
            "The operational nerve center of the application: personal greeting with student avatar (Ahmed Loucif), active notification bell, search bar, virtual classroom direct launcher, 30-Hizb memorization tracker, and attendance analytics.",
          uxHighlights: [
            "Prominent Virtual Rooms card with 1-click launch to Sheikh Saeed's active session.",
            "Granular memorization metrics: 8 Ahzab & 2 Athman memorized, 2 Ahzab & 7 Athman under review, 74.4 rating.",
            "Visual attendance donut chart tracking 22 total sessions with justified/unjustified absence breakdown.",
            "Ergonomic 5-tab bottom navigation with Home, Circles, Messages, Tracking, and More.",
          ],
          image: dashboardImg,
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
];
