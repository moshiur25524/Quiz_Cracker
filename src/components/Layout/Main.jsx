import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header />
            <div className='main'>
                <Outlet />
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Main;