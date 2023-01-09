import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button.jsx'
import { GlobalStyle } from './styles/global.js'
import { defaultTheme } from './styles/themes/default.js'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
