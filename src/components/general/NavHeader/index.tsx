import React from 'react';
import { scroller, Link } from 'react-scroll';

import { Container, ItemNav } from './styles';

import { MontserratText } from '../Texts';

export default function NavHeader() {
    return (
        <Container>
            <ItemNav to="about" spy={true} smooth={true}>
                <MontserratText size={18} weight="bold">
                about
                </MontserratText>
            </ItemNav>
            
            <ItemNav to="projects" spy={true} smooth={true}>
                <MontserratText size={18} weight="bold">
                projects
                </MontserratText>
            </ItemNav>
            
            <ItemNav to="contact" spy={true} smooth={true}>
                <MontserratText size={18} weight="bold">
                contact
                </MontserratText>
            </ItemNav>
        </Container>
    )
}