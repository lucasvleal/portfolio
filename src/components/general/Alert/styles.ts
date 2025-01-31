import styled from "styled-components";
import { AlertType } from "react-alert";

import theme from "../../../styles/themes/principal";

interface AlertProps {
  type: AlertType;
}

export const Container = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10vh;
  width: 40vw;

  color: ${(props) => theme.alerts[props.type].color};
  background-color: ${(props) => theme.alerts[props.type].background};

  & > div > svg {
    color: ${(props) => theme.alerts[props.type].color};
  }

  margin-top: 1vh;

  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.0912);

  @media (max-width: 768px) {
    width: 80vw;
    font-size: 12px;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const BoxMessage = styled.div`
  display: flex;
  flex: 0.8;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
`;

export const BoxButton = styled.div`
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Button = styled.button`
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;

  & > svg {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.15);
  }
`;
