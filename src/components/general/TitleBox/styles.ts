import styled from 'styled-components';

import { FlexContainer } from '../../../styles/GeneralComponents';

export const Container = styled(FlexContainer)`
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