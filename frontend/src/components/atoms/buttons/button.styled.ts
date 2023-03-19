import styled from 'styled-components';
import { Button } from '@mui/material';



export const ButtonSolid = styled(Button)`
  && {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textColorBase};

    &:hover{
        background-color: ${props => props.theme.primaryDark};
    }
  }
`
