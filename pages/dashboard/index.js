import React from 'react'
import { withAuthSync } from '../../libs/withAuthSync'
import ContentBody from '../../components/ContentBody';
import Layout from '../../components/Layout';

const Dashbaord = () => {
    return (
        <Layout>
            <ContentBody />
        </Layout>
    )
}

export default withAuthSync(Dashbaord)