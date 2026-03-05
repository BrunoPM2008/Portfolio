import './Contact.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="Contact">
        <div className='texts'>
        <h1>Vamos trabalhar juntos?</h1>
        <p>
          Se você gostou do meu currículo e portfólio, saiba que estou em busca de novas oportunidades! Sinta-se à vontade para entrar em contato por qualquer um dos meios abaixo. Responderei com muito prazer.
        </p>
        </div>
        <button className='btn' onClick={() => window.href("mailto:bruno121215@email.com")}>Entre em contato</button>
        <hr />
        <div className="links">
        <a href='mailto:bruno121215@email.com'><MdEmail />Gmail</a>
        <a href='https://www.linkedin.com/in/bruno-possamai-moro/' target='_blank'><FaLinkedin />Linkdin</a>
        <a href='https://github.com/BrunoPM2008' target='_blank'><FaGithub />Github</a>
        </div>
    </section>
  )
}

export default Contact