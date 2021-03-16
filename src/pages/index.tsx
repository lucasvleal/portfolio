import React from 'react';

import { 
  Container,
  Greeting,
  Header,
  ItemNav,
  NameAndTitle,
  LinksBar,
  LinkSocialMedia,
  About,
  TitleBox,
  AboutBox,
  KnowledgeBox,
  KnowledgeLine,
  KnowledgeTitle,
  KnowledgeItems,
  Item,
  Work,
  ProjectsBox,
  LoadingMoreBox,
  Contact,
  ContactFormBox,
  Form,
  FormRow,
  ContainerInput,
  Input,
  TextArea,
  ButtonBox,
  ButtonSend,
  Footer,
  LinksFooterBox,
} from '../styles/pages/Home';

import { MontserratText, VidalokaText, RegularText } from '../components/Texts';
import Typer from '../components/Typer';
import Project from '../components/Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projects = [
  {  
    id: 1,  
    title: "Marrey Sanchez",
    description: "A website to a Brazilian traditional Lawer Office. There are shown the history of the office and they lawyers. The layout was build to demonstrate elegance and confiability.",
    link: "http://marreysanchez.com.br",
    technologies: ["html", "css", "js", "jquery"],
    mockup: '',
  },
  {  
    id: 2,  
    title: "Vitrine Virtual",
    description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
    link: "http://vitrinevirtual.com.br",
    technologies: ["nodejs", "react-native", "react"],
    mockup: '',
  },
  {  
    id: 3,  
    title: "Parcelamos Tudo",
    description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
    link: "http://parcelamostudo.com.br",
    technologies: ["nodejs", "react-native", "react"],
    mockup: '',
  },
  
]

export default function Home() {
  return (
    <Container>
      <Greeting>
        <Header>
          <ItemNav href="#about">
            <MontserratText size={18} weight="bold">
              about
            </MontserratText>
          </ItemNav>

          <ItemNav  href="#work">
            <MontserratText size={18} weight="bold">
              work
            </MontserratText>
          </ItemNav>

          <ItemNav  href="#contact">
            <MontserratText size={18} weight="bold">
              contact
            </MontserratText>
          </ItemNav>
        </Header>

        <NameAndTitle>
          <MontserratText size={100} weight="bold">
            Lucas Leal, 22
          </MontserratText>

          <Typer 
            texts={["FullStack Javascript Developer.", "Front-end lover.", "Mobile enthusiast.","Passionate about sports and technology."]}
          />
        </NameAndTitle>

        <LinksBar>
          <LinkSocialMedia target="_blank" href="https://www.linkedin.com/in/lucas-viani-leal/">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://github.com/lucasvleal">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://twitter.com/luquinha_txt">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://medium.com/@lucasleal.dev">
            <FontAwesomeIcon icon={['fab', 'medium-m']} />
          </LinkSocialMedia>
        </LinksBar>
      </Greeting>

      <About id="about">
        <TitleBox>
          <VidalokaText size={72}>about</VidalokaText>
        </TitleBox>

        <AboutBox>
          Hi! I’m <strong>Lucas Leal</strong>, student of Computer Science on a great University in Brazil, UNESP.
          <br /><br />
          I’m a FullStack Javascript Developer, who <strong>loves</strong> Front-end and principally Mobile development, with 
          strong knowledge in <strong>ReactJS</strong> and <strong>React Native</strong>.  I’ve always studying and practicing my skills in Back-end, 
          with <strong>Node.js</strong>, to keep growing and be a better dev tomorrow than I was yesterday.
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
              <Item><strong>HTML</strong></Item>
              <span>●</span>

              <Item><strong>CSS</strong></Item>
              <span>●</span>

              <Item><strong>React Native</strong></Item>
              <span>●</span>

              <Item>ReactJS</Item>
              <span>●</span>

              <Item>Responsive Websites</Item>
              <span>●</span>

              <Item><strong>Flexbox</strong></Item>
              <span>●</span>

              <Item>JQuery</Item>
              <span>●</span>

              <Item><strong>Bootstrap</strong></Item>
            </KnowledgeItems>
          </KnowledgeLine>
        
          <KnowledgeLine>
            <KnowledgeTitle>Back-end</KnowledgeTitle>

            <KnowledgeItems>
              <Item><strong>Node.js</strong></Item>
              <span>●</span>

              <Item><strong>MySQL</strong></Item>
              <span>●</span>

              <Item>Docker</Item>
              <span>●</span>

              <Item>Postgres</Item>
              <span>●</span>

              <Item>MongoDB</Item>
              <span>●</span>

              <Item>Redis</Item>
            </KnowledgeItems>
          </KnowledgeLine>
        </KnowledgeBox>
      </About>

      <Work id="work">
        <TitleBox>
          <VidalokaText size={72}>work</VidalokaText>
        </TitleBox>

        <ProjectsBox>
          {
            projects.map(project => (
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                side={project.id % 2 === 0 ? "right" : "left"}
              />
            ))
          }
        </ProjectsBox>

        <LoadingMoreBox>
          <VidalokaText size={48}>+</VidalokaText>
        </LoadingMoreBox>
      </Work>

      <Contact id="contact">
        <TitleBox>
          <VidalokaText size={72}>contact</VidalokaText>
        </TitleBox>

        <ContactFormBox>
          <Form>
            <FormRow>
              <ContainerInput>
                <label htmlFor="name">NAME <MontserratText color="tomato" weight="600">*</MontserratText></label>
                <Input id="name" type="text" placeholder="Your name here..." required />
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="phone">PHONE</label>
                <Input id="phone" type="text" placeholder="Your phone here..." />
              </ContainerInput>
            </FormRow>

            <ContainerInput>
              <label htmlFor="email">EMAIL <MontserratText color="tomato" weight="600">*</MontserratText></label>
              <Input id="email" type="text" placeholder="Your email here..." required />
            </ContainerInput>

            <ContainerInput>
              <label htmlFor="message">MESSAGE <MontserratText color="tomato" weight="600">*</MontserratText></label>
              <TextArea id="message" placeholder="Your message here..." required ></TextArea>
            </ContainerInput>

            <ButtonBox>
              <ButtonSend>
                SEND
              </ButtonSend>
            </ButtonBox>
          </Form>
        </ContactFormBox>
      </Contact>
    
      <Footer>
        <RegularText weight="bold" color="#FFFFFF">Copyright © Lucas Leal 2021</RegularText>

        <LinksFooterBox>
          <LinkSocialMedia target="_blank" href="https://www.linkedin.com/in/lucas-viani-leal/">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://github.com/lucasvleal">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://twitter.com/luquinha_txt">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://medium.com/@lucasleal.dev">
            <FontAwesomeIcon icon={['fab', 'medium-m']} />
          </LinkSocialMedia>
        </LinksFooterBox>
      </Footer>
    </Container>
  )
}
