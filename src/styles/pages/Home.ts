import styled from 'styled-components';

import { FlexContainer, FlexContainerColumn } from '../GeneralComponents';

export const Container = styled(FlexContainerColumn)`
    background: ${({ theme }) => theme.color.white};
`;

// <GREETING>
export const Greeting = styled.div`
    height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

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
        color: black;
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

// <ABOUT>
export const About = styled.div`
    height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.backgroundColored};
`;

export const TitleBox = styled(FlexContainer)`
    justify-content: center;
    align-items: center;

    height: 20vh;

    /* background-color: red; */
`;

export const AboutBox = styled.div`
    line-height: 40px;
    font-size: ${({ theme }) => theme.size.font.normal};

    /* background-color: red; */
`;

export const KnowledgeBox = styled.div`
    padding-top: 40px;
`;

export const KnowledgeLine = styled(FlexContainer)`
    align-items: center;

    margin-top: 20px;
`;

export const KnowledgeTitle = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */

    padding: 1vh 0;
    width: 12vw;
    margin-right: 1vw;
    border: 2px solid black;
    border-radius: 5px;

    text-align: center;
    font-weight: bold;
`;

export const KnowledgeItems = styled(FlexContainer)`
    span { 
        display: flex;
        align-items: center;

        font-size: 4px;
    }
`;

export const Item = styled.div`
    margin: 0 8px;
`;
// </ABOUT>

// <WORK>
export const Work = styled.div`
    height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.white};
`;
// </WORK>

// <CONTACT>
export const Contact = styled.div`
    height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.backgroundColored};
`;
// </CONTACT>

// <FOOTER>
export const Footer = styled(FlexContainer)`
    align-items: center;
    justify-content: space-between;
    
    height: 20vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.black};
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
            font-size: 24px;
        }
    }
`;
// </FOOTER>



