import Titulo from '../../components/titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={24}>Lucas Lima Brito</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          LucasLBrito
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro de software
        </Descricao>
        <BotaoTema type="button">Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
