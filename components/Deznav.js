import React from 'react'
import { authlogout } from '../libs/withAuthSync'

const Deznav = () => {
    return (
        <>
            <div className="deznav">
                <div className="deznav-scroll">
                    <ul className="metismenu" id="menu">
                        <li><a className="has-arrow ai-icon">
                            <i className="flaticon-381-networking" />
                            <span className="nav-text">Dashboard</span>
                        </a>
                            <ul ariaExpanded="false">
                                <li><a href={"/dashboard/pages"}>Manage Pages</a></li>
                                <li><a href={"/dashboard/pages/add"}>Create Page</a></li>
                            </ul>
                        </li>

                        <li><a className="has-arrow ai-icon" >
                            <i className="flaticon-381-network" />
                            <span className="nav-text">Security & Settings</span>
                        </a>
                            <ul ariaExpanded="false">
                                <li><a href={"/dashboard/settings"}>Website Settings</a></li>
                                <li><a href={"/dashboard/settings/security"}>Profile Security</a></li>
                            </ul>
                        </li>
                        <button type="button" className="btn btn-outline-danger" onClick={authlogout}>Log Out</button>
                    </ul>
                    <div className="copyright">
                        <p><strong>NOHE Admin Dashboard</strong> © 2020 All Rights Reserved</p>
                        <p>Made with ♥ by De-Golojan</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deznav