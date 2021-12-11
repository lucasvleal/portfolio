import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AlertType, types } from 'react-alert';

import { Container, Button, BoxIcon, BoxMessage, BoxButton } from './styles';

interface Props {
    message: string;
    type: AlertType;
    close(): void;
}

export default function Alert({ message = 'An error ocurred. Try again later', type = 'error', close }: Props) {
    return (
        <Container type={type}>
            <BoxIcon>
                {type === types.INFO && <FontAwesomeIcon icon="info" />}
                {type === types.SUCCESS && <FontAwesomeIcon icon="check-double" />}
                {type === types.ERROR && <FontAwesomeIcon icon="exclamation" />}
            </BoxIcon>

            <BoxMessage>
                {message}
            </BoxMessage>

            <BoxButton>
                {/* <Button onClick={close}>
                    <FontAwesomeIcon icon="times" />
                </Button> */}
            </BoxButton>
        </Container>
    )
}