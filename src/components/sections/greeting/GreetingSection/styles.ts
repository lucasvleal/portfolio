import styled from 'styled-components';

import { FlexContainer, FlexContainerColumn } from '../../../../styles/GeneralComponents';

export const Greeting = styled.div`
    height: 100vh;
    padding: 0 ${({ theme }) => theme.size.padding.horizontalContainer};

    /* background: red; */
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