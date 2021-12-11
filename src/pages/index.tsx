import React, { useCallback, useEffect, useState } from 'react';

import { Container } from '../styles/pages/Home';

import { IProject } from '../store/types/project';

import SEO from '../components/SEO';

import Footer from '../components/general/Footer';
import ScrollToTop from '../components/general/ScrollToTop';

import GreetingSection from '../components/sections/greeting/GreetingSection';
import AboutSection from '../components/sections/about/AboutSection';
import ProjectsSection from '../components/sections/projects/ProjectsSection';
import Modal from '../components/sections/projects/Modal';
import ContactSection from '../components/sections/contact/ContactSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLinks, setProjectLinks] = useState([]);
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [projectMockup, setProjectMockup] = useState('');

  useEffect(() => {
    window.addEventListener("scroll", handleSetScroll);

    return () => {
      window.removeEventListener("scroll", handleSetScroll);
    };
  }, []);

  const handleOpenModalProject = useCallback((project: IProject) => {
    setProjectTitle(project.title);
    setProjectDescription(project.description);
    setProjectLinks(project.link);
    setProjectTechnologies(project.technologies);
    setProjectMockup(project.mockup);

    setIsModalOpen(true);
  }, []);  

  const handleSetScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);
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

      {scrollPosition > 600 && <ScrollToTop />}
    </Container>
  )
}
