import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span { 
        /* width: 160px; */
        background: ${({ theme }) => theme.color.black};
        border-radius: 4px;
        padding: 8px;
        opacity: 0; 
        transition: opacity 0.4s;

        text-transform: uppercase;

        position: absolute;
        bottom: calc(100% + 3.5vw);
        left: 50%;
        transform: translateX(-50%);

        &::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-style: solid;
            border-color: ${({ theme }) => theme.color.black} transparent;
            border-width: 6px 6px 0 6px;
        }
    }

    &:hover span {
        opacity: 1;
    }
`;