import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 40px;
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;

  img {
    height: 180px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
