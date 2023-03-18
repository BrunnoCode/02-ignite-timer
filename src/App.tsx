import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.js'

import { GlobalStyle } from './styles/global.js'
import { defaultTheme } from './styles/themes/default.js'
import { CyclesContextProvider } from './contexts/CyclesContext.js'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
