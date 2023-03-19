import styled from 'styled-components';
import TextField from '@mui/material/TextField';



export const StyledTextInput = styled(TextField)`
  && {
    background-color: ${props => props.theme.backgroundMediumDark};

    .MuiInputBase-input {
        color: ${props => props.theme.textActive};
    }

    label{
        color: ${props => props.theme.textActive};
    }

    label.Mui-focused {
        color: ${props => props.theme.textActive};
    }

    & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${props => props.theme.textActive};
    }
  }

    &:hover{
        background-color: ${props => props.theme.backgroundMediumLigkt};
    }
  }
`
