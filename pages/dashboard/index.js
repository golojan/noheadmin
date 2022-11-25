import React from 'react'
import { withAuthSync } from '../../libs/withAuthSync'
import Footer from './../../components/Footer';


const Dashbaord = () => {
    return (
        <>
        <Footer />
        </>
    )
}

export default withAuthSync(Dashbaord)