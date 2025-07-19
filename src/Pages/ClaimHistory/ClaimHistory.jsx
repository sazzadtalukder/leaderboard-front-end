import { useEffect, useState } from "react";
import axios from "axios";
export default function ClaimHistory() {
    const [claims, setClaims] = useState([]);
    const [usersMap, setUsersMap] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [claimsRes, usersRes] = await Promise.all([
                    axios.get("https://leaderboard-backend-seven.vercel.app/claims"),
                    axios.get("https://leaderboard-backend-seven.vercel.app/users")
                ]);
                setClaims(claimsRes.data);
                const map = {};
                usersRes.data.forEach(user => {
                    map[user._id] = user.name;
                });
                setUsersMap(map);
                console.log(map)
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false); // Hide loader after fetch (success or error)
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-40 gap-10">
                
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                <div>
                    <p>Please wait!.. History is coming...</p>
                </div>
            </div>
        );
    }
    return (
        <div>
            <h2 className="text-3xl font-bold my-12">Claim History</h2>
            <ul className="space-y-1">
                { claims && claims?.map(claim => (
                    <li key={claim._id} className="border p-2 rounded">
                        {usersMap[claim.userId] || "Unknown User"} claimed {claim?.points} points on {new Date(claim?.claimedAt).toLocaleString()}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
