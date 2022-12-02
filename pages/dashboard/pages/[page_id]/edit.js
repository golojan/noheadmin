import React, { useEffect, useState } from 'react'
import Layout from '../../../../components/Layout'
import { withAuthSync } from '../../../../libs/withAuthSync'
import { useRouter } from 'next/router'

const EditPage = () => {
  // const [] = useState()
  const [newPage, setNewPage] = useState({ shortname: '', title: '', content: '' })

  const route = useRouter();
  const { page_id } = route.query;

  useEffect(() => {
    const getPage = async () => {
      const result = await fetch(`/api/pages/${page_id}/info`)
      const page = await result.json();
      if (page.status) {
        alert(JSON.stringify(page.data));
        setNewPage(page.data);
      }
    }
    getPage();
  }, [page_id])


  const processUpdatePage = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(newPage));
    // const result = await fetch(`/api/pages/${page_id}/update`)
    // const deleted = await result.json();
    // const data = deleted.data;
    // if (data.deletedCount === 1) {
    //   route.push("/dashboard/pages")
    // }
  }
  return (
    <Layout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="form-head d-flex align-items-center mb-sm-4 mb-0">
            <div className="mr-auto">
              <h2 className="text-black font-w600">Edit Page</h2>
              <p className="mb-0">This will edit this page</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-xl-12 col-xxl-12" style={{ minHeight: '300px' }}>
              <div className="card">
                <div className="card-header">
                  <h4>Page Title : <span className='text-danger'>{newPage.title} ({newPage.shortname})</span></h4>
                </div>
                <div className="card-body">
                  <div class="basic-form">
                    <form onSubmit={processUpdatePage}>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" style={{ width: '100%' }} onChange={(e) => setNewPage({ ...newPage, title: e.target.value })} value={newPage.title} />
                      </div>
                      <div class="form-group">
                        <textarea class="form-control form-control-lg text-dark" placeholder="Page Contents" rows="4" id="comment" onChange={(e) => setNewPage({ ...newPage, content: e.target.value })}>{newPage.content}</textarea>
                      </div>
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Update Page</button>
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

export default withAuthSync(EditPage)