type Props = {
  children: string
}
// children é tudo que está dentro da tag <Titulo></Titulo>
const Titulo = (props: Props) => {
  return <span>{props.children}</span>
}

export default Titulo
