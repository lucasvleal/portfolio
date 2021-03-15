import styled from 'styled-components';

import { FlexContainer, FlexContainerColumn } from '../GeneralComponents';

export const Container = styled(FlexContainerColumn)`
    background: ${({ theme }) => theme.color.white};
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};
`;

// <GREETING>
export const Greeting = styled.div`
    height: 100vh;

    /* background: red; */
`;

export const Header = styled(FlexContainer)`
    height: 10vh;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
        justify-content: center;
    }

    /* background: blue; */
`;

export const ItemNav = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 8vw;
    text-decoration: none;

    & > span {
        border-bottom: 2px solid transparent;
        cursor: pointer;
    }

    & > span:hover {
        border-bottom: 2px solid black;
    }

    @media (max-width: 768px) {
        width: 30vw;
    }

    /* background: green; */
`;

export const NameAndTitle = styled(FlexContainerColumn)`
    justify-content: center;

    height: 80vh;

    /* background: yellow; */
`;

export const LinksBar = styled(FlexContainer)`
    height: 10vh;

    align-items: center;
    justify-content: center;

    

    /* background: tomato; */
`;

export const LinkSocialMedia = styled.a`
    text-decoration: none;

    & > svg {
        cursor: pointer;
        transition: 0.2s;

        color: black;

        margin: 0 20px;
        font-size: 32px;
    }

    & > svg:hover {
       color: ${({ theme }) => theme.color.mediumGray};
       transition: 0.2s;
    }

    @media (max-width: 768px) {
        & > svg {
            font-size: 24px;
        }
    }
`;




// </GREETING>
