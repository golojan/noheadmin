import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import { withAuthSync } from '../../../libs/withAuthSync'
import { useAtom } from 'jotai'
import { pagesAtom } from '../../../store'
import Link from 'next/link'

const ManagePage = () => {
  const [pages, setPages] = useAtom(pagesAtom);
  useEffect(() => {
    const result = fetch('/api/pages/list');
    // const pages = result.json();
  })

  return (
    <Layout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="form-head d-flex align-items-center mb-sm-4 mb-0" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '0', right: '20px' }}><Link class="btn btn-primary" href='/dashboard/pages/add'>Create New Page</Link></div>
            <div className="mr-auto">
              <h2 className="text-black font-w600">Manage Pages</h2>
              <p className="mb-0">NOHE Website Page Managment</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-12 " style={{ minHeight: '300px' }}>

              <table className='table table-responsive bg-light p-3' style={{ width: '100%', border: '2px solid red' }}>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>SHORTNAME</td>
                    <td>TITLE</td>
                    <td>-</td>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page, index) => (
                    <>
                      <tr key={index}>
                        <td>{page._id}</td>
                        <td>{page.shortname}</td>
                        <td>{page.title}</td>
                        <td>
                          <a href={"#"} className="text-success mx-2">EDIT</a>
                          <a href={"#"} className="text-danger mx-2">DELETE</a>
                        </td>
                      </tr>
                    </>
                  ))}

                </tbody>

              </table>
            </div>
          </div>

        </div>
      </div>
    </Layout >
  )
}

export default withAuthSync(ManagePage)