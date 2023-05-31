import React from 'react';
import SimpleNav from '../Component/SimpleNavbar/SimpleNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <SimpleNav></SimpleNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;