import styled from 'styled-components';

interface SpanProsp {
    color?: string,
    textSize?: string;
    letterSpacing?: string;
    mt?: string;
    mb?: string;
}

export const StyledSpan = styled.span<SpanProsp>`
    width: 100%;
    margin-top: ${props => props.mt? props.mt : 0};
    margin-bottom: ${props => props.mb? props.mb : 0};
    font-size: ${props => props.textSize? props.textSize : '14px'};
    color: ${props => props.color? props.color : props.theme.textColorBase};
    letter-spacing: ${props => props.letterSpacing? props.letterSpacing : '1.3px'};
    text-align: center;
`