import type { AlertPosition, AlertType } from "react-alert";

export type Types = AlertType;

export type Positions = AlertPosition;

export type ShowAlertProps = {
    type: Types;
    message: string;
    durationInMilliseconds?: number;
};