import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme, GlobalStyle} from '../context/themes';


const App: FC = () => {
  const [theme, setTheme] = useState('dark')

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />      
    </ThemeProvider>
  )
}
export default App
