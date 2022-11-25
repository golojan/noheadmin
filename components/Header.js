import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">
                  <div className="input-group search-area d-lg-inline-flex d-none">
                    <input type="text" className="form-control" placeholder="Search here..." />
                    <div className="input-group-append">
                      <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2" /></a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Header