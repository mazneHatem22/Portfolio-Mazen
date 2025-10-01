import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/Mazen Hatem C.V2.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpeg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

     <main>
  <section className="sobre-mi-seccion" id="sobre-mi">
    <div className="sobre-mi-container">
      <div className="sobre-mi-img-container">
        <img src={imgabout} alt="Mazen Hatem" className="sobre-mi-img" />

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download="Mazen_Hatem_CV.pdf"
          className="btn-codigo cv buttonDownload"
        >
          <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
        </a>
      </div>

      <div className="sobre-mi-info">
        <p>
          <FormattedMessage
            id="about-info-1"
            defaultMessage="Hi, I'm Mazen Hatem Hegazi, a freelance Front-End Developer with 1 year of experience. I specialize in creating user-friendly, responsive interfaces and translating UI/UX designs into high-quality code."
          />
        </p>

        <div className="hide parrafo-active">
          <p>
            <FormattedMessage
              id="about-info-2"
              defaultMessage="I’m passionate about front-end development and problem-solving. I constantly improve my skills in HTML, CSS, JavaScript, React, and other modern frameworks to deliver scalable and maintainable code."
            />
          </p>

          <p>
            <FormattedMessage
              id="about-info-3"
              defaultMessage="I have experience working on freelance projects and with teams, building solutions that meet client expectations while maintaining attention to detail and clean coding practices."
            />
          </p>
        </div>

        <div className="btn-info">
          <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}>
            <span>Read more</span>
          </div>
        </div>
      </div>
    </div>

    <div className="skill-seccion">
      <h1 className="heading">Skills</h1>
      <div className="skill-container">
        <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
          <img alt="HTML5" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <h2 className="skill-name">HTML5</h2>
          <p className="skill-info">
            Solid knowledge of semantic HTML, structuring pages, and building accessible web applications.
          </p>
        </div>

        <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
          <img alt="CSS3" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <h2 className="skill-name">CSS3</h2>
          <p className="skill-info">
            Experienced in responsive design, media queries, and modern layouts (Flexbox, Grid).
          </p>
        </div>

        <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
          <img alt="JavaScript" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
          <h2 className="skill-name">JavaScript</h2>
          <p className="skill-info">
            Proficient in building dynamic and interactive web applications with vanilla JS and frameworks.
          </p>
        </div>

        <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
          <img alt="React" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <h2 className="skill-name">React</h2>
          <p className="skill-info">
            Skilled in creating reusable components, state management with Redux, and SPA development.
          </p>
        </div>

        <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
          <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <h2 className="skill-name">Bootstrap</h2>
          <p className="skill-info">
            Used in multiple projects to rapidly create responsive layouts and UI components.
          </p>
        </div>

        <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
          <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <h2 className="skill-name">Sass</h2>
          <p className="skill-info">
            Writing clean, structured, and reusable CSS with variables and mixins for better scalability.
          </p>
        </div>

        <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
          <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
          <h2 className="skill-name">jQuery</h2>
          <p className="skill-info">
            Used to enhance UI interactions and simplify DOM manipulation in legacy projects.
          </p>
        </div>

        <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
          <img alt="Redux" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <h2 className="skill-name">Redux</h2>
          <p className="skill-info">
            Managing complex application states effectively with Redux and React ecosystem.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;