import styled from 'styled-components';

import { FlexContainer } from '../../../styles/GeneralComponents';

export const Container = styled(FlexContainer)`
    align-items: center;
    justify-content: space-between;
    
    height: 20vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.black};

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;

        & > span {
            font-size: 12px;
            font-weight: 400;
        }
    }
`;

export const LinksFooterBox = styled(FlexContainer)`
    &  svg {
        cursor: pointer;
        transition: 0.2s;

        color: white;

        margin: 0 20px;
        font-size: 32px;
    }

    &  svg:hover {
       color: ${({ theme }) => theme.color.mediumGray};
       transition: 0.2s;
    }

    @media (max-width: 768px) {
        & svg {
            font-size: 28px;
        }

        margin-bottom: 4vh;
    }
`;