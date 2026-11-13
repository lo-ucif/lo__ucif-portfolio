import { motion } from "framer-motion";
import {
  CallIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "../../../constants/Icon";

const socials = [
  {
    icon: CallIcon,
    link: "tel:+213780280208",
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
  {
    icon: WhatsAppIcon,
    link: "https://wa.me/213676244189",
    alt: "WhatsApp",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-6 text-center"
    >
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h2 className="font-['Itim'] text-[36px] text-white">
          Let's Build Something Together.
        </h2>
        <p className="max-w-160 font-['Poppins'] text-[15px] sm:text-[17px] leading-[1.6] text-[#a9a9a9]">
          Have an idea, a project, or an opportunity in mind? I'd love to hear about it. Let's connect and create something meaningful.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <motion.a
          href="mailto:louciftamer3@gmail.com"
          className="inline-block rounded-[38.182px] border border-white bg-white px-[24px] py-[10px] font-['Poppins'] text-[16px] text-[#161513] transition-colors duration-300 hover:bg-transparent hover:text-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          Let's Talk
        </motion.a>
      </motion.div>

      <motion.div
        className="flex items-center gap-8 mt-2"
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
        Ahmed Loucif <br /> 2026 All rights reserved.
      </motion.p>
    </footer>
  );
}
