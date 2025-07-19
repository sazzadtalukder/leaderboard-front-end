import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Pages/Home/Home";
import ClaimPoints from "../Pages/ClaimPoint/ClaimPonit";
import Leaderboard from "../Pages/LeaderBoard/LeaderBoard";
import ClaimHistory from "../Pages/ClaimHistory/ClaimHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <ClaimPoints></ClaimPoints>
            },
            {
                path: '/leaderboard',
                element: <Leaderboard></Leaderboard>
            },
            {
                path: '/claim-history',
                element: <ClaimHistory></ClaimHistory>
            }
        ]
    },
]);