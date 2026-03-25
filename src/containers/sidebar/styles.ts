import styled from 'styled-components'
import Paragrafo from '../../components/Paragrafo'

export const Descricao = styled(Paragrafo)`
  margin-bottom: 40px;
  margin-top: 24px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.cordefundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  border: none;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 40px;
  left: 0;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 40px;
    text-align: center;
  }
`
