import React from 'react';

import { 
    About,
    AboutBox,
    WorkPlaceLink,
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
                Hello there! I’m <strong>Lucas Leal</strong>, a Brazilian Bachelor of Computer Science and a Software Engineer 
                currently working 
                at <WorkPlaceLink target="_blank" href="https://trio.dev">Trio Developers</WorkPlaceLink>.

                <div style={{ marginTop: '16px' }}>
                    I <strong>love</strong> the front-end and mobile development, with 
                    strong knowledge in <strong>ReactJS</strong> and <strong>React Native</strong>.  I’ve always studied and 
                    practice my skills in back-end, principally with <strong>Node.js</strong>, to keep growing and being a better 
                    dev tomorrow than I was yesterday.
                </div>
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

                        <Item><strong>Responsive Websites</strong></Item>
                        <span>●</span>

                        <Item>HTML</Item>
                        <span>●</span>

                        <Item>CSS</Item>
                        <span>●</span>

                        <Item><strong>Flexbox</strong></Item>
                        <span>●</span>

                        <Item>JQuery</Item>
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

                        <Item><strong>Postgres</strong></Item>
                        <span>●</span>

                        <Item>GraphQL</Item>
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
                    </KnowledgeItems>
                </KnowledgeLine>            
            </KnowledgeBox>
        </About>
    )
}