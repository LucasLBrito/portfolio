import Titulo from '../../components/titulo'
import Projeto from '../../components/Projeto'
import { List, ListItem } from './styles'

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <List>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
        <ListItem>
          <Projeto />
        </ListItem>
      </List>
    </section>
  )
}

export default Projetos
