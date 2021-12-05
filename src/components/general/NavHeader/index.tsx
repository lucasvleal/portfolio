import React from 'react';

import { Container, ItemNav } from './styles';

import { MontserratText } from '../Texts';

export default function NavHeader() {
    return (
        <Container>
            <ItemNav href="#about">
                <MontserratText size={18} weight="bold">
                about
                </MontserratText>
            </ItemNav>
            
            <ItemNav  href="#projects">
                <MontserratText size={18} weight="bold">
                projects
                </MontserratText>
            </ItemNav>
            
            <ItemNav  href="#contact">
                <MontserratText size={18} weight="bold">
                contact
                </MontserratText>
            </ItemNav>
        </Container>
    )
}