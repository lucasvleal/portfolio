import styled from 'styled-components';

import { FlexContainer, FlexContainerColumn } from '../../../../styles/GeneralComponents';

interface ContainerInputProps {
    colorized: boolean;
}

export const Contact = styled.div`
    min-height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    background-color: ${({ theme }) => theme.color.backgroundColored};
`;

export const ContactFormBox = styled(FlexContainer)`
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 700px;
`;

export const FormRow = styled(FlexContainer)`
    justify-content: space-between;
    margin-bottom: 40px;

    & > div + div {
        margin-left: 10vw;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        & > div  {
            margin-bottom: 40px;
        }

        & > div + div {
            margin-left: 0;
            margin-bottom: 0;
        }
    }
`;

export const InputGroup = styled(FlexContainerColumn)`
    width: 100%;

    & > label {
        font-family: ${({ theme }) => theme.font.secundary};
        text-transform: uppercase;
        font-weight: 900;
        font-size: 14px;
        margin-bottom: 4px;
    }

    @media (max-width: 768px) {
        & > label {
            font-size: 12px;
        }
    }
`;

export const ContainerInput = styled(FlexContainer)<ContainerInputProps>`
    align-items: center;
    border-bottom: 1px solid ${(props) => props.colorized ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)'};

    & > svg {
        margin-right: 8px;
        font-size: 16px;
        color: ${(props) => props.colorized ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)'};
    }
`;

export const Input = styled.input`
    /* border: 1px solid black; */
    /* border-radius: 5px; */
    
    border: none;
    /* border-bottom: 1px solid rgba(0,0,0,0.3); */
    background-color: transparent;
    
    width: 100%;
    height: 45px;
    
    color: black;
    font-family: ${({ theme }) => theme.font.principal};
    /* padding: 0 4px; */

    outline: none;

    &::placeholder {
        color: rgba(0,0,0,0.3);
    }

    &:focus {
        border-bottom-color: black;
    }

    @media (max-width: 768px) {
        height: 7vh;
        font-size: 12px;

        &::placeholder {
            font-size: 12px;
        }
    }
`;

export const TextArea = styled.textarea<ContainerInputProps>`
    /* border: 1px solid black;
    border-radius: 5px; */

    border: none;
    border-bottom: 1px solid ${(props) => props.colorized ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)'};
    background-color: transparent;

    outline: none;

    width: 100%;
    height: 15vh;
    
    color: black;
    font-family: ${({ theme }) => theme.font.principal};
    padding: 8px 0;

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
`;

export const ButtonSend = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 50px;

    border: none;
    /* border-radius: 5px; */
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