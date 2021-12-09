import React from 'react';

import { LoaderSpinner } from './styles';

interface Props {
    size?: 'small' | 'medium' | 'large';
}

export default function Loader({ size = 'small' }: Props) {
    return (
        <LoaderSpinner size={size}></LoaderSpinner>
    )
}