import { DefaultTheme, createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundLighter: string;
    color: string;
    mainColor: string;
    mainColor_hover: string;
    textColor_Main: string;
  }
}

export const darkTheme: DefaultTheme = {
  background: '#21272F',
  backgroundLighter: '#171C23',
  color: '#00ff77',
  mainColor: '#00BD95',
  mainColor_hover: '#3dff98e8',
  textColor_Main: '#ddd',
};

export const lightTheme: DefaultTheme = {
  background: '#e9e9e9',
  backgroundLighter: '#151515',
  color: '#00ff77',
  mainColor: '#00ff77',
  mainColor_hover: '#3dff98e8',
  textColor_Main: '#131313'
};


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Teko', sans-serif;
    font-size: 24px;
    font-weight: Regular ;
    letter-spacing: 5px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor_Main};
    transition: .3s;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
      display: none;
    }
  }
`

