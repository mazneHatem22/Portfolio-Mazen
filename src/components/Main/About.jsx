import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/Mazen Hatem C.V2.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
  <h2 className="heading">
    <FormattedMessage id="about" defaultMessage="About me" />
  </h2>

  <div className="row container">
    {/* الجزء الخاص بالتعريف */}
    <div className="columns" data-aos="fade-right" data-aos-delay="300">
      <h3>
        <FormattedMessage id="im" defaultMessage="Who2 I am" />
      </h3>
      <h4>
        <FormattedMessage
          id="description"
          defaultMessage="My name is Mazen Hatem Hegazi and I am a Front-End Developer."
        />
      </h4>
      <p>
        <FormattedMessage
          id="my-description"
          defaultMessage="I am a freelance Front-End Developer with 1 year of experience. 
          I specialize in translating UI/UX design wireframes into high-quality code, 
          developing user-friendly responsive interfaces, and collaborating with cross-functional teams 
          to deliver clean, scalable solutions."
        />
      </p>
      <ul>
        <li>
          <p>
            <span>
              <FormattedMessage id="years" defaultMessage="Experience:" />
            </span>
            25
          </p>
        </li>
        
        <li>
          <p>
            <span>Email:</span> mazenhatem589@gmail.com
          </p>
        </li>
        <li>
          <p>
            <span>
              <FormattedMessage id="from" defaultMessage="From:" />
            </span>
            Gardenia Compound, Cairo, Egypt
          </p>
        </li>
        <li>
          <p>
            <span>Languages: </span> Arabic (Native), English (Good)
          </p>
        </li>
      </ul>
      <div className="mas-info">
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download="Mazen_Hatem_CV.pdf"
          className="btn-codigo buttonDownload"
        >
          <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
        </a>
        <div className="mas-info-btn">
          <Link to="/about">
            <ButtomGet />
          </Link>
        </div>
      </div>
    </div>

    {/* الجزء الخاص بالمهارات */}
    <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
      <h3>Skills</h3>
      <h4>Front-End</h4>
      <div className="skill">
        <div>
          <img alt="HTML5" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <h5>HTML5</h5>
        </div>
        <div>
          <img alt="CSS3" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <h5>CSS3</h5>
        </div>
        <div>
          <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <img alt="JavaScript" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <h5>JavaScript</h5>
        </div>
        <div>
          <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
          <h5>jQuery</h5>
        </div>
        <div>
          <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <h5>React</h5>
        </div>
        <div>
          <img alt="Redux" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <h5>Redux</h5>
        </div>
        <div>
          <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <h5>Sass</h5>
        </div>
      </div>

      <h4>
        <FormattedMessage id="tools" defaultMessage="Tools" />
      </h4>
      <div className="skill">
        <div>
          <img alt="VS Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" />
          <h5>VS Code</h5>
        </div>
        <div>
          <img alt="Visual Studio" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
          <h5>Visual Studio</h5>
        </div>
        <div>
          <img alt="GitHub" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <h5>GitHub</h5>
        </div>
        <div>
          <img alt="Sublime" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sublime/sublime-original.svg" />
          <h5>Sublime</h5>
        </div>
        <div>
          <img alt="Brackets" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Brackets_Icon.svg" />
          <h5>Brackets</h5>
        </div>
        <div> <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" /> <h5>Git</h5> </div>
      </div>
    </div>
  </div>
</section>

);

export default React.memo(About);