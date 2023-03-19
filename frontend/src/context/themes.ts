import { DefaultTheme, createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundDark: string;
    backgroundMediumDark: string;
    backgroundMediumLigkt: string;
    backgroundLight: string;
    textColorBase: string;
    textColorBase_hover: string;
    textActive: string;
    primary: string;
    primaryDark: string;
    primaryLight: string;
  }
}

export const darkTheme: DefaultTheme = {
  background: '#21272F',
  backgroundDark: '#171C23',
  backgroundMediumDark: '#1c232c',
  backgroundMediumLigkt: '#222a36',
  backgroundLight: '#3b4452',
  textColorBase: '#b3b3b3',
  textColorBase_hover: '#d8d8d8',
  textActive: '#4d617f',
  primary: '#2a5391',
  primaryDark: '#254980',
  primaryLight: '#2d5a9e',
};

export const lightTheme: DefaultTheme = {
  background: '#21272F',
  backgroundDark: '#171C23',
  backgroundMediumDark: '#222a36',
  backgroundMediumLigkt: '#222a36',
  backgroundLight: '#222a36',
  textColorBase: '#00BD95',
  textColorBase_hover: '#3dff98e8',
  textActive: '#4d617f',
  primary: '#2a5391',
  primaryDark: '#254980',
  primaryLight: '#2d5a9e',
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
    color: ${props => props.theme.textColorBase};
    transition: .3s;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
      display: none;
    }
    a{
      text-decoration: none;
      color: ${props => props.theme.primaryDark};
      transition: .3s;
      &:hover{
        color: ${props => props.theme.primaryLight};
      }
    }
  }
`

