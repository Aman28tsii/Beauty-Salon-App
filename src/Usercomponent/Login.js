import React, { useState } from "react";
import axios from 'axios';
import Service from "./Service";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/xxx/login', {
                username: username,
                password: password
            });

            if (response.data.success) {
                setIsLoggedIn(true);
                setToken(response.data.token);
                console.log("Login Successful");
            } else {
                console.log("Incorrect username or password");
            }
        } catch (error) {
            console.error("An error occurred while logging in:", error);
        }
    }

    return (
        <div className="mainContainer">
            {!isLoggedIn ? (
                <>
                    <div className="titleContainer">Login</div>
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        className="inputBox"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="inputButton" onClick={handleLogin}>Login</button>
                </>
            ) : (
                <div>
                    <Service token={token} />
                    
            
                </div>
            )}
        </div>
    );
}

export default Login;