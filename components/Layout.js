import React from 'react'
import Head from 'next/head'
import NavHeader from './NavHeader'
import Header from './Header'
import Deznav from './Deznav'
import Footer from './Footer'
import Script from 'next/script'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <div id={"main-wrapper"}>
            <NavHeader />
            <Header />
            <Deznav />
            {children}
            <Footer />
            </div>
            <Script src='/vendor/global/global.min.js' strategy='lazyOnload' />
            <Script src='/vendor/chart.js/Chart.bundle.min.js' strategy='lazyOnload' />
            <Script src='/js/custom.min.js' strategy='lazyOnload' />
            <Script src='/js/deznav-init.js' strategy='lazyOnload' />
            <Script src='/vendor/bootstrap-datetimepicker/js/moment.js' strategy='lazyOnload' />
            <Script src='/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js' strategy='lazyOnload' />
            <Script src='/vendor/peity/jquery.peity.min.js' strategy='lazyOnload' />
            <Script src='/vendor/apexchart/apexchart.js' strategy='lazyOnload' />
            <Script src='/js/dashboard/dashboard-1.js' strategy='lazyOnload' />
            <Script defer src='/vendor/bootstrap-select/dist/js/bootstrap-select.min.js' strategy='lazyOnload' />


            {/* <Script lang='javascript'>
                const $ = require("jquery")
                $(function () {
                    $('#datetimepicker1').datetimepicker({
                        inline: true,
                    })
                });
            </Script> */}
        </>
    )
}

export default Layout