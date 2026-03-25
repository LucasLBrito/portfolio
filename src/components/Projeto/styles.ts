import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaborda};
  padding: 16px;
`
export const Linkbtn = styled.a`
  color: ${(props) => props.theme.cordefundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoDoBotao};
  padding: 8px;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  margin-top: 24px;
`
