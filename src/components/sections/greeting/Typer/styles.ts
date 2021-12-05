import styled from 'styled-components';

interface TextsProps {
    customSize?: number;
    customColor?: string;
}

export const Container = styled.div`
    #cursor {
        border-left: .05em solid #ACACAC;
        animation: blink .7s steps(1) infinite;
    }
    
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
`;

export const Texts = styled.span<TextsProps>`
    font-family: ${({ theme }) => theme.font.principal};
    font-size: ${(props) => props.customSize ?  props.customSize + 'px' : '36px'};

    color: ${(props) => props.customColor  ? props.customColor : '#ACACAC'};
`;
