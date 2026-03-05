import './Hero.css'
import Infinite from '../components/Infinite'
import ParticlesContainer from '../components/ParticlesContainer'

function Hero() {
  return (
    <section className='Hero'>
      <ParticlesContainer />
      <Infinite />
      <div className='content'>
        <div className='top'>
          <h1>Bruno Possamai Moro</h1>
          <span>Desenvolvedor <strong>Full Stack</strong></span>
        </div>
        <div className='bottom'>
          <button onClick={() => document.querySelector(".Projects").scrollIntoView({ behavior: "smooth" })}>
              Ver Projetos
          </button>
            
          <button onClick={() => document.querySelector(".Contact").scrollIntoView({ behavior: "smooth" })}>
            Contato
          </button>
        </div>
      </div>

    </section>
  )
}
export default Hero
