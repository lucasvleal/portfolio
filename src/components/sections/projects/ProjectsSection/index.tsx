import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { 
    Projects,
    ProjectsBox,
    LoadingMoreBox,
} from './styles';

import projects from '../../../../store/data/projects';
import type { IProject } from '../../../../store/types/project';

import TitleBox from '../../../general/TitleBox';
import { VidalokaText } from '../../../general/Texts';

import Project from '../Project';

interface Props {
    onClickProject: (project: IProject) => void;
}

const projectsPerPage = 1;
let arrayHoldingProjects = [];

export default function ProjectsSection({ onClickProject }: Props) {
    const [projectsToShow, setProjectsToShow] = useState([]);
    const [next, setNext] = useState(3);

    const sliceMoreProjects = useCallback((start, end) => {
        const slicedProjects = projects.slice(start, end);
        
        arrayHoldingProjects = [...arrayHoldingProjects, ...slicedProjects];
        
        setProjectsToShow(arrayHoldingProjects);
    }, [projects, arrayHoldingProjects]);
    
    useEffect(() => {
        sliceMoreProjects(0, 3);
    }, []);
    
    const handleShowMoreProjects = useCallback(() => {
        sliceMoreProjects(next, next + projectsPerPage);
        setNext(next + projectsPerPage);
    }, [next, projectsPerPage]);

    return (
        <Projects id="projects">
            <TitleBox title="projects" />

            <ProjectsBox>
                {
                    projectsToShow.map(project => (
                        <Project
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            side={project.id % 2 === 0 ? "right" : "left"}
                            handleSeeMore={() => onClickProject(project)}
                        />
                    ))
                }
            </ProjectsBox>

            <LoadingMoreBox onClick={handleShowMoreProjects}>
                {
                    projectsToShow.length === projects.length ?
                    <a target="_blank" href="https://github.com/lucasvleal">
                        <VidalokaText size={24}>see much more on github</VidalokaText>
                    </a>
                    :
                    <VidalokaText size={48}>+</VidalokaText>
                }
            </LoadingMoreBox>
        </Projects>
    )
}