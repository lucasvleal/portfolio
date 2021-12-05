import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { MontserratText } from '../../../general/Texts';

import { 
    Container,
} from './styles';

interface Props { 
    technology: string;
}

export default function AndOthers() {

    return (
        <Container>
            <MontserratText weight="bold" size={16}>. . .</MontserratText>

            <div id="tooltip">
                <MontserratText color="white" size={10} weight="bold">And others</MontserratText>
            </div>
        </Container>
    )
}