import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

import { Container } from "./styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  url: string;
  iconFamily: "fab" | "fas";
  iconName: IconProp;
  style?: "light" | "dark";
}

export default function LinkSocialMedia({
  url,
  iconFamily,
  iconName,
  style = "dark",
}: Props) {
  return (
    <Container style={style} target="_blank" href={url}>
      <FontAwesomeIcon fontFamily={iconFamily} icon={iconName} />
    </Container>
  );
}
