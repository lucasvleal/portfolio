import styled, { css } from 'styled-components';
import { motion } from "framer-motion"; 

interface BackgroundProps {
    show?: boolean;
}

export const Background = styled.div<BackgroundProps>`
    z-index: auto;
	display: ${({show}) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
    

    @media (max-width: 768px) {
        
    }
`;

// export const Container = styled(motion.div)`
export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position:fixed;
	top: 10%;
	left: 50%;
	transform: translate(-50%, 0);

	width: 80vw;
	height: 80vh;
	padding: 4vh;
	border-radius: 8px;

	background: ${({ theme }) => theme.color.white};

    @media (max-width: 768px) {
	    top: 2.5%;
        height: 95vh;
        padding: 4vh 4vw;

        overflow-y: scroll;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.15;

    /* height: 15vh; */
    width: 100%;

    @media (max-width: 768px) {
	    span {
            font-size: 40px;
            text-align: center;
        }
    }

    /* background: red; */
`;

export const BoxClose = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    width: 4vw;
    height: 100%;

    /* background: red; */

    svg { 
        color: ${({ theme }) => theme.color.mediumGray};
        font-size: 16px;

        cursor: pointer;
        transition: 0.2s;        

        &:hover { 
            color: black;
            transition: 0.2s;
        }
    }
`;

export const DescriptionAndMockupBox = styled.div`
    display: flex;
    align-items: center;
    flex: 0.6;

    width: 95%;

    @media (max-width: 768px) {
	    flex-direction: column;
        align-items: center;
        justify-content: center;
        /* padding: 0 20px; */
        width: 100%;

    }

    /* background: tomato; */
`;

export const MockupBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 100%;

    & > img {
        object-fit: cover;
    }

    @media (max-width: 768px) {
        & > img {
            width: 100%;
            height: 100%;
        }
        /* display: none; */
    }

    /* background: blue; */
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    /* a { 
        color: #ACACAC;
        transition: 0.2s;

        &:hover {
            color: ${({ theme }) => theme.color.mediumGray};
            transition: 0.2s;
        }
    } */

    @media (max-width: 768px) {
        align-items: center;

	    span {
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            width: 80%;
        }

        a {
            font-size: 14px;
            /* width: 20px; */

            text-align: center;
        }
    }

    /* background: green; */
`;

export const LinkBox = styled.div`
    /* display: flex;
    flex-direction: column; */

    margin-top: 4vh;

    & > a {
        margin-top: 14px;
    }

    @media (max-width: 768px) {
        align-items: center;

        a {
            font-size: 12px;
            /* width: 80%; */
        }
    }
`;

export const TechnologiesBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 0.25;

    @media (max-width: 768px) {
        margin-top: 2vh;
        justify-content: center;

	    span {
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 2vh;
        }
    }

    /* background: blueviolet; */
`;

export const IconsTechnologies = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 1vh;
    }
`;
