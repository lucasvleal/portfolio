import React, { DOMAttributes, HTMLAttributes, useEffect, useState } from 'react';
import AndOthers from '../AndOthers';
import IconTechnology from '../IconTechnology';
import { MontserratText, VidalokaText } from '../../../general/Texts';

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
    const techsToShow = technologies.slice(0, 3);

    return (
        <Container side={side}>
            <TitleBox id="title">
                <VidalokaText size={36}>{title}</VidalokaText>

                <IconsTechnologies>
                    { (technologies.length > 3 && side === 'right') && <AndOthers /> }
                    
                    {                        
                        techsToShow.map((tech) => (
                            <IconTechnology technology={tech} />
                        ))
                    }

                    { (technologies.length > 3 && side === 'left') && <AndOthers /> }
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