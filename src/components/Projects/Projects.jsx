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
import tipCalculatorImg from '../../assets/images/tip-calculator-app.webp';
import interactiveCardDetailsImg from '../../assets/images/interactive-card-details.webp';
import ageCalculatorImg from '../../assets/images/age-calculator-app.webp';


import { IoEye } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { useEffect } from 'react';


export default function Projects() {

  useEffect(() => {
    const boxes = document.querySelectorAll('.box')

    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 5

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top

            if(boxTop < triggerBottom) {
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
      })
    }
  })

  return (
    <div className="w-full h-full flex flex-col gap-24 bg-black text-black px-5 lg:px-28 py-20 overflow-hidden" id="/Projetos">
        <h2 className="text-4xl lg:text-5xl text-center text-white">PROJETOS</h2>

        <div className="w-full h-full flex flex-wrap justify-center gap-8 projects overflow-x-hidden">

            <div className="container-project box">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Portfólio Vandilson</p>
                <img className='w-[280px] h-[170px]' src={vandilsonWebsiteImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React + React-Router-Dom + Tailwind CSS + React-Scroll</p>
                </div>
    
                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://github.com/vandilsonbrito/vandilson-portfolio-website' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-[120px] text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>
            
            <div className="container-project box  ">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Sneaker Page</p>
                <img className='w-[280px]  h-[170px]' src={sneakerPageImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React (Hooks) + Tailwind CSS + Swiper JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://sneaker-product1.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Wiki Suits</p>
                <img className='w-[280px]  h-[170px]' src={wikiSuitsImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: React + React-Router-Dom + Tailwind CSS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://wiki-suits.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">YB Landing Page Clone</p>
                <img className='w-[280px]  h-[170px]' src={YouTubeCloneImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + YouTube API + JS (Fetch API)</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://youtube-landingpage1.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">ToDo</p>
                <img className='w-[280px]  h-[170px]' src={ToDoProjectImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS + LocalStorage (CRUD)</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://todo-project-localstorage.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Advice Generator</p>
                <img className='w-[280px]  h-[170px]' src={adviceGeneratorImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: CSS + JS (Fetch API) + Advice Slip JSON API</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://advice-generator-app-by-vandilson.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Accordion FAQ</p>
                <img className='w-[280px]  h-[170px]' src={FAQImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS </p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://faq-accordion-by-vandilson.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Weather APP</p>
                <img className='w-[280px]  h-[170px]' src={weatherAppImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + JS + WeatherAPI</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://weather-app-by-vandilson.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Time Tracking Dashboard</p>
                <img className='w-[280px]  h-[170px]' src={TimeTrackingImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + JS (Fetch API)</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://time-tracking-dashboard-by-vandilson.netlify.app/' target='_blank' rel="noopener noreferrer">
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
            
            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Interactive Rating </p>
                <img className='w-[280px]  h-[170px]' src={feedbackMainImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://interactive-rating-feedback.netlify.app/' target='_blank' rel="noopener noreferrer">
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

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Interactive Card Details</p>
                <img className='w-[280px]  h-[170px]' src={interactiveCardDetailsImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + CSS + JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://interactive-card-details1.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/20-interactive-card-details-form-main' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Tip Calculator App</p>
                <img className='w-[280px]  h-[170px]' src={tipCalculatorImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://tip-calculator-by-vandilson.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/25-tip-calculator-app' target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                      </a>
                    </div>
                </div>
            </div>

            <div className="container-project box  ">
                <p className="font-bold text-xl text-center my-1 tracking-wider">Age Calculator App</p>
                <img className='w-[280px]  h-[170px]' src={ageCalculatorImg} alt="" />
                <div className="w-full h-[40%] flex items-center justify-center">
                  <p className="text-sm font-semibold text-center">Tecnologias: HTML + Tailwind CSS + JS</p>
                </div>

                <div className="overlay">
                    <div className="w-full flex justify-evenly text-4xl relative -top-7">
                      <a href='https://age-calculator-by-vandilson.netlify.app/' target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                      </a>
                      <a href='https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/26-age-calculator-app-main' target='_blank' rel="noopener noreferrer">
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
