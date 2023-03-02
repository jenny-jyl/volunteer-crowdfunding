import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function CreateProjectForm() {
    const [credentials, setCredentials] = useState({
        title: '',
        description: '',
        goal: '',
        image: '',
        is_open: '',
        owner: '',
        total: '',
        location: '',
        organization: '',
        website: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (
    //         credentials.title && credentials.description && credentials.goal && credentials.image && credentials.is_open && credentials.owner && credentials.total && credentials.location && credentials.organization && credentials.website) {
    //         postData().then((response) => {
    //             // window.localStorage.setItem("token", response.token);
    //             ("credentials", response.credentials)
    //             navigate("/projects");
    //         })
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData().then((response) => {
            ("credentials", response.credentials)
            navigate("/projects");
        })
    }


    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        return response.json()
    }

    return (
        <form method="post">
            <div className='ProjectField'>
                <label htmlFor='title'>Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='description'>Description:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    onChange={handleChange}
                    maxLength="500"
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='goal'>Goal:</label>
                <input
                    type="number"
                    id="goal"
                    placeholder="Goal ($)"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='image'>Image:</label>
                <input
                    type="text"
                    id="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='is_open'>Volunteering program:</label>
                <input
                    type="text"
                    id="is_open"
                    placeholder="True or False"
                    defaultValue="true"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='owner'>Volunteer:</label>
                <input
                    type="text"
                    id="owner"
                    placeholder="Name of volunteer:"
                    defaultValue="1"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='total'>Total:</label>
                <input
                    type="number"
                    id="total"
                    placeholder="Total:"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='location'>Location:</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Enter location:"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='organisation'>Organisation:</label>
                <input
                    type="text"
                    id="organisation"
                    placeholder="Organisation:"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <label htmlFor='website'>Website:</label>
                <input
                    type="url"
                    id="website"
                    placeholder="Enter portfolio:"
                    onChange={handleChange}
                />
            </div>
            <div className='ProjectField'>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
};

export default CreateProjectForm;