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

        & > span {
            font-size: 16px;
        }
    }

    /* background: green; */
`;

export const NameAndTitle = styled(FlexContainerColumn)`
    justify-content: center;

    height: 80vh;

    @media (max-width: 768px) {
        width: 30vw;

        & > span {
            font-size: 60px;
            width: 90vw;
        }

        & > div  {
            width: 90vw;
        }

        & > div > span {
            font-size: 20px;

        }
    }
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
            font-size: 28px;
        }
    }
`;
// </GREETING>

// <ABOUT>
export const About = styled.div`
    min-height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.backgroundColored};

    /* @media (max-width: 768px) {
        min-height: 100vh;
    } */
`;

export const TitleBox = styled(FlexContainer)`
    justify-content: center;
    align-items: center;

    height: 20vh;

    @media (max-width: 768px) {
        & > span {
            font-size: 60px;
        }
    }
    /* background-color: red; */
`;

export const AboutBox = styled.div`
    line-height: 40px;
    font-size: ${({ theme }) => theme.size.font.normal};


    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 36px;
    }

    /* background-color: red; */
`;

export const KnowledgeBox = styled.div`
    padding-top: 40px;

    /* background: blue; */

    @media (max-width: 768px) {
        padding-top: 0;
        padding: 10px 0;
    }
`;

export const KnowledgeLine = styled(FlexContainer)`
    align-items: center;

    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        /* margin-bottom: 5vh; */
    }
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

    @media (max-width: 768px) {
        width: 100%;
        margin: 2vh 0;

    }
`;

export const KnowledgeItems = styled(FlexContainer)`
    span { 
        display: flex;
        align-items: center;

        font-size: 4px;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Item = styled.div`
    margin: 0 8px;
`;
// </ABOUT>

// <WORK>
export const Work = styled.div`
    min-height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.white};
`;

export const ProjectsBox = styled.div`
    min-height: 73vh;
`;

export const LoadingMoreBox = styled(FlexContainer)`
    justify-content: center;
    align-items: center;

    min-height: 7vh;

    & > span {
        cursor: pointer;

        &:hover {
            animation: spin 2000ms infinite;
        }
    }

    & > a {
        color: black;
        transition: 0.2s;
        text-decoration: none;

        &:hover {
            animation: spaceboots 2000ms infinite;
            color: ${({ theme }) => theme.color.mediumGray};
            transition: 0.2s;
        }
    }

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }

    @keyframes spaceboots {
        0% { -webkit-transform: translate(2px, 1px) rotate(0deg); }
        10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }
        20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }
        30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
        40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
        50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }
        60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
        70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }
        80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
        90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }
        100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }
    }

    /* background-color: tomato; */
`;
// </WORK>

// <CONTACT>
export const Contact = styled.div`
    min-height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.backgroundColored};
`;

export const ContactFormBox = styled(FlexContainer)`
    justify-content: center;
    align-items: center;

    /* background: red;  */
`;

export const Form = styled.form`
    width: 700px;
`;

export const FormRow = styled(FlexContainer)`
    justify-content: space-between;

    & > div + div {
        margin-left: 10vw;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        & > div + div {
            margin-left: 0;
        }
    }

    /* background-color: red; */
`;

export const ContainerInput = styled(FlexContainerColumn)`
    width: 100%;

    /* background-color: red; */

    & > label {
        font-family: ${({ theme }) => theme.font.secundary};
        text-transform: uppercase;
        font-weight: 900;
        font-size: 16px;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        & > label {
            font-size: 12px;
        }
    }
`;

export const Input = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    
    width: 100%;
    height: 45px;
    
    color: black;
    font-family: ${({ theme }) => theme.font.principal};
    padding: 0 8px;

    margin-bottom: 40px;

    &::placeholder {
        color: rgba(0,0,0,0.3);
    }

    @media (max-width: 768px) {
        height: 7vh;
        font-size: 12px;

        &::placeholder {
            font-size: 12px;
        }
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid black;
    border-radius: 5px;
    
    width: 100%;
    height: 15vh;
    
    color: black;
    font-family: ${({ theme }) => theme.font.principal};
    padding: 8px;

    &::placeholder {
        color: rgba(0,0,0,0.3);
    }

    @media (max-width: 768px) {
        font-size: 12px;
        /* margin-bottom: 20vh; */

        &::placeholder {
            font-size: 12px;
        }
    }
`;

export const ButtonBox = styled(FlexContainer)`
    flex: 1;
    margin-top: 6vh;
    justify-content: center;
    align-items: center;

    /* background-color: tomato; */

`;

export const ButtonSend = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 50px;

    border: none;
    border-radius: 5px;
    background-color: black;

    color: white;
    font-family: ${({ theme }) => theme.font.secundary};
    font-weight: bold;
    font-size: 18px;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.color.mediumGray};
        transition: 0.2s;
    }
    
    @media (max-width: 768px) {
        width: 50vw;
        height: 8vh;

        margin-bottom: 4vh;
    }

`;
// </CONTACT>

// <FOOTER>
export const Footer = styled(FlexContainer)`
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
// </FOOTER>



