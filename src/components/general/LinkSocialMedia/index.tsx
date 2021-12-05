import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';

import { Container } from './styles';

interface Props {
    url: string;
    iconFamily: 'fab' | 'fas';
    iconName: IconName;
    style?: 'light' | 'dark'
}

export default function LinkSocialMedia({ url, iconFamily, iconName, style = 'dark' }: Props) {
    return (
        <Container style={style} target="_blank" href={url}>
            <FontAwesomeIcon icon={[iconFamily, iconName]} />
        </Container>
    )
}