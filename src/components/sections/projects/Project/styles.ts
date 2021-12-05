import styled, { css } from 'styled-components';

interface ContainerProps {
    side: "left" | "right";
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    border-${(props) => props.side}: 5px solid black;
    padding-${(props) => props.side}: 3vw;
    align-items: ${(props) => props.side === 'left' ? 'flex-start' : 'flex-end'};

    #title {
        display: flex;
        align-items: center;
        flex-direction: ${(props) => props.side === 'left' ? 'row' : 'row-reverse'};

        width: 50%;

        & > span {
            margin:  ${(props) => props.side === 'left' ? '0 1vh 0 0' : '0 0 0 1vh'};
        } 

        & > div {
            display: flex;
        }
    }

    #description {
        width: 50%;

        margin-top: 1vh;

        font-family: ${({ theme }) => theme.font.principal};
        font-size: 14px;
        color: #ACACAC;

        text-align: ${(props) => props.side === 'left' ? 'left' : 'right'};
    }

    #seeMore {
        width: 50%;

        margin-top: 2vh;
        text-align: ${(props) => props.side === 'left' ? 'left' : 'right'};

        cursor: pointer;
        transition: 0.2s;

        & > span {
            text-transform: uppercase;
        } 

        &:hover {
            color: ${({ theme }) => theme.color.mediumGray};
            transition: 0.2s;
        }
    }

    @media (max-width: 768px) {
        align-items: center;

        border-${(props) => props.side}: none;
        padding-${(props) => props.side}: 0;

        border-top: 5px solid black;
        padding-top: 3vw;
        margin-bottom: 4vh;

        #title {
            flex-direction: column;

            width: 100%;

            & > span {
                margin-bottom: 2vh;
            }
        }

        #description {
            width: 100%;
            margin-top: 2vh;

            text-align: center;
            line-height: 24px;
        }

        #seeMore {
            width: 100%;

            margin: 2vh 0;
            text-align: center;

            cursor: pointer;
            transition: 0.2s;

            & > span {
                font-size: 12px;
            } 
        }
    }
`;

export const TitleBox = styled.div`
    /* display: flex;
    align-items: center;
    
    width: 50%;

    & > span {
        margin-right: 1vw;
    } */
`;

export const Title = styled.div``;

export const IconsTechnologies = styled.div``;

export const DescriptionBox = styled.div`
    /* width: 50%;

    margin-top: 1vh;

    font-family: ${({ theme }) => theme.font.principal};
    font-size: 14px;
    color: #ACACAC; */
`;

export const SeeMoreBox = styled.div`
    /* width: 50%;

    margin-top: 2vh;

    & > span {
        text-transform: uppercase;
    } */
`;
