import React, { useState, useEffect } from 'react';
import { allProjects } from "../data";
import ProjectCard from '../components/ProjectCard';

function ProjectHomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            })
        // setProjectList(allProjects)
    }, [])

    return (
        <div id="project-list" >
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    )
};

export default ProjectHomePage;