import * as S from './styles'
import * as D from '../../atoms/buttons/button.styled'
import * as X from '../../atoms/inputs/text.stylex'
import * as E from '../../atoms/elements'
import { Link } from 'react-router-dom'

const index = () => {
  return (
   <S.Box>
    <S.LogoBox />
    <E.StyledSpan letterSpacing='4px' mt='-20px' mb='10px'>Your key to better organization</E.StyledSpan>
    <S.InpotBox>
        <X.StyledTextInput label="Login" variant="outlined"/>
        <X.StyledTextInput type='password' label="Hasło" variant="outlined"/>
    </S.InpotBox>
        <D.ButtonSolid>LOGIN</D.ButtonSolid>
        <E.StyledSpan mt='12px' letterSpacing='1px'>
            "Do you not have an account? <Link to=''> Register </Link>now!"
        </E.StyledSpan>
   </S.Box>
  )
}
export default index