import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body { 
        font-family: 'Noto Sans JP', sans-serif;

        &::-webkit-scrollbar {
            width: 0.5vw;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb {
            background: #000;
        }
    }
    
`;