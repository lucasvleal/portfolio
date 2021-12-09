import styled from 'styled-components';

import theme from '../../../styles/themes/principal';

interface Props {
    size: 'small' | 'medium' | 'large';
}

export const LoaderSpinner = styled.div<Props>`
    border: ${(props) => theme.size.loader[props.size].border} solid ${theme.color.white};
    border-radius: 50%;
    border-top: ${(props) => theme.size.loader[props.size].border} solid ${theme.color.mediumGray};
    
    width: ${(props) => theme.size.loader[props.size].generalSize};
    height: ${(props) => theme.size.loader[props.size].generalSize};
    
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;