import { IoEye } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import PropTypes from 'prop-types';

export default function ProjectContainer({ projectName, imageAddress, tecnologies, deployUrl, githubUrl }) {
  return (
      <div className="container-project box  ">
            <p className="font-bold text-xl text-center my-1 tracking-wider">{projectName}</p>
            <img className='w-[280px]  h-[170px]' src={imageAddress} alt="" />
            <div className="w-full h-[40%] flex items-center justify-center">
                <p className="text-sm font-semibold text-center">{tecnologies}</p>
            </div>

            <div className="overlay">
                <div className="w-full flex justify-evenly text-4xl relative -top-7">
                    <a href={`${deployUrl}`} target='_blank' rel="noopener noreferrer">
                        <IoEye className='self-center'/>
                        <span className='absolute left-16 text-sm mt-2'>Ver Demo</span>
                    </a>
                
                    <a href={`${githubUrl}`} target='_blank' rel="noopener noreferrer">
                        <SiGithub />
                        <span className='absolute left-44 text-sm mt-2'>Ver Código</span>
                        
                    </a>
                </div>
            </div>
        </div>
  )
}

ProjectContainer.propTypes = {
    projectName: PropTypes.string,
    imageAddress: PropTypes.string,
    tecnologies: PropTypes.string,
    deployUrl: PropTypes.string,
    githubUrl: PropTypes.string
}
