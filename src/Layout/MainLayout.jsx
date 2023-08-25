import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Fotter';
import Navbar from '../Pages/Share/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer /> 
        </div>
    );
};

export default MainLayout;