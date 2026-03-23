import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'

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
    </section>
  )
}

export default Sobre
