import styled from 'styled-components';

interface ContainerProps {
    style: 'light' | 'dark';
}

export const Container = styled.a<ContainerProps>`
    text-decoration: none;

    & > svg {
        cursor: pointer;
        transition: 0.2s;

        color: ${(props) => props.style === 'light' ? '#FFF' : '#000'};

        margin: 0 20px;
        font-size: 32px;
    }

    & > svg:hover {
       color: ${({ theme }) => theme.color.mediumGray};
       transition: 0.2s;
    }

    @media (max-width: 768px) {
        & > svg {
            font-size: 28px;
        }
    }
`;