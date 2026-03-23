import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}
// children é tudo que está dentro da tag <Titulo></Titulo>
const Titulo = (props: Props) => {
  return <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
}

export default Titulo
