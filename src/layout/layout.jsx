import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from './footer/footer';

function MainLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <div className="home-footer mt-10">
                <Footer />
            </div>
        </>
    )
}

export default MainLayout;
