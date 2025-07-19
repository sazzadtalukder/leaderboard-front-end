import React, { useState } from 'react';
import axios from 'axios';
import Leaderboard from '../LeaderBoard/LeaderBoard';
import useUsers from '../../Hook/useUsers';

export default function ClaimPoints() {
    const [selectedUserId, setSelectedUserId] = useState('');
    const [newUserName, setNewUserName] = useState('');
    // const [message, setMessage] = useState('');
    const [users, refetch ] = useUsers();
    

    const handleClaim = async () => {
        if (!selectedUserId) return;
        const res = await axios.post('https://leaderboard-backend-seven.vercel.app/claims', { userId: selectedUserId });
        // setMessage(`Awarded ${res?.data?.points} points to ${res?.data?.user}`);
        refetch();  
    };
    const handleAddUser = async () => {
        if (!newUserName) return;
        await axios.post('https://leaderboard-backend-seven.vercel.app/users', { name: newUserName });
        setNewUserName('');
        refetch();
    };


    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Claim Points</h1>

            <select
                className="border p-2 mb-4"
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
            >
                <option value="">Select a user</option>
                {users?.map(user => (
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>

            <button
                onClick={handleClaim}
                className="ml-2 bg-green-800 text-white px-4 py-2"
            >
                Claim
            </button>

            <div className="mt-4">
                <input
                    className="border p-2"
                    placeholder="New user name"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                />
                <button
                    onClick={handleAddUser}
                    className="ml-2 bg-green-800 text-white px-4 py-2"
                >
                    Add User
                </button>
            </div>

            {/* {message && <p className="mt-4">{message}</p>} */}
            <Leaderboard></Leaderboard>
        </div>
    );
}
