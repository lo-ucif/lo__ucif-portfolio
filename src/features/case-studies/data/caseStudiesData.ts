import rokhsaImg from "../../../assets/ChatGPT Image Aug 5, 2026, 11_48_00 PM 13.webp";
import tabibMockup from "../../../assets/case-studies/mockups/al-tabib-transparent.webp";
import tabibFramed from "../../../assets/case-studies/mockups/al-tabib-framed.webp";
import rokhsaMockup from "../../../assets/case-studies/mockups/rokhsa-transparent.webp";
import rokhsaFramed from "../../../assets/case-studies/mockups/rokhsa-framed.webp";
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
    id: "2",
    slug: "rokhsa",
    title: "Rokhsa — Smart Driving School Platform",
    arabicTitle: "رخصة — منصة ذكية لمدارس تعليم السياقة",
    subtitle: "Modern Web Dashboard & Mobile Ecosystem for Driving Education",
    shortDescription:
      "A smart platform that digitizes driving school operations, lesson bookings, and student tracking.",
    projectType: "Web App & Mobile Platform",
    platformType: "web",
    role: "UI/UX Designer",
    designResponsibilities: [
      "User Research",
      "User Interface Design",
      "User Experience Design",
      "Design System & Tokens",
      "Responsive Desktop Dashboard",
      "Learner Mobile App",
      "Figma High-Fidelity Prototype",
    ],
    mainDesignFocus:
      "Dual-interface architecture digitizing driving school operations across desktop management and mobile student booking.",
    platform: "Responsive Web & Mobile",
    timeline: "2026",
    organization: "Driving Education Ecosystem",
    heroImage: rokhsaMockup,
    mockupImage: rokhsaMockup,
    framedMockupImage: rokhsaFramed,
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
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uxdesign-figma-ugcPost-7490915921327198208-KWqx/",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=585-131",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uxdesign-figma-ugcPost-7490915921327198208-KWqx/",

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
          id: "rokhsa-screen-1",
          number: "01",
          title: "Centralized Web Management Dashboard",
          subtitle: "All driving school operations in one unified desktop command center",
          description:
            "The web dashboard enables school administrators to manage candidates, assign instructors, monitor vehicle fleets, and review real-time revenue and exam pass rates from any browser.",
          uxHighlights: [
            "High-impact Arabic branding banner: 'إدارة مدرستك من مكان واحد'.",
            "At-a-glance metrics for candidates, exams, payments, and appointments.",
            "Direct action button 'سجل الآن' with responsive web scaling.",
          ],
          image: rokhsaImg,
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
