import React from 'react';
import { MontserratText } from '../Texts';

import { Container } from './styles';

interface Props {
    title: string;
}

export default function Tooltip({ title }: Props) {
    // const icon = `../../assets/icons/technologies/${technology}`;

    return (
        <Container>
            <MontserratText color="white" size={8} weight="bold">{title}</MontserratText>
        </Container>
    )
}