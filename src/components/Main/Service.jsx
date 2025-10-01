import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
  <h2 className="heading">
    <FormattedMessage id="services" defaultMessage="Services" />
  </h2>
  <div className="row">
    <div className="columns" data-aos="fade-up" data-aos-delay="200">
      <i className="fas fa-laptop-code"></i>
      <h3>
        <FormattedMessage id="frontend" defaultMessage="Front-End Development" />
      </h3>
      <p>
        <FormattedMessage
          id="frontend-info"
          defaultMessage="Building responsive, user-friendly websites using modern frameworks like React, ensuring clean and scalable code."
        />
      </p>
    </div>

    <div className="columns" data-aos="fade-up" data-aos-delay="300">
      <i className="fas fa-pencil-ruler"></i>
      <h3>
        <FormattedMessage id="uiux" defaultMessage="UI/UX Integration" />
      </h3>
      <p>
        <FormattedMessage
          id="uiux-info"
          defaultMessage="Translating UI/UX design wireframes into functional, high-quality code to deliver seamless user experiences."
        />
      </p>
    </div>

    <div className="columns" data-aos="fade-up" data-aos-delay="400">
      <i className="fas fa-mobile-alt"></i>
      <h3>
        <FormattedMessage id="responsive" defaultMessage="Responsive Design" />
      </h3>
      <p>
        <FormattedMessage
          id="responsive-info"
          defaultMessage="Developing websites fully optimized for all devices and screen sizes, ensuring accessibility and usability."
        />
      </p>
    </div>

    <div className="columns" data-aos="fade-up" data-aos-delay="500">
      <i className="fas fa-wrench"></i>
      <h3>
        <FormattedMessage id="maintenance" defaultMessage="Web Maintenance" />
      </h3>
      <p>
        <FormattedMessage
          id="maintenance-info"
          defaultMessage="Maintaining and updating websites to fix bugs, add new features, and ensure long-term performance."
        />
      </p>
    </div>

    <div className="columns" data-aos="fade-up" data-aos-delay="600">
      <i className="fas fa-tachometer-alt"></i>
      <h3>
        <FormattedMessage id="optimization" defaultMessage="Website Optimization" />
      </h3>
      <p>
        <FormattedMessage
          id="optimization-info"
          defaultMessage="Improving website performance by optimizing loading speed, images, and code for the best user experience."
        />
      </p>
    </div>
  </div>

  <div className="portafolio-btn">
    <Link to="/service">
      <ButtomGet />
    </Link>
  </div>
</section>

);

export default React.memo(Service);