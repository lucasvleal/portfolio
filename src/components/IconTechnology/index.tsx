import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { MontserratText } from '../Texts';

import { 
    Container,
} from './styles';

interface Props { 
    technology: string;
}

export default function IconTechnology({ technology }: Props) {

    return (
        <Container>
            <Image 
                src={`/${technology}.png`} 
                alt={`Icon of ${technology}`}
                width={32}
                height={32}
                layout="responsive"
                priority
            />

            <div id="tooltip">
                <MontserratText color="white" size={10} weight="bold">{technology}</MontserratText>
            </div>
        </Container>
    )
}