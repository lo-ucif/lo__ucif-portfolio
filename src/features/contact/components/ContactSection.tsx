import {
  CallIcon,
  InstagramIcon,
  LinkedinIcon,
  GmailIcon,
} from "../../../constants/Icon";

const socials = [
  {
    icon: CallIcon,
    link: "tel:+213676244189",
    alt: "Phone",
  },
  {
    icon: GmailIcon,
    link: "https://mail.google.com/mail/?view=cm&to=louciftamer3@gmail.com",
    alt: "Email",
  },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/ahmed-loucif-757854342",
    alt: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/lo__ucif",
    alt: "Instagram",
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
        {socials.map((item, i) => {
          const Icon = item.icon;

          return (
            <a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={item.alt}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      <p className="font-['Itim'] text-[16px] lowercase tracking-[0.4px] text-[#a9a9a9] max-[600px]:font-['Inter']">
        Loucif tamer Ahmed © 2023 All rights reserved.
      </p>
    </footer>
  );
}
