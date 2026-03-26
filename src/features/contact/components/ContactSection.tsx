import { motion } from "framer-motion";
import {
  CallIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
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

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-5 text-center"
    >
      <motion.h2
        className="font-['Itim'] text-[36px] text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="flex items-center gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {socials.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={item.alt}
              className="transition-colors duration-300 hover:text-[#5197ff]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <Icon />
            </motion.a>
          );
        })}
      </motion.div>

      <motion.p
        className="font-['Itim'] text-[16px] lowercase tracking-[0.4px] text-[#a9a9a9] max-[600px]:font-['Inter']"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Loucif tamer Ahmed (c) 2023 All rights reserved.
      </motion.p>
    </footer>
  );
}
