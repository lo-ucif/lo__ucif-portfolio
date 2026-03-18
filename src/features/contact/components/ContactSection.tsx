import { assets } from "../../../constants/assets";

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-[20px] text-center"
    >
      <h2 className="font-['Itim'] text-[36px] text-white">
        Contact
      </h2>
      <div className="flex items-center gap-[40px]">
        <img
          className="hidden h-[25px] w-[25px] max-[600px]:block"
          src={assets.phoneIconMobile}
          alt=""
        />
        <img
          className="hidden h-[25px] w-[25px] max-[600px]:block"
          src={assets.gmailIconMobile}
          alt=""
        />
        <img
          className="hidden h-[25px] w-[25px] max-[600px]:block"
          src={assets.linkedinIconMobile}
          alt=""
        />
        <img
          className="hidden h-[22.97px] w-[22.97px] max-[600px]:block"
          src={assets.dribbbleIconMobile}
          alt=""
        />

        <img
          className="h-[25px] w-[25px] max-[600px]:hidden"
          src={assets.phoneIcon}
          alt=""
        />
        <img
          className="h-[25px] w-[25px] max-[600px]:hidden"
          src={assets.gmailIcon}
          alt=""
        />
        <img
          className="h-[25px] w-[25px] max-[600px]:hidden"
          src={assets.linkedinIcon}
          alt=""
        />
        <img
          className="h-[25px] w-[25px] max-[600px]:hidden"
          src={assets.dribbbleIcon}
          alt=""
        />
      </div>
      <p className="font-['Itim'] text-[16px] lowercase tracking-[0.4px] text-[#a9a9a9] max-[600px]:font-['Inter']">
        Loucif tamer Ahmed© 2023 All rights reserved.
      </p>
    </footer>
  );
}
