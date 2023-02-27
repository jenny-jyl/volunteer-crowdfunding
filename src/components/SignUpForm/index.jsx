import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };
    // ^^just asking us to remember what is in our input

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            // credentials.first_name && credentials.last_name 
            credentials.username && credentials.email && credentials.password) {
            postData().then((response) => {
                // window.localStorage.setItem("token", response.token);
                ("credentials", response.credentials)
                console.log(credentials)
                navigate("/");
            })
        }
    };

    // event.preventDefault() = dont send anything yet. We want user to fill out username and pw first

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        return response.json()
    }

    return (
        <form>
            {/* <div>
                <label htmlFor='name'>First name</label>
                <input
                    type="text"
                    id="first_name"
                    placeholder="First name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='name'>Last name</label>
                <input
                    type="text"
                    id="last_name"
                    placeholder="Last name"
                    onChange={handleChange}
                />
            </div> */}
            <div>
                <label htmlFor='username'>Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    )
};

export default SignUpForm;