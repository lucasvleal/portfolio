import styled from 'styled-components';

import { FlexContainer, FlexContainerColumn } from '../../../../styles/GeneralComponents';

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