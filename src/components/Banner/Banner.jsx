import bannerImg from '../../assets/images/hero.webp';
import VandilsonImg from '../../assets/images/img-perfil.webp'
import Header from '../Header/Header';

export default function Banner() {
  return (
    <div className="w-full h-screen relative">
        <div className="w-full h-screen bg-cover bg-bottom z-0 " style={{ backgroundImage: `url(${bannerImg})` }}>
            <Header/>
        </div>
        <div className="w-full h-screen bg-[#000000cb] z-10 absolute top-0"></div>

        <div className="">
          <div className="w-full lg:w-[65%] h-1/2 lg:h-full text-white z-20 absolute lg:top-0 top-64 flex flex-col items-center justify-center gap-7">
              <h1 className='flex flex-col text-2xl md:text-3xl lg:text-5xl gap-5'><span>Olá, me chamo <span className='text-[#3BE142]'>Vandilson</span>.</span><span>Sou desenvolvedor front-end.</span></h1>
              <p className='text-[#3BE142] text-xs lg:text-base'>HTML | CSS/Tailwind | JavaScript | REACT</p>
          </div>
          <div className="w-full lg:w-[45%] h-1/2 lg:h-full text-white z-20 absolute lg:top-0 top-10 lg:left-1/2 flex flex-col items-center justify-center lg:ml-8">
              <img className='w-48 lg:w-72 rounded-full' src={VandilsonImg} alt="" />
          </div>
        </div>
    </div>
  )
}
