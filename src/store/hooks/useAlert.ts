import { positions, transitions, types, useAlert as useAlertLib } from "react-alert";
import type { ShowAlertProps } from "../types/alert";

export const ALERT_DURATION_IN_MILLISECONDS = 5000;

export const alertTypes = {
    SUCCESS: types.SUCCESS,
    ERROR: types.ERROR,
    INFO: types.INFO,
}

export const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: ALERT_DURATION_IN_MILLISECONDS,
    offset: '30px',
    transition: transitions.SCALE,
};

export default function useAlert() {
    const alert = useAlertLib();

    const show = ({  
        type, 
        message, 
        durationInMilliseconds = ALERT_DURATION_IN_MILLISECONDS 
    }: ShowAlertProps) => {
        return alert.show(message, { 
            type,
            timeout: durationInMilliseconds,
        });
    }
    
    return {
        show,
    }
}