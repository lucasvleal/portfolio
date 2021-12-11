import styled from 'styled-components';

import { FlexContainerColumn } from '../GeneralComponents';

export const Container = styled(FlexContainerColumn)`
    background: ${({ theme }) => theme.color.white};
`;
