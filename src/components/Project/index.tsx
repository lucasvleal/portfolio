import React, { DOMAttributes, HTMLAttributes, useEffect, useState } from 'react';
import IconTechnology from '../IconTechnology';
import { MontserratText, VidalokaText } from '../Texts';

import { 
    Container,
    TitleBox,
    Title,
    IconsTechnologies,
    DescriptionBox,
    SeeMoreBox,
} from './styles';

interface Props { 
    title: string;
    description?: string;
    // link?: string;
    technologies?: string[];
    side: "left" | "right";
    handleSeeMore: () => void;
}

export default function Project({ title, description, technologies, side, handleSeeMore }: Props) {
    return (
        <Container side={side}>
            <TitleBox id="title">
                <VidalokaText size={36}>{title}</VidalokaText>

                <IconsTechnologies>
                    {
                        technologies.map((tech) => (
                            <IconTechnology technology={tech} />
                        ))
                    }
                </IconsTechnologies>
            </TitleBox>

            <DescriptionBox id="description">
                {description}
            </DescriptionBox>

            <SeeMoreBox id="seeMore" onClick={handleSeeMore}>
                <MontserratText size={16} weight="900" >
                    read and see more about it...
                </MontserratText>
            </SeeMoreBox>
        </Container>
    )
}