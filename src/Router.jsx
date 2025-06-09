import React from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/navbar/navbar'
import MainLayout from './layout/layout';

const RouterComponent = () => {
    return (
        <Router>
            <Navbar />
            <div className="App">
            </div>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                 
                </Route>
            </Routes>


        </Router>

    )
}

export default RouterComponent;