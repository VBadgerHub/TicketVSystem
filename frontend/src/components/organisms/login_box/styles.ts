import styled from 'styled-components';
import logo from '../../../assets/images/ticketsystemlogo.png'

export const Box = styled.div`
    width: 360px;
    min-height: 500px;
    background-color: ${prop => prop.theme.backgroundDark};
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 7px;
`

export const LogoBox = styled.div`
    width: 360px;
    min-height: 200px;
    background-image: url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
`



export const InpotBox = styled.div`
    width: 360px;
    min-height: 200px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`
