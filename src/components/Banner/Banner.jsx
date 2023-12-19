import bannerImg from '../../assets/images/hero.webp';
import VandilsonImg from '../../assets/images/img-perfil.webp'
import Header from '../Header/Header';

export default function Banner() {
  return (
    <div className="w-full h-screen relative">
        <div className="w-full h-screen bg-cover bg-bottom z-0" style={{ backgroundImage: `url(${bannerImg})` }}>
            <Header/>
        </div>
        <div className="w-full h-screen bg-[#000000cb] z-10 absolute top-0"></div>

        <div className="w-[65%] h-full text-white z-20 absolute top-0 flex flex-col items-center justify-center gap-7">
            <h1 className='flex flex-col text-5xl gap-5'><span>Olá, me chamo <span className='text-[#3BE142]'>Vandilson</span>.</span><span>Sou desenvolvedor front-end.</span></h1>
            <p className='text-[#3BE142]'>HTML | CSS/Tailwind | JavaScript | REACT</p>
        </div>
        <div className="w-[45%] h-full text-white z-20 absolute top-0 left-1/2 flex flex-col items-center justify-center ml-8">
            <img className='w-72 rounded-full' src={VandilsonImg} alt="" />
        </div>
    </div>
  )
}
