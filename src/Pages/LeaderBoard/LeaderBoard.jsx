import React from 'react';
import useUsers from '../../Hook/useUsers';

export default function Leaderboard() {
    const [users ] = useUsers();
    return (
        <div className="p-4">
            <h1 className="text-3xl mb-4 font-bold">Leaderboard</h1>
            <table className="w-full border">
                <thead>
                    <tr className="bg-green-800 text-white">
                        <th className="p-2 border">Rank</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Points</th>
                    </tr>
                </thead>
                <tbody>
                    { users && users?.map((user, indx) => (
                        <tr key={user._id}>
                            <td className="p-2 border">{indx + 1}</td>
                            <td className="p-2 border">{user?.name}</td>
                            <td className="p-2 border">{user?.totalPoints}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
