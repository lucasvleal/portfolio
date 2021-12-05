import styled from 'styled-components';

import { FlexContainer } from '../../../../styles/GeneralComponents';

import theme from '../../../../styles/themes/principal'

export const About = styled.div`
    min-height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.backgroundColored};

    /* @media (max-width: 768px) {
        min-height: 100vh;
    } */
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

export const WorkPlaceLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: black;
    border-bottom: 1px dotted ${theme.color.mediumGray};
    font-weight: bold;

    &:hover {
        border-bottom: 2px solid black;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const KnowledgeBox = styled.div`
    padding-top: 12px;

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