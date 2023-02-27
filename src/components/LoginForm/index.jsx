import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: '',
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

    // console.log(credentials)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/");
            })
        }
    };

    // event.preventDefault() = dont send anything yet. We want user to fill out username and pw first

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
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

export default LoginForm;