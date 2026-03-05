import './Aboutme.css'
import Card from '../components/card';
import { BiConversation } from "react-icons/bi";
import { MdOutlineBook, MdOutlineVerified } from "react-icons/md";

function Aboutme() {
  return (
    <section className='Aboutme'>
      <div className='content'>

          <h1>Sobre mim</h1>
          <p>
            Olá, me chamo Bruno e sou desenvolvedor cursando engenharia de software. Busco uma oportunidade para contribuir 
            com minhas habilidades no desenvolvimento de sistemas, enquanto continuo evoluindo profissionalmente e 
            agregando valor à equipe.
          </p>

        <div className='cards'>
            <Card 
            text="Comunicação clara e objetiva, facilitando alinhamento técnico e tomada de decisão em equipe."
            title="Comunicativo"
            icon={<BiConversation className='icon'/>}
            />

            <Card 
            text="Busca constante por aprimoramento técnico e boas práticas de desenvolvimento."
            title="Estudo"
            icon={<MdOutlineBook className='icon'/>}
            />

            <Card 
            text="Compromisso com qualidade, clareza e boas práticas em cada etapa do desenvolvimento."
            title="Comprometimento"
            icon={<MdOutlineVerified className='icon'/>}
            />
        </div>
      </div>
    </section>
  )
}
export default Aboutme