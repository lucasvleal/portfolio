import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import IconTechnology from '../IconTechnology';
import { MontserratText, RegularText, VidalokaText } from '../Texts';

import { 
    Background,
    Container,
    Header,
    BoxClose,
    DescriptionAndMockupBox,
    MockupBox,
    DescriptionBox,
    LinkBox,
    TechnologiesBox,
    IconsTechnologies,
} from './styles';

interface Props {
    open: boolean;
    title: string;
    description?: string;
    links?: string[];
    technologies?: string[];
    mockupLink?: string;
    handleCloseModal: () => void;
}

const variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y:0, opacity: 1 },
  }

export default function Modal({ open, title, description, technologies, mockupLink, links, handleCloseModal }: Props) {
    return (
        <Background 
            show={open}            
        >
            <Container
            // initial="hidden"
            // // animate={open ? { y:0 } : "hidden"}          
            // animate={open ? "visible" : "hidden"}          
            // // variants={variants}  
            // transition={{ ease: "easeOut", duration: 2 }} 
            >
                <Header>
                    <div></div>

                    <VidalokaText size={72}>{title}</VidalokaText>

                    <BoxClose>
                        <FontAwesomeIcon onClick={handleCloseModal} icon={"times"} />
                    </BoxClose>
                </Header>
                
                <DescriptionAndMockupBox>
                    <MockupBox>
                        {/* <Image 
                            src={`/${mockupLink}`} 
                            alt={`Mockup of ${title}`}
                            width={300}
                            height={300}
                            layout="responsive"
                        /> */}
                        <img src={`/${mockupLink}`} height={300} width={"100%"} alt=""/>
                    </MockupBox>

                    <DescriptionBox>
                        <RegularText size={18} weight={400} color="#ACACAC">
                            {description}                        
                        </RegularText>

                        <LinkBox>
                            <MontserratText size={16} weight="900">
                                {links.length > 1 ? 'LINKS' : 'LINK'}
                            </MontserratText>
                            
                            { 
                                links.map((link) => (
                                    <a target="_blank" href={link}>{link}</a>
                                ))
                            }
                        </LinkBox>
                    </DescriptionBox>
                </DescriptionAndMockupBox>

                <TechnologiesBox>
                    <VidalokaText size={24}>Used technologies</VidalokaText>

                    <IconsTechnologies>
                        {
                            technologies.map((tech) => (
                                <IconTechnology technology={tech} />
                            ))
                        }
                    </IconsTechnologies>
                </TechnologiesBox>
            </Container>
        </Background>
    )
}