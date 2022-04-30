import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navibar from './components/Navbar';
import Svyaz from './components/Svyaz';
import MainProvider from './context/MainProvider';

import HomePage from './pages/HomePage';


const MyRoutes = () => {
    return (
        <MainProvider>
            <BrowserRouter>
               <Navibar/>
               <Routes>
                   <Route path='/' element={<HomePage/>}/>
                   
               </Routes>
               <Svyaz/>
            </BrowserRouter>
        </MainProvider>
    );
};

export default MyRoutes;