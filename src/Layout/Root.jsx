import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Home/Nav/Nav';


const Root = () => {
    return (
        <div className="min-h-screen">
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;