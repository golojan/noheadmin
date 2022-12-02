import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { withAuthSync } from '../../../libs/withAuthSync'
import { useAtom } from 'jotai'
import { pagesAtom } from '../../../store'


const CreatePage = () => {
  const [newPage, setNewPage] = useState({ title: '', content: '' })
  const [pages, setPages] = useAtom(pagesAtom);
  useEffect(() => {

  })
  const processCreatePage = async (e) => {
    e.preventDefault();
    const result = await fetch('/api/pages/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPage)
    })
    const created = await result.json();
    alert(JSON.stringify(created));
  }
  return (
    <Layout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="form-head d-flex align-items-center mb-sm-4 mb-0">
            <div className="mr-auto">
              <h2 className="text-black font-w600">Create Page</h2>
              <p className="mb-0">NOHE Website Page Managment</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-xl-12 col-xxl-12" style={{ minHeight: '300px' }}>
              <div className="card">
                <div className="card-header">
                  <h4>Add Page</h4>
                </div>
                <div className="card-body">
                  <div class="basic-form">
                    <form onSubmit={processCreatePage}>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" style={{ width: '100%' }} onChange={(e) => setNewPage({ ...newPage, title: e.target.value })} placeholder="Page Title" />
                      </div>
                      <div class="form-group">
                        <textarea class="form-control form-control-lg text-dark" placeholder="Page Contents" rows="4" id="comment" onChange={(e) => setNewPage({ ...newPage, contents: e.target.value })}></textarea>
                      </div>
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Create New Page</button>
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

export default withAuthSync(CreatePage)