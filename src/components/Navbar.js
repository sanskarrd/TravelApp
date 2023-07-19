import logo from "../images/logo2.jpg";
import { pagelinks, sociallinks } from "../data";
import { socialLinks } from "../data";
const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pagelinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {" "}
                  {link.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((ok) => {
            return (
              <li key={ok.id}>
                <a href={ok.href} target="_blank" className="nav-icon">
                  <i className={ok.class}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default navbar;
