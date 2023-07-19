import { pagelinks, socialLinks } from "../data";

const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pagelinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="footer-icon">
                <i className={link.class}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy;NoidaTrails
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default footer;
