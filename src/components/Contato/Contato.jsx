import { FaLinkedin  } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";


export default function Footer() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-28 bg-white text-black pt-20 pb-24 px-20" id="/Contatos">
        <h2 className="text-5xl">CONTATOS</h2>
        <div className="w-full h-full flex items-center justify-evenly text-4xl">
            <a href="https://www.linkedin.com/in/vandilson-brito-b791b3216/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-800 ease-in-out duration-200"/>
            </a>
            <a href="https://github.com/vandilsonbrito" target="_blank" rel="noopener noreferrer">
                <SiGithub className="hover:text-slate-600 ease-in-out duration-200"/>
            </a>
            <a href="https://www.instagram.com/frontendvan/" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram  className="hover:text-pink-500 ease-in-out duration-200"/>
            </a>
            <a href="mailto:vandilson25@outlook.com" target="_blank" rel="noopener noreferrer">
                <MdOutlineMail  className="hover:text-slate-500 ease-in-out duration-200"/>
            </a>
        </div>
    </div>
  )
}
