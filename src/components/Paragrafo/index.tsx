import { Paragrafo as ParagrafoEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  className?: string
}
// children é tudo que está dentro da tag <Titulo></Titulo>
const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize,
  className
}: Props) => {
  return (
    <ParagrafoEstilo fontSize={fontSize} tipo={tipo} className={className}>
      {children}
    </ParagrafoEstilo>
  )
}

export default Paragrafo
