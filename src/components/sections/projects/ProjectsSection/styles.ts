import styled from 'styled-components';

import { FlexContainer } from '../../../../styles/GeneralComponents';

export const Projects = styled.div`
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