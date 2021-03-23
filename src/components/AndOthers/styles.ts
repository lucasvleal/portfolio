import styled from 'styled-components';

export const Container = styled.div`
    width: 34px;
    height: 34px;
    margin: 0 8px;

    #tooltip {
        position: relative;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 8vw;
            padding: 8px 0;
            background: ${({ theme }) => theme.color.black};
            border-radius: 4px;

            opacity: 0; 
            transition: opacity 0.4s;
            visibility: hidden;

            text-transform: uppercase;

            position: absolute;
            bottom: calc(100% + 1.5vw);
            left: 50%;
            transform: translateX(-55%);

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

            @media (max-width: 768px) {
                width: 24vw;
                bottom: calc(100% + 4.5vw);
                font-size: 10px;
            }
        }        
    }

    &:hover #tooltip span {
        opacity: 1;
        visibility: visible;
    }
`;

