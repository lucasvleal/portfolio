import React from 'react';

import { 
  Container,
  Greeting,
  Header,
  ItemNav,
  NameAndTitle,
  LinksBar,
  LinkSocialMedia,
} from '../styles/pages/Home';

import { MontserratText, VidalokaText, RegularText } from '../components/Texts';
import Typer from '../components/Typer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <Container>
      <Greeting>
        <Header>
          <ItemNav>
            <MontserratText size={18} weight="bold">
              about
            </MontserratText>
          </ItemNav>

          <ItemNav>
            <MontserratText size={18} weight="bold">
              work
            </MontserratText>
          </ItemNav>

          <ItemNav>
            <MontserratText size={18} weight="bold">
              contact
            </MontserratText>
          </ItemNav>
        </Header>

        <NameAndTitle>
          <MontserratText size={100} weight="bold">
            Lucas Leal, 22
          </MontserratText>

          <Typer 
            texts={["FullStack Javascript Developer.", "FrontEnd lover.", "Mobile enthusiast.","Passionate about sports and technology."]}
          />
        </NameAndTitle>

        <LinksBar>
          <LinkSocialMedia target="_blank" href="https://www.linkedin.com/in/lucas-viani-leal/">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://github.com/lucasvleal">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://twitter.com/luquinha_txt">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://medium.com/@lucasleal.dev">
            <FontAwesomeIcon icon={['fab', 'medium-m']} />
          </LinkSocialMedia>

        </LinksBar>
      </Greeting>
    </Container>
  )
}
