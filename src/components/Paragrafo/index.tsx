import { Paragrafo as ParagrafoEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}
// children é tudo que está dentro da tag <Titulo></Titulo>
const Paragrafo = ({ children, tipo = 'principal' }: Props) => {
  return <ParagrafoEstilo tipo={tipo}>{children}</ParagrafoEstilo>
}

export default Paragrafo
