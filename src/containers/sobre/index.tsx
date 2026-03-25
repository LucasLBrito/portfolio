import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre min</Titulo>
      <Paragrafo tipo="secundario">
        Olá! Sou Lucas Brito, desenvolvedor front-end com experiência em criar
        interfaces modernas e responsivas. Apaixonado por tecnologia e inovação,
        busco constantemente aprender novas ferramentas e metodologias para
        entregar soluções de alta qualidade.
      </Paragrafo>
      <GithubSection>
        <img
          src="https://github-readme-stats.vercel.app/api?username=LucasLBrito&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="imagem de estatísticas do github"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasLBrito&layout=compact&langs_count=7&theme=dracula"
          alt="imagem de linguagens mais usadas"
        />
      </GithubSection>
    </section>
  )
}

export default Sobre
