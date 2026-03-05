import Chip from '../components/chip'
import './Stack.css'
import { 
  RiHtml5Fill, 
  RiCss3Fill, 
  RiJavascriptFill, 
  RiPhpLine, 
  RiReactjsLine, 
  RiNodejsLine,
  RiGithubFill
} from 'react-icons/ri';
import { SiMysql, SiPostgresql, SiGit } from 'react-icons/si';

function Stack(){
  return(
    <section className='Stack'>
      <div className='texts'>
        <h1>Tecnologias & Experiência</h1>
        <p>Principais tecnologias e ferramentas que utilizo no desenvolvimento de soluções <span>fullstack</span>.</p>
      </div>
      <div className="languages">
        <Chip language="Html" icon={<RiHtml5Fill id='html' />}/>
        <Chip language="Css" icon={<RiCss3Fill id='css' />} />
        <Chip language="JavaScript" icon={<RiJavascriptFill id='js' />} />
        <Chip language="Php" icon={<RiPhpLine id='php' />} />
        <Chip language="React" icon={<RiReactjsLine id='react' />} />
        <Chip language="Node.js" icon={<RiNodejsLine id='node' />} />
        <Chip language="MySQL" icon={<SiMysql id='mysql' />} />
        <Chip language="PostgreSQL" icon={<SiPostgresql id='postgres' />} />
        <Chip language="GitHub" icon={<RiGithubFill id='github' />} />
        <Chip language="Git" icon={<SiGit id='git' />} />
      </div>
      <p>*Obs: Ver a tabela no curriculo para mais informações em cada linguagem de programação*</p>
    </section>
  )
}

export default Stack