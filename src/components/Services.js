import { aboutlinks } from "../data";

const services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          why visit <span>Noida?</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {aboutlinks.map((link) => {
          return (
            <article className="service" key={link.id}>
              <span className="service-icon">
                <i className={link.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{link.text}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
        ;
      </div>
    </section>
  );
};
export default services;
