import React, { useCallback, useState } from 'react';

import { Container } from '../styles/pages/Home';

import { IProject } from '../data/projects';

import SEO from '../components/SEO';

import Footer from '../components/general/Footer';

import GreetingSection from '../components/sections/greeting/GreetingSection';
import AboutSection from '../components/sections/about/AboutSection';
import ProjectsSection from '../components/sections/projects/ProjectsSection';
import Modal from '../components/sections/projects/Modal';
import ContactSection from '../components/sections/contact/ContactSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLinks, setProjectLinks] = useState([]);
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [projectMockup, setProjectMockup] = useState('');

  const handleOpenModalProject = useCallback((project: IProject) => {
    setProjectTitle(project.title);
    setProjectDescription(project.description);
    setProjectLinks(project.link);
    setProjectTechnologies(project.technologies);
    setProjectMockup(project.mockup);

    setIsModalOpen(true);
  }, []);  

  return (
    <Container>
      <SEO 
        title={`Lucas Leal, 23`}
        description="Portfolio site of the Full Stack and Mobile developer Lucas Leal."
        shouldExcludeTitleSuffix
      />

      <GreetingSection />

      <AboutSection />

      <ProjectsSection onClickProject={handleOpenModalProject} />

      <ContactSection />
    
      <Footer />
    
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
