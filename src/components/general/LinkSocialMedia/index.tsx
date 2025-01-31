import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Container } from "./styles";

interface Props {
  url: string;
  iconName: IconProp;
  style?: "light" | "dark";
}

export default function LinkSocialMedia({
  url,
  iconName,
  style = "dark",
}: Props) {
  return (
    <Container style={style} target="_blank" href={url}>
      <FontAwesomeIcon
        width={32}
        icon={`fa-brands fa-${iconName}` as IconProp}
      />
    </Container>
  );
}
