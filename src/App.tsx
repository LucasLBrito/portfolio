import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import Projetos from './containers/projetos'
import EstiloGlobal, { Container } from './styles'

function App() {
  const [estaUsandoTemaEscuro, setEstaUsandoTemaEscuro] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaEscuro(!estaUsandoTemaEscuro)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaEscuro ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
