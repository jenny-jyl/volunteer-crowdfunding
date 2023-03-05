import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };

    // console.log(credentials)

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (credentials.username && credentials.password) {
    //         postData().then((response) => {
    //             window.localStorage.setItem("token", response.token);
    //             // window.location.reload(false);
    //             navigate("/");
    //             // setIsLoggedIn(true);
    //         })
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                setIsLoggedIn(true);
                navigate("/", { state: { isLoggedIn: true } });
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
            <div className='signInField'>
                <label htmlFor='username'>Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div className='signInField'>
                <label htmlFor='password'>Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <div className='signInField'>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
        </form>
    )
};

export default LoginForm;