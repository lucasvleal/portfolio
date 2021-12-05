import React, { useMemo } from 'react';

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
    const currentYear = useMemo(() => new Date(Date.now()).getFullYear(), []);

    const howOlderAmI = useMemo(() => {
        const YEAR_I_BORN = 1998;

        const currentTime = new Date(Date.now());
        const years = currentYear - YEAR_I_BORN;
    
        const isAfterMyBirthday = new Date(currentTime.toDateString()) >= new Date(new Date(currentTime.getFullYear(), 2, 27).toDateString());
    
        return isAfterMyBirthday ? years : years - 1;
    }, []);

    return (
        <Greeting>
            <NavHeader />

            <NameAndTitle>
                <MontserratText size={100} weight="bold">
                    Lucas Leal, {howOlderAmI}
                </MontserratText>

                <Typer 
                    texts={[
                    "FullStack Javascript Developer.", 
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