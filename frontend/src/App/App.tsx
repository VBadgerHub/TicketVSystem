import { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme, GlobalStyle} from '../context/themes';
import LoginBox from '../components/organisms/login_box'

const App: FC = () => {
  const [theme, setTheme] = useState('dark')
  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />  
      <Center>
        <LoginBox /> 
      </Center>
    </ThemeProvider>
  )
}
export default App
