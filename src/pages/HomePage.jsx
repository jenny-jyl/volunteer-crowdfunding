import React, { useState, useEffect } from 'react';
import { allProjects } from "../data";
import ProjectCard from '../components/ProjectCard';
// import volunteerimg from '/Users/jennyli/volunteer-crowdfunding/src/components/images/volunteerimage.jpg'


function HomePage() {
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
        <div>
            <div id="intro-block">
                <h1>
                    Welcome to Help Me Go! A safe place to seek help for your good work.
                </h1>
                <h2>
                    Set up a profile in 1 minute! <br />
                    1. Click "Sign Up" <br />
                    2. Fill in your volunteering details <br />
                    3. Wait for supporters <br />
                </h2>
            </div>
            <div id="project-list" >
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    )
};

export default HomePage;