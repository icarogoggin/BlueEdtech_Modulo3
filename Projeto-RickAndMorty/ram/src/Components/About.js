import { Link } from 'react-router-dom'
import eu from '../Img/eu.jpg'

export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h1>Gostou da minha aplicação?</h1>
        <img className="app__about__ram" src="https://j.gifs.com/66EVYN.gif" alt="react" />

        <p className="app__about__main">Me chamo Ícaro Goggin, nascido e criado no interior de pernambuco. Agora, aos 27 anos, estou iniciando minha carreira como dev Front-End com tendencias fullstack.</p>

        <img className="app__about__eu" src={eu} alt="eu" />

        <p className="app__about__close">Vem conhecer meus outros projetos!</p>

        <div className="app__about__links">
          <a href="https://github.com/icarogoggin" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/nolan/452/github.png" alt="github"/>
          </a>

          <a href="https://www.linkedin.com/in/icarogoggin/" target="_blank" rel="noreferrer">
          <img src="https://www12.senado.leg.br/institucional/img/redessociais/linkedin/image" alt="github"/>
          </a>
        </div>



        <Link className="info-button" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}