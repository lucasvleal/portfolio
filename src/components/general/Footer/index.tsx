import React, { useMemo } from "react";

import { Container, LinksFooterBox } from "./styles";

import { RegularText } from "../Texts";
import LinkSocialMedia from "../LinkSocialMedia";

export default function Footer() {
  const currentYear = useMemo(() => new Date(Date.now()).getFullYear(), []);

  return (
    <Container>
      <RegularText weight="bold" color="#FFFFFF">
        Copyright © Lucas Leal {currentYear}
      </RegularText>

      <LinksFooterBox>
        <LinkSocialMedia
          url="https://www.linkedin.com/in/lucas-viani-leal/"
          iconName="linkedin-in"
          style="light"
        />

        <LinkSocialMedia
          url="https://github.com/lucasvleal"
          iconName="github"
          style="light"
        />

        <LinkSocialMedia
          url="https://medium.com/@lucasleal.dev"
          iconName="medium-m"
          style="light"
        />
      </LinksFooterBox>
    </Container>
  );
}
