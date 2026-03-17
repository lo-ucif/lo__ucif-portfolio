import { assets } from "../../../constants/assets";

export function ContactSection() {
  return (
    <footer id="contact" className="footer">
      <h2>Contact</h2>
      <div className="footer-icons">
        <img className="img-desktop" src={assets.phoneIcon} alt="" />
        <img className="img-desktop" src={assets.gmailIcon} alt="" />
        <img className="img-desktop" src={assets.linkedinIcon} alt="" />
        <img className="img-desktop" src={assets.dribbbleIcon} alt="" />
        <img className="img-mobile" src={assets.phoneIconMobile} alt="" />
        <img className="img-mobile" src={assets.gmailIconMobile} alt="" />
        <img className="img-mobile" src={assets.linkedinIconMobile} alt="" />
        <img className="img-mobile" src={assets.dribbbleIconMobile} alt="" />
      </div>
      <p className="footer-note">Loucif tamer Ahmed© 2023 All rights reserved.</p>
    </footer>
  );
}
