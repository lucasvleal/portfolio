import React, { FormEvent, useCallback, useEffect, useState, ChangeEvent, useMemo, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import Modal from '../components/Modal';

import projects, { IProject } from '../data/projects';

// const projects = [
//   {  
//     id: 1,  
//     title: "Marrey Sanchez",
//     description: "A website to a Brazilian traditional Lawer Office. There are shown the history of the office and they lawyers. The layout was build to demonstrate elegance and confiability.",
//     link: "http://marreysanchez.com.br",
//     technologies: ["html", "css", "javascript", "jquery"],
//     mockup: '',
//   },
//   {  
//     id: 2,  
//     title: "Vitrine Virtual",
//     description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
//     link: "http://vitrinevirtual.com.br",
//     technologies: ["nodejs", "react-native", "reactjs", "php", "mysql"],
//     mockup: '',
//   },
//   {  
//     id: 3,  
//     title: "Parcelamos Tudo",
//     description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
//     link: "http://parcelamostudo.com.br",
//     technologies: ["nodejs", "react-native", "reactjs", "docker"],
//     mockup: '',
//   },
//   {  
//     id: 4,  
//     title: "Parcelamos Tudo",
//     description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
//     link: "http://parcelamostudo.com.br",
//     technologies: ["nodejs", "react-native", "reactjs", "docker"],
//     mockup: '',
//   },
//   {  
//     id: 5,  
//     title: "Parcelamos Tudo",
//     description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
//     link: "http://parcelamostudo.com.br",
//     technologies: ["nodejs", "react-native", "reactjs", "docker"],
//     mockup: '',
//   },
//   {  
//     id: 6,  
//     title: "Parcelamos Tudo",
//     description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
//     link: "http://parcelamostudo.com.br",
//     technologies: ["nodejs", "react-native", "reactjs", "docker"],
//     mockup: '',
//   },
//   {  
//     id: 7,  
//     title: "Parcelamos Tudo",
//     description: "In this project, I create a virtual showcase there’s the owner can, by the Admin Dashboard, add categories and products to each of them, and provide the infos (price, photo, description) about the products",
//     link: "http://parcelamostudo.com.br",
//     technologies: ["nodejs", "react-native", "reactjs", "docker"],
//     mockup: '',
//   },  
// ]

const projectsPerPage = 1;
let arrayHoldingProjects = [];

export default function Home() {
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLinks, setProjectLinks] = useState([]);
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [projectMockup, setProjectMockup] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const currentYear = useMemo(() => new Date(Date.now()).getFullYear(), []);

  const howOlderIAm = useMemo(() => {
    const currentTime = new Date(Date.now());
    const years = currentYear - 1998;

    const isAfterMyBirthday = new Date(currentTime.toDateString()) > new Date(new Date(currentTime.getFullYear(), 3, 27).toDateString());

    // console.log('aniv: ', new Date(currentTime.getFullYear(), 3, 27).toDateString());
    // console.log('current: ', currentTime.toDateString());

    // console.log(isAfterMyBirthday);

    return isAfterMyBirthday ? years : years - 1;
  }, []);

  const sliceMoreProje = useCallback((start, end) => {
    const slicedProjects = projects.slice(start, end);

    arrayHoldingProjects = [...arrayHoldingProjects, ...slicedProjects];

    setProjectsToShow(arrayHoldingProjects);
  }, [projects, arrayHoldingProjects]);

  useEffect(() => {
    sliceMoreProje(0, 3);
  }, []);

  const handleShowMoreProjects = useCallback(() => {
    sliceMoreProje(next, next + projectsPerPage);
    setNext(next + projectsPerPage);
  }, [next, projectsPerPage]);

  const handleOpenModalProject = useCallback((project: IProject) => {
    setProjectTitle(project.title);
    setProjectDescription(project.description);
    setProjectLinks(project.link);
    setProjectTechnologies(project.technologies);
    setProjectMockup(project.mockup);

    setIsModalOpen(true);

    console.log('abrir modal');
  }, []);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const handleSendEmail = useCallback((event: FormEvent) => {
    event.preventDefault();

    if (!email || !name || !message) {
      alert("Please, insert a valid email, name and message!");

      return;
    }

    let body = `
      Hello Lucas! I am ${name}, I came to you through your portfolio, I would like to leave a message %0D%0A%0D%0A

      My infos ---- %0D%0A
      Phone: ${phone} %0D%0A
      Email: ${email} %0D%0A%0D%0A

      Message ---- %0D%0A
      ${message} %0D%0A%0D%0A
    `;

    const mailTo = `mailto:lucasleal.dev@gmail.com?subject=Contact%20From%20Portfolio&body=${body}`;

    window.location = mailTo;
  }, [name, phone, email, message]);

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
              projects
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
            Lucas Leal, {howOlderIAm}
          </MontserratText>

          <Typer 
            texts={[
              "FullStack Javascript Developer.", 
              "Front-end lover.", 
              "Mobile enthusiast.",
              "Passionate about sports and technology."
            ]}
          />
        </NameAndTitle>

        <LinksBar>
          <LinkSocialMedia target="_blank" href="https://www.linkedin.com/in/lucas-viani-leal/">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://github.com/lucasvleal">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </LinkSocialMedia>

          {/* <LinkSocialMedia target="_blank" href="https://twitter.com/luquinha_txt">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </LinkSocialMedia> */}

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

      <Work id="work">
        <TitleBox>
          <VidalokaText size={72}>projects</VidalokaText>
        </TitleBox>

        <ProjectsBox>
          {
            projectsToShow.map(project => (
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                side={project.id % 2 === 0 ? "right" : "left"}
                handleSeeMore={() => handleOpenModalProject(project)}
              />
            ))
          }
        </ProjectsBox>

        <LoadingMoreBox onClick={handleShowMoreProjects}>
          {
            projectsToShow.length === projects.length ?
            <a target="_blank" href="https://github.com/lucasvleal">
              <VidalokaText size={24}>see more on github</VidalokaText>
            </a>
            :
            <VidalokaText size={48}>+</VidalokaText>
          }
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
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your name here..." 
                  onChange={handleChangeName}
                  required 
                />
              </ContainerInput>

              <ContainerInput>
                <label htmlFor="phone">PHONE</label>
                <Input 
                  id="phone" 
                  type="text" 
                  placeholder="Your phone here..."
                  onChange={handleChangePhone}
                />
              </ContainerInput>
            </FormRow>

            <ContainerInput>
              <label htmlFor="email">EMAIL <MontserratText color="tomato" weight="600">*</MontserratText></label>
              <Input 
                id="email" 
                type="text" 
                placeholder="Your email here..." 
                onChange={handleChangeEmail}
                required 
              />
            </ContainerInput>

            <ContainerInput>
              <label htmlFor="message">MESSAGE <MontserratText color="tomato" weight="600">*</MontserratText></label>
              <TextArea 
                id="message" 
                placeholder="Your message here..."
                onChange={handleChangeMessage}
                required 
              ></TextArea>
            </ContainerInput>

            <ButtonBox>
              <ButtonSend onClick={handleSendEmail}>
                SEND
              </ButtonSend>
            </ButtonBox>
          </Form>
        </ContactFormBox>
      </Contact>
    
      <Footer>
        <RegularText weight="bold" color="#FFFFFF">Copyright © Lucas Leal {currentYear}</RegularText>

        <LinksFooterBox>
          <LinkSocialMedia target="_blank" href="https://www.linkedin.com/in/lucas-viani-leal/">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </LinkSocialMedia>

          <LinkSocialMedia target="_blank" href="https://github.com/lucasvleal">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </LinkSocialMedia>

          {/* <LinkSocialMedia target="_blank" href="https://twitter.com/luquinha_txt">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </LinkSocialMedia> */}

          <LinkSocialMedia target="_blank" href="https://medium.com/@lucasleal.dev">
            <FontAwesomeIcon icon={['fab', 'medium-m']} />
          </LinkSocialMedia>
        </LinksFooterBox>
      </Footer>
    
      <Modal 
        open={isModalOpen}
        title={projectTitle}
        description={projectDescription}
        links={projectLinks}
        technologies={projectTechnologies}
        mockupLink={projectMockup}
        handleCloseModal={() => setIsModalOpen(false)}
      />
    </Container>
  )
}
