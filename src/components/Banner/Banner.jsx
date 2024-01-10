import bannerImg from '../../assets/images/hero.webp';
import VandilsonImg from '../../assets/images/img-perfil.webp'
import Header from '../Header/Header';

export default function Banner() {
  return (
    <div className="w-full min-h-screen h-screen lg:h-[700px] relative">
        
        <div className="w-full h-full bg-cover bg-bottom z-0 " style={{ backgroundImage: `url(${bannerImg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Header/>
        </div>
        <div className="w-full h-full bg-[#000000cb] z-10 absolute top-0"></div>

        <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center gap-6 md:gap-20 lg:gap-0 absolute top-0 lg:px-14 lg:mt-8">

          <div className="w-full lg:w-[65%] h-fit lg:h-full text-white z-20 flex flex-col items-center justify-center gap-7 ">
              <h1 className='flex flex-col text-2xl md:text-4xl xl:text-5xl gap-5'><span>Olá, me chamo <span className='text-[#3BE142]'>Vandilson</span>.</span><span>Sou desenvolvedor front-end.</span></h1>
              <p className='text-[#3BE142] text-xs md:text-base'>HTML | CSS/Tailwind | JavaScript | REACT</p>
          </div>
          <div className="w-full lg:w-[45%] h-fit lg:h-full text-white z-20 flex flex-col items-center justify-center -mt-5 lg:mt-0 "> 
              <img className='w-48 md:w-64 xl:w-72 rounded-full' src={VandilsonImg} alt="" />
          </div>
        </div>
    </div>
  )
}
