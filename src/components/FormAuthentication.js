import React, {useState} from 'react';
import axios  from 'axios';
const Authentication = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {username, password});
            setToken(response.data.token);
        } catch (error) {
            console.error('Login failed: ', error);
        }
    };
    const handleLogout = () => {
        setToken('');
        //clear the saved token
    };

    return (
        <div>
            <h2>Token based Authentication</h2>
            {token ? (
                <button onClick={handleLogout}>Logout</button>
            ): (
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>Login</button>
            </div>)}
        </div>
    );
};

export default Authentication;