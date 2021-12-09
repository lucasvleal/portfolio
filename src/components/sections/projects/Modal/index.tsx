import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconTechnology from '../IconTechnology';

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

import theme from '../../../../styles/themes/principal';

import { MontserratText, RegularText, VidalokaText } from '../../../general/Texts';
import CustomLink from '../../../general/CustomLink';

import { ILink } from '../../../../store/data/projects';

interface Props {
    open: boolean;
    title: string;
    description?: string;
    links?: ILink[];
    technologies?: string[];
    mockupLink?: string;
    handleCloseModal: () => void;
}

export default function Modal({ open, title, description, technologies, mockupLink, links, handleCloseModal }: Props) {
    return (
        <Background 
            show={open}            
        >
            <Container
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
                        <img src={`/${mockupLink}`} height={"100%"} width={"100%"} alt={`Mockup for project ${title}`} />
                    </MockupBox>

                    <DescriptionBox>
                        <RegularText size={18} weight={400} color="#ACACAC">
                            {description}                        
                        </RegularText>

                        <LinkBox>
                            <MontserratText size={14} weight="900">
                                {links.length > 1 ? 'LINKS' : 'LINK'}
                            </MontserratText>
                            
                            { 
                                links.map((link) => (
                                    <div style={{ marginBottom: '8px' }}>
                                        <CustomLink 
                                            url={link.url}
                                            title={link.title}
                                            target="_blank"
                                            bold={false}
                                            color={theme.color.mediumGray}
                                        />
                                    </div>
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