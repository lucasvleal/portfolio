import styled from 'styled-components';
import { Link } from 'react-scroll';

import { FlexContainer } from '../../../styles/GeneralComponents';

export const Container = styled(FlexContainer)`
    height: 10vh;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
        justify-content: center;
    }

    /* background: blue; */
`;

export const ItemNav = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 8vw;
    text-decoration: none;

    & > span {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        color: black;
    }

    & > span:hover {
        border-bottom: 2px solid black;
    }

    @media (max-width: 768px) {
        width: 30vw;

        & > span {
            font-size: 16px;
        }
    }

    /* background: green; */
`;