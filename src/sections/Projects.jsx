import './Projects.css'
import transformFit from '../assets/transformFit.png'
import WIP from '../assets/WIP.webp'
import ProjectCard from '../components/ProjectCard'
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { BsFiletypePhp } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

function Projects() {
  return(
    <section className='Projects'>
      <div className='content'>
        <h1>Meus projetos</h1>
        <p>Aqui alguns de projetos desenvolvidos por mim demonstrando minhas capacidades de Front-end e Back-end</p>

        <div className="projectsViewer">
          <ProjectCard 
          src={transformFit}
          titulo="TransformFit"
          texto="Este projeto foi desenvolvido como projeto integrador da minha formação de tecnico em informatica, 
                nele foi utilizado diversas tecnologias vistas no curso e pesquisadas por fora."
          stack={
            <ul>
            <li><BsFiletypeHtml   id='html'/><p>HTML</p></li>
            <li><BsFiletypeCss id='css'/><p>CSS</p></li>
            <li><BsFiletypePhp  hp id='php'/><p>PHP</p></li>
            <li><GrMysql id='mysql'/><p>MySql</p></li>
            </ul>
          }
          link="https://github.com/BrunoPM2008/TCC-Cedup"
          />

          <ProjectCard 
          src={transformFit}
          titulo="CRUD"
          texto="Este projeto foi desenvolvido com o intuito de aprendizado dos frameWorks Node.js e React"
          stack={
            <ul>
            <li><RiReactjsLine id='react'/><p>React</p></li>
            <li><IoLogoNodejs id='node'/><p>Node.js</p></li>
            <li><BiLogoPostgresql id='postgres'/><p>Postgresql</p></li>
            </ul>
          }
          link="https://github.com/BrunoPM2008/CRUD-Node-React-com-PostgreSQL"
          />

          <ProjectCard 
          src={WIP}
          titulo="Ver perfil"
          texto="Veja meu perfil para acompanhar novidades e mais projetos desenvolvidos."
          link="https://github.com/BrunoPM2008"
          />
      </div>
    </div>
    </section>
  )
}

export default Projects