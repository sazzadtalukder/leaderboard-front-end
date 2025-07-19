

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="p-4 bg-green-800 text-white flex gap-4 font-bold">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "underline text-yellow-300" : ""
                }
            >
                Claim Points
            </NavLink>
            <NavLink
                to="/claim-history"
                className={({ isActive }) =>
                    isActive ? "underline text-yellow-300" : ""
                }
            >
                Claim History
            </NavLink>
        </nav>
    );
};

export default Nav;
