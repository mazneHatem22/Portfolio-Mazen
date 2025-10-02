import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Movie-App.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Movie App</h3>
                            
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> Bootstrap
                                <span> -</span> Js
                            </p>
                            <a href="https://movies-app-five-psi.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mazneHatem22/Movies_app.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./COVID-19.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>COVID-19</h3>
                           
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> jQuery
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://maznehatem22.github.io/Corona/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mazneHatem22/Corona.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Stoture.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Stoture</h3>
                           
                            <p className="tecnologias">
                                React
                                 <span> -</span> CSS
                                <span> -</span> Bootstrap
                                <span> -</span> Js
                            </p>
                            <a href="https://stoturee.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PI-DOGS-MAIN" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Bio-Medic.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Bio Medic</h3>
                            
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> Bootstrap
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://bio-medic.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/mazneHatem22/Bio-Medic.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./E-Connect.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>E Connect</h3>
                           
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://econnect-africa.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            {/* <a href="https://github.com/Nahuel61920/Spider-Man" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Dashboard-Mighty.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Dashboard Mighty</h3>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://mighty-portal.azurewebsites.net//Mighty" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            {/* <a href="https://github.com/Nahuel61920/EveryRunning" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Dashboard-Econneect.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Dashboard-Econneect</h3>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://portal-sudan.azurewebsites.net/Econnect" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            {/* <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
                        </div>
                    </SwiperSlide>
                  
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);