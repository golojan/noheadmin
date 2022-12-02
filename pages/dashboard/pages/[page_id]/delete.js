import React, { useEffect, useState } from 'react'
import Layout from '../../../../components/Layout'
import { withAuthSync } from '../../../../libs/withAuthSync'
import { useRouter } from 'next/router'


const DeletePage = () => {

  const [newPage, setNewPage] = useState({ shortname: '', title: '', contents: '' })

  const route = useRouter();
  const { page_id } = route.query;

  useEffect(() => {
    const getPage = async () => {
      const result = await fetch(`/api/pages/${page_id}/info`)
      const page = await result.json();
      if (page.status) {
        setNewPage(page.data);
      }
    }
    getPage();
  }, [page_id])

  const deletePage = async (e) => {
    e.preventDefault();
    const result = await fetch(`/api/pages/${page_id}/delete`)
    const deleted = await result.json();
    const data = deleted.data;
    if (data.deletedCount === 1) {
      route.push("/dashboard/pages")
    }
  }
  return (
    <Layout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="form-head d-flex align-items-center mb-sm-4 mb-0">
            <div className="mr-auto">
              <h2 className="text-black font-w600">Delete Page</h2>
              <p className="mb-0">This will delete this page Permanently</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-xl-12 col-xxl-12" style={{ minHeight: '300px' }}>
              <div className="card">
                <div className="card-header">
                  <h4>Page Title : <span className='text-danger'>{newPage.title}</span></h4>
                </div>
                <div className="card-body">
                  <div class="basic-form">
                    <form onSubmit={deletePage}>
                      <div className="form-group">
                        Are you sure you want to delete this page?
                      </div>

                      <div class="input-group-append">
                        <button class="btn btn-danger" type="submit">Yes, Delete Page</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout >
  )
}

export default withAuthSync(DeletePage)