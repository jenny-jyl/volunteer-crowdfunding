import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { oneProject } from "../data"

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data)
            })
    }, []);

    return (
        <div>
            <h2>{projectData.title}</h2>
            <img src={projectData.image} id="project-img"></img>
            <h4>Background: {projectData.description}</h4>
            <h4>Fund goal: ${projectData.goal}</h4>
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return <li key={key}>{pledgeData.amount}</li>;
                })}
            </ul>
            <h4>Learn more: {projectData.website}</h4>
        </div>
    )
};


export default ProjectPage;