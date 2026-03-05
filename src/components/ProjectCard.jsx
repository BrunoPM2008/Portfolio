import './ProjectCard.css'
import { FaGithub } from "react-icons/fa";

function ProjectCard({titulo, texto, src, link, stack}){
  return(
    <div className="Project">
      <div>
        <img src={src} alt={`Projeto ${titulo}`} />
        <h1>{titulo}</h1>
      </div>

      <div>
        <p className='text'>{texto}</p>
        <div className="stack">
          {stack}
        </div>
      </div>

      <button onClick={() => window.open(link, '_blank')}>   
        <FaGithub />
        Ver Código
      </button>
    </div>
  )
}

export default ProjectCard