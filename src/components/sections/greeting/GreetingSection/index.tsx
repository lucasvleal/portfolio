import React from 'react';

import { 
    Greeting,    
    NameAndTitle,
    LinksBar,
} from './styles';

import { MontserratText } from '../../../general/Texts';
import LinkSocialMedia from '../../../general/LinkSocialMedia';
import NavHeader from '../../../general/NavHeader';

import Typer from '../Typer';

export default function GreetingSection() {
    return (
        <Greeting>
            <NavHeader />

            <NameAndTitle>
                <MontserratText size={110} weight="bold">
                    {'<Lucas Leal />'}                    
                </MontserratText>

                <Typer 
                    texts={[
                        "Software Engineer.",
                        "Front-end lover.", 
                        "Mobile enthusiast.",
                        "Passionate about sports and technology."
                    ]}
                />
            </NameAndTitle>

            <LinksBar>
                <LinkSocialMedia 
                    url="https://www.linkedin.com/in/lucas-viani-leal/"
                    iconFamily="fab"
                    iconName="linkedin-in"
                />

                <LinkSocialMedia 
                    url="https://github.com/lucasvleal"
                    iconFamily="fab"
                    iconName="github"
                />

                <LinkSocialMedia 
                    url="https://medium.com/@lucasleal.dev"
                    iconFamily="fab"
                    iconName="medium-m"
                />
            </LinksBar>
        </Greeting>
    )
}