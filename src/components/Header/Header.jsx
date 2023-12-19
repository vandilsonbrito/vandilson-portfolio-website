import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="w-full h-20 flex justify-center">
        <nav className="w-1/2 h-20 flex items-center justify-between  bg-transparent absolute top-0 z-30 text-white">
            <Link to='/Sobre' smooth={true} duration={500} className="cursor-pointer">SOBRE</Link>
            <Link to='/Projetos' smooth={true} duration={500} className="cursor-pointer">PROJETOS</Link>
            <Link to='/Contatos' smooth={true} duration={500} className="cursor-pointer">CONTATOS</Link>
        </nav>
    </header>
  )
}
