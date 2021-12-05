import React from 'react';

import { Container } from './styles';

import { VidalokaText } from '../Texts';

interface Props {
    title: string
}

export default function TitleBox({ title }: Props) {
    return (
        <Container>
            <VidalokaText size={72}>{title}</VidalokaText>
        </Container>
    )
}