import React from 'react'
import Head from 'next/head'
import NavHeader from './NavHeader'
import Header from './Header'
import Deznav from './Deznav'
import Footer from './Footer'
import { useAtom } from 'jotai'
import { menuOpenedAtom } from '../store'

const Layout = ({ children }) => {
    const [menuOpened, setMenuOpened] = useAtom(menuOpenedAtom);
    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <div id={"main-wrapper"} className={`show ${menuOpened ? 'menu-toggle' : ''}`}>
                <NavHeader />
                <Header />
                <Deznav />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout