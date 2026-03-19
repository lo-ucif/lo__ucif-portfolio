import { assets } from "../../../constants/assets";
const socials = [
  {
    desktop: assets.phoneIcon,
    mobile: assets.phoneIconMobile,
    link: "tel:+213676244189",
    alt: "Phone",
  },
  {
    desktop: assets.gmailIcon,
    mobile: assets.gmailIconMobile,
    link: "https://mail.google.com/mail/?view=cm&to=louciftamer3@gmail.com",
    alt: "Email",
  },
  {
    desktop: assets.linkedinIcon,
    mobile: assets.linkedinIconMobile,
    link: "https://www.linkedin.com/in/ahmed-loucif-757854342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    alt: "LinkedIn",
  },
  {
    desktop: assets.dribbbleIcon,
    mobile: assets.dribbbleIconMobile,
    link: "https://www.instagram.com/lo__ucif?igsh=eHhiZXZmczN2YXhi",
    alt: "instagram",
  },
];

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-5 text-center"
    >
      <h2 className="font-['Itim'] text-[36px] text-white">Contact</h2>
      <div className="flex items-center gap-10">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : ""}
            rel="noopener noreferrer"
          >
            {/* Desktop */}
            <img
              className="h-[25px] w-[25px] max-[600px]:hidden hover:scale-120 transition"
              src={item.desktop}
              alt={item.alt}
              loading="lazy"
            />

            {/* Mobile */}
            <img
              className="hidden h-[25px] w-[25px] max-[600px]:block hover:scale-110 transition"
              src={item.mobile}
              alt={item.alt}
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <p className="font-['Itim'] text-[16px] lowercase tracking-[0.4px] text-[#a9a9a9] max-[600px]:font-['Inter']">
        Loucif tamer Ahmed (c) 2023 All rights reserved.
      </p>
    </footer>
  );
}
