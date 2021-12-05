import React from 'react';

import { MontserratText, RegularText } from '../components/general/Texts';

import { Container } from '../styles/pages/404';

export default function Custom404() {
  return (
    <Container>
      <MontserratText size={100} weight={900}>Ops, this page don't exist.</MontserratText>

      <a href="./">
        <RegularText>back to home</RegularText>
      </a>
    </Container>
  )
}
