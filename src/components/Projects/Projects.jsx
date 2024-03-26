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
import deliciasDaCasaImg from '../../assets/images/delicias-da-casa.webp';
import profaPatriciaImg from '../../assets/images/profa-patricia-website.webp';

import { useEffect } from 'react';
import ProjectContainer from '../ProjectContainer/ProjectContainer';


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

            <ProjectContainer 
                projectName={'Delícias da Casa'} 
                imageAddress={deliciasDaCasaImg} 
                tecnologies={"Tecnologias: React + React-Router-Dom + Tailwind CSS + React-Scroll + Stripe + Node JS"} 
                deployUrl={'https://delicias-da-casa.netlify.app/'}
                githubUrl={'https://github.com/vandilsonbrito/delicias-da-casa-website'}
              />

            <ProjectContainer 
                projectName={'Prof. Janilton Website'} 
                imageAddress={janiltonWebsiteImg} 
                tecnologies={"Tecnologias: React + React-Router-Dom + Tailwind CSS + Prismic CMS + YouTube API + Static Forms + Swiper JS + React-Scroll"} 
                deployUrl={'https://profjanilton.com.br/'}
                githubUrl={'https://github.com/vandilsonbrito/janilton-website'}
              />

            <ProjectContainer 
                projectName={'Profa. Patrícia Website'} 
                imageAddress={profaPatriciaImg} 
                tecnologies={"Tecnologias: React + React-Router-Dom + Tailwind CSS + React-Scroll + Swiper JS + YouTube API"} 
                deployUrl={'https://profapatriciacruz.com.br/'}
                githubUrl={'https://github.com/vandilsonbrito/patricia-website'}
              />

            <ProjectContainer 
                projectName={'Portfólio Vandilson'} 
                imageAddress={vandilsonWebsiteImg} 
                tecnologies={"Tecnologias: React + React-Router-Dom + Tailwind CSS + React-Scroll"} 
                deployUrl={''}
                githubUrl={'https://github.com/vandilsonbrito/vandilson-portfolio-website'}
              />
              
            <ProjectContainer 
              projectName={'Sneaker Page'} 
              imageAddress={sneakerPageImg} 
              tecnologies={"Tecnologias: React (Hooks) + Tailwind CSS + Swiper JS"} 
              deployUrl={'https://sneaker-product1.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/29-ecommerce-product-page-main'}
            />
            
            <ProjectContainer 
              projectName={'Wiki Suits'} 
              imageAddress={wikiSuitsImg} 
              tecnologies={"Tecnologias: React + React-Router-Dom + Tailwind CSS"} 
              deployUrl={'https://wiki-suits.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/wiki-suits'}
            />

            <ProjectContainer 
              projectName={'YB Landing Page Clone'} 
              imageAddress={YouTubeCloneImg} 
              tecnologies={"Tecnologias: HTML + Tailwind CSS + YouTube API + JS (Fetch API)"} 
              deployUrl={'https://youtube-landingpage1.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/youtube-landing-page'}
            />

            <ProjectContainer 
              projectName={'ToDo'} 
              imageAddress={ToDoProjectImg} 
              tecnologies={"Tecnologias: HTML + CSS + JS + LocalStorage (CRUD)"} 
              deployUrl={'https://todo-project-localstorage.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/to-do-project'}
            />
  
            <ProjectContainer 
              projectName={'Advice Generator'} 
              imageAddress={adviceGeneratorImg} 
              tecnologies={"Tecnologias: CSS + JS (Fetch API) + Advice Slip JSON API"} 
              deployUrl={'https://advice-generator-app-by-vandilson.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/23-advice-generator-app-main'}
            />

            <ProjectContainer 
              projectName={'Accordion FAQ'} 
              imageAddress={FAQImg} 
              tecnologies={"Tecnologias: HTML + CSS + JS"} 
              deployUrl={'https://faq-accordion-by-vandilson.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/09-faq-accordion-card-main'}
            />
          
            <ProjectContainer 
              projectName={'Weather APP'} 
              imageAddress={weatherAppImg} 
              tecnologies={"Tecnologias: HTML + Tailwind CSS + JS + WeatherAPI"} 
              deployUrl={'https://weather-app-by-vandilson.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/weatherApp'}
            />

            <ProjectContainer 
              projectName={'Time Tracking Dashboard'} 
              imageAddress={TimeTrackingImg} 
              tecnologies={"Tecnologias: HTML + Tailwind CSS + JS (Fetch API)"} 
              deployUrl={'https://time-tracking-dashboard-by-vandilson.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/24-time-tracking-dashboard-main'}
            />

            <ProjectContainer 
              projectName={'Interactive Rating'} 
              imageAddress={feedbackMainImg} 
              tecnologies={"Tecnologias: HTML + CSS + JS"} 
              deployUrl={'https://interactive-rating-feedback.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/03-interactive-rating-component-main'}
            />
          
            <ProjectContainer 
              projectName={'Interactive Card Details'} 
              imageAddress={interactiveCardDetailsImg} 
              tecnologies={"Tecnologias: HTML + CSS + JS"} 
              deployUrl={'https://interactive-card-details1.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/20-interactive-card-details-form-main'}
            />

            <ProjectContainer 
              projectName={'Tip Calculator App'} 
              imageAddress={tipCalculatorImg} 
              tecnologies={"Tecnologias: HTML + Tailwind CSS + JS"} 
              deployUrl={'https://tip-calculator-by-vandilson.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/25-tip-calculator-app'}
            />

            <ProjectContainer 
              projectName={'Age Calculator App'} 
              imageAddress={ageCalculatorImg} 
              tecnologies={"Tecnologias: HTML + Tailwind CSS + JS"} 
              deployUrl={'https://age-calculator-by-vandilson.netlify.app/'}
              githubUrl={'https://github.com/vandilsonbrito/Projects-Frontendmentor/tree/main/26-age-calculator-app-main'}
            />
           
        </div>
    </div>
  )
}
