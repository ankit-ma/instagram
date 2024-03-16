import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <Link to="/privacy">Privacy and Policy</Link>
        <Link to="/terms"> Terms and Condition</Link>
      </footer>
    </>
  );
}
export default Footer;
