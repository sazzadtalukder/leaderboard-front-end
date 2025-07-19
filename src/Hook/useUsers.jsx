import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useUsers = () => {
    const { data: users =[] ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://leaderboard-backend-l7wr.onrender.com/users');
            return res.data;
        },
    });
    return [users,refetch]
};

export default useUsers;