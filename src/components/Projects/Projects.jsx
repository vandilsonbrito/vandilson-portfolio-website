import vandilsonWebsiteImg from '../../assets/images/vandilson-portfólio.webp';
import janiltonWebsiteImg from '../../assets/images/janilton-website.webp';
import sneakerPageImg from '../../assets/images/sneaker-page.webp';
import wikiSuitsImg from '../../assets/images/Wiki-Suits.webp';
import YouTubeCloneImg from '../../assets/images/YouTube-clone.webp';
import ToDoProjectImg from '../../assets/images/ToDo-project.webp';
import weatherAppImg from '../../assets/images/weather-app.webp';
import TimeTrackingImg from '../../assets/images/time-tracking.webp';
import adviceGeneratorImg from '../../assets/images/advice-generator.webp';
import FAQImg from '../../assets/images/faq.webp';
import feedbackMainImg from '../../assets/images/feedback-main.webp';

import { IoEye } from "react-icons/io5";
import { SiGithub } from "react-icons/si";


export default function Projects() {

  return (
    <div className="w-full h-full flex flex-col gap-24 bg-black text-black px-28 py-20 " id="/Projetos">
        <h2 className="text-5xl text-center text-white">PROJETOS</h2>

        <div className="w-full h-full flex flex-wrap justify-center gap-8 projects">

            <div className="container-project">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Portfólio Vandilson</p>
                <img className='w-[280px] h-[170px]' src={vandilsonWebsiteImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React + React-Router-Dom + Tailwind CSS + React-Scroll</p>
                </div>
    
                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-[120px] text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>
            
            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Prof. Janilton Website</p>
                <img className='w-[280px]  h-[170px]' src={janiltonWebsiteImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React + React-Router-Dom + Tailwind CSS + Prismic CMS + YouTube API + Static Forms + Swiper JS + React-Scroll</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                        <a href='https://profjanilton.com.br/' target='_blank' rel="noopener noreferrer">
                          <IoEye className='self-center'/>
                          <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                        </a>
                  
                        <a href='https://github.com/vandilsonbrito/janilton-website' target='_blank' rel="noopener noreferrer">
                          <SiGithub />
                          <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                          
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Sneaker Page</p>
                <img className='w-[280px]  h-[170px]' src={sneakerPageImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React (Hooks) + Tailwind CSS + Swiper JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://cheerful-sfogliatella-9cf56f.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/29-ecommerce-product-page-main' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Wiki Suits</p>
                <img className='w-[280px]  h-[170px]' src={wikiSuitsImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React + React-Router-Dom + Tailwind CSS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://curious-pegasus-6ad442.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/wiki-suits' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">YB Landing Page Clone</p>
                <img className='w-[280px]  h-[170px]' src={YouTubeCloneImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + YouTube API + JS (Fetch API)</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://thriving-smakager-bcfb72.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/youtube-landing-page' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">ToDo</p>
                <img className='w-[280px]  h-[170px]' src={ToDoProjectImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS + LocalStorage (CRUD)</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://charming-sable-07ef5c.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Advice Generator</p>
                <img className='w-[280px]  h-[170px]' src={adviceGeneratorImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: CSS + JS (Fetch API) + Advice Slip JSON API</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://sunny-salamander-c79eb6.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/23-advice-generator-app-main' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Accordion FAQ</p>
                <img className='w-[280px]  h-[170px]' src={FAQImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS </p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://dynamic-cranachan-63408a.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/09-faq-accordion-card-main' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Weather APP</p>
                <img className='w-[280px]  h-[170px]' src={weatherAppImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + JS + WeatherAPI</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://vocal-churros-ef8b44.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/weatherApp' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Time Tracking Dashboard</p>
                <img className='w-[280px]  h-[170px]' src={TimeTrackingImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + JS (Fetch API)</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://tourmaline-hamster-10e98c.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/24-time-tracking-dashboard-main' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>
            
            <div className="container-project  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Interactive Rating </p>
                <img className='w-[280px]  h-[170px]' src={feedbackMainImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://stellular-dango-3c79d7.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/03-interactive-rating-component-main' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
