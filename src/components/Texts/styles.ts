import styled from 'styled-components';

interface TextProps {
    customSize?: number;
    customWeight?: number | string;
    customColor?: string;
}

export const Regular = styled.span<TextProps>`
    font-family: ${({ theme }) => theme.font.principal};

    font-size: ${(props) => props.customSize + 'px'};
    font-weight: ${(props) => props.customWeight};
    color: ${(props) => props.customColor};

    @media (max-width: 768px) {
        font-size: ${(props) => (props.customSize * 0.7) + 'px'};
    }
`;

export const Vidaloka = styled.span<TextProps>`
    font-family: ${({ theme }) => theme.font.title};

    font-size: ${(props) => props.customSize + 'px'};
    font-weight: ${(props) => props.customWeight};
    color: ${(props) => props.customColor};

    @media (max-width: 768px) {
        font-size: ${(props) => (props.customSize * 0.7) + 'px'};
    }
`;

export const Montserrat = styled.span<TextProps>`
    font-family: ${({ theme }) => theme.font.secundary};

    font-size: ${(props) => props.customSize + 'px'};
    font-weight: ${(props) => props.customWeight};
    color: ${(props) => props.customColor};

    @media (max-width: 768px) {
        font-size: ${(props) => (props.customSize * 0.7) + 'px'};
    }
`;

