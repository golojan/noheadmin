import React from 'react'
import { withAuthSync } from '../../libs/withAuthSync'
import Footer from './../../components/Footer';
import Header from '../../components/Header';
import NavHeader from '../../components/NavHeader';
import ContentBody from '../../components/ContentBody';
import Deznav from './../../components/Deznav';
import Head from 'next/head';


const Dashbaord = () => {
    return (
        <>
        <Head>
            <title>Admin Dashboard</title>
        </Head>
        {/* <div id="main-wrapper"> */}
            <NavHeader />
            <Header />
            <Deznav />
            <ContentBody />
            <Footer />
        {/* </div> */}
        </>
    )
}

export default withAuthSync(Dashbaord)