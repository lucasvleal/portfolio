import styled from 'styled-components';

import theme from '../../../styles/themes/principal';

interface LinkProps {
    color: string;
    bold: boolean;
}

export const Link = styled.a<LinkProps>`
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.color};
    border-bottom: 2px dashed ${theme.color.lightGray};
    font-weight: ${(props) => props.bold ? 'bold' : '400'};
    padding-bottom: 2px;
    width: 100%;

    &:hover {
        border-bottom: 2px solid black;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;