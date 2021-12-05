import React from 'react';

import { 
    About,
    AboutBox,
    KnowledgeBox,
    KnowledgeLine,
    KnowledgeTitle,
    KnowledgeItems,
    Item,
} from './styles';

import TitleBox from '../../../general/TitleBox';

export default function AboutSection() {
    return (
        <About id="about">
            <TitleBox title="about" />

            <AboutBox>
                Hi! I’m <strong>Lucas Leal</strong>, student of Computer Science on a great University in Brazil, UNESP.
                <br /><br />
                I’m a FullStack Javascript Developer, who <strong>loves</strong> Front-end mainly Mobile development, with 
                strong knowledge in <strong>ReactJS</strong> and <strong>React Native</strong>.  I’ve always studied and practice my skills in Back-end, 
                principally with <strong>Node.js</strong>, to keep growing and being a better dev tomorrow than I was yesterday.
            </AboutBox>
        
            <KnowledgeBox>
                <KnowledgeLine>
                    <KnowledgeTitle>Languages</KnowledgeTitle>

                    <KnowledgeItems>
                        <Item><strong>JavaScript</strong></Item>
                        <span>●</span>

                        <Item><strong>TypeScript</strong></Item>
                        <span>●</span>

                        <Item>PHP</Item>
                        <span>●</span>

                        <Item>Java</Item>
                        <span>●</span>

                        <Item>C</Item>
                        <span>●</span>

                        <Item>Python</Item>
                    </KnowledgeItems>
                </KnowledgeLine>
                
                <KnowledgeLine>
                    <KnowledgeTitle>Front-end</KnowledgeTitle>

                    <KnowledgeItems>
                    <Item><strong>React Native</strong></Item>
                    <span>●</span>

                    <Item><strong>ReactJS</strong></Item>
                    <span>●</span>

                    <Item>Responsive Websites</Item>
                    <span>●</span>

                    <Item><strong>HTML</strong></Item>
                    <span>●</span>

                    <Item><strong>CSS</strong></Item>
                    <span>●</span>

                    <Item>Flexbox</Item>
                    <span>●</span>

                    <Item><strong>JQuery</strong></Item>
                    <span>●</span>

                    <Item>Bootstrap</Item>
                    </KnowledgeItems>
                </KnowledgeLine>
            
                <KnowledgeLine>
                    <KnowledgeTitle>Back-end</KnowledgeTitle>

                    <KnowledgeItems>
                    <Item><strong>Node.js</strong></Item>
                    <span>●</span>

                    <Item><strong>MySQL</strong></Item>
                    <span>●</span>

                    <Item>Postgres</Item>
                    <span>●</span>

                    <Item>MongoDB</Item>
                    <span>●</span>

                    <Item>Redis</Item>
                    </KnowledgeItems>
                </KnowledgeLine>
                
                <KnowledgeLine>
                    <KnowledgeTitle>Others</KnowledgeTitle>

                    <KnowledgeItems>
                    <Item><strong>Git</strong></Item>
                    <span>●</span>

                    <Item>Docker</Item>
                    <span>●</span>

                    <Item>AWS S3</Item>
                    <span>●</span>

                    <Item><strong>Heroku</strong></Item>
                    <span>●</span>              

                    <Item>Netlify</Item>
                    <span>●</span>
                    </KnowledgeItems>
                </KnowledgeLine>            
            </KnowledgeBox>
        </About>
    )
}