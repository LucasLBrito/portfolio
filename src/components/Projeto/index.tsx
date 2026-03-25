import Titulo from '../titulo'
import Paragrafo from '../Paragrafo'
import { Card, Linkbtn } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo fontSize={16}>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">
        Projeto desenvolvido para gerenciar tarefas
      </Paragrafo>
      <Linkbtn>Visualizar</Linkbtn>
    </Card>
  )
}

export default Projeto
