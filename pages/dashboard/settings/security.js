import React from 'react'
import Layout from '../../../components/Layout'
import { withAuthSync } from '../../../libs/withAuthSync'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety, faTools } from '@fortawesome/free-solid-svg-icons'

const Security = () => {
  return (
    <Layout>
        <div className="content-body">
        <div className="container-fluid">
          <div className="form-head d-flex align-items-center mb-sm-4 mb-3">
            <div className="mr-auto">
              <h1 className="text-black font-w600">Profile Security</h1>
            </div>
          </div>

          <div className="text-center mb-0">
            <h1>Under Construction...</h1>
            <FontAwesomeIcon icon={ faTools } size={120} style={{ height: "60px", color: "808080" }} />
          </div>
        </div>
        </div>
    </Layout>
    )
}

export default withAuthSync(Security)