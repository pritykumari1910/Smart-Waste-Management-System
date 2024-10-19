import { FaGithub, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-contacts">
          <p>+91 8789901645</p>
          <p>pritykroy2003@gmail.com</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/pritykumari1910" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sundara_2704/">
            <FaInstagram />
          </a>

          <a href="https://x.com/pritykumar48506">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Made with <FaHeart color="red" /> by Team Sclean
        </p>
      </div>
    </div>
  );
}
