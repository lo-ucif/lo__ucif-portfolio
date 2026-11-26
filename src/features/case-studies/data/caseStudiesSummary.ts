import tabibMockup from "@/assets/case-studies/mockups/al-tabib-transparent.webp";
import rokhsaMockup from "@/assets/case-studies/mockups/rokhsa-transparent.webp";
import hafezMockup from "@/assets/case-studies/mockups/7afez-transparent.webp";
import hafezLaptopLeft from "@/assets/case-studies/mockups/7afez-laptop-left.webp";
import hafezLaptopRight from "@/assets/case-studies/mockups/7afez-laptop-right.webp";
import tabibPhoneLeft from "@/assets/case-studies/mockups/phones/tabib-left.webp";
import tabibPhoneCenter from "@/assets/case-studies/mockups/phones/tabib-center.webp";
import tabibPhoneRight from "@/assets/case-studies/mockups/phones/tabib-right.webp";
import rokhsaPhoneLeft from "@/assets/case-studies/mockups/phones/rokhsa-left.webp";
import rokhsaPhoneCenter from "@/assets/case-studies/mockups/phones/rokhsa-center.webp";
import rokhsaPhoneRight from "@/assets/case-studies/mockups/phones/rokhsa-right.webp";
import type { CaseStudySummary } from "@/features/case-studies/types";

export const caseStudySummaries: CaseStudySummary[] = [
  {
    id: "1",
    slug: "al-tabib-al-hafiz",
    title: "Al-Tabib Al-Hafiz",
    arabicTitle: "الطبيب الحافظ",
    shortDescription:
      "A digital platform designed to help medical students organize and manage their Quran memorization journey.",
    platformType: "app",
    role: "UI/UX Designer",
    organization: "Faculty of Medicine — Constantine (كلية الطب - قسنطينة)",
    heroImage: tabibMockup,
    mockupImage: tabibMockup,
    phoneMockups: {
      left: tabibPhoneLeft,
      center: tabibPhoneCenter,
      right: tabibPhoneRight,
    },
    presentationHeading: "Mobile Presentation",
    liveDemo:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=585-24",
  },
  {
    id: "3",
    slug: "7afez-web",
    title: "7afez Web Platform",
    arabicTitle: "منصة حافظ — المنظومة السحابية",
    shortDescription:
      "A dedicated cloud web platform designed to streamline Quran memorization, coordinate academic halaqat, and connect students with certified instructors.",
    platformType: "web",
    presentationHeading: "Web & Brand Presentation",
    role: "UI/UX Designer",
    organization: "Quranic Circles (المدارس القرآنية)",
    heroImage: hafezMockup,
    mockupImage: hafezMockup,
    laptopMockups: {
      left: hafezLaptopLeft,
      right: hafezLaptopRight,
    },
    liveDemo: "https://7afez.platform",
    linkedin:
      "https://www.linkedin.com/posts/ahmed-loucif-757854342_Ui/Ux Design-uidesign-uxdesign-activity-7492710718945943552-9YBE",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=595-449&t=4FLL2zwFHHIvH7Z5-4",
    behanceLink: "https://www.behance.net/gallery/256578087/_",
  },
  {
    id: "2",
    slug: "rokhsa",
    title: "Rokhsa — Smart Driving School Platform",
    arabicTitle: "رخصة — منصة ذكية لمدارس تعليم السياقة",
    shortDescription:
      "A smart mobile platform that digitizes driving school operations, lesson bookings, and student tracking.",
    platformType: "app",
    role: "UI/UX Designer",
    organization: "Driving Education Ecosystem",
    heroImage: rokhsaMockup,
    mockupImage: rokhsaMockup,
    phoneMockups: {
      left: rokhsaPhoneLeft,
      center: rokhsaPhoneCenter,
      right: rokhsaPhoneRight,
    },
    presentationHeading: "Mobile Presentation",
    liveDemo: "https://lnkd.in/p/dz_eNQ82",
    figmaLink:
      "https://www.figma.com/design/hx4E6cZLWqvRjPWsZ5nXpN/my-portfolio?node-id=585-131",
    linkedin: "https://lnkd.in/p/dz_eNQ82",
  },
];
