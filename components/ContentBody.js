import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faPeopleGroup, faUserGroup } from '@fortawesome/free-solid-svg-icons'


const ContentBody = () => {
  return (
    <>
      <div className="content-body">
        {/* row */}
        <div className="container-fluid">
          <div className="form-head d-flex align-items-center mb-sm-4 mb-3">
            <div className="mr-auto">
              <h2 className="text-black font-w600">Dashboard</h2>
              <p className="mb-0">NOHE Admin Dashboard</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="fs-34 text-black font-w600">76</h2>
                      <span>Site Pages</span>
                    </div>
                    <FontAwesomeIcon icon={faPaperclip} size={90} style={{ height: "40px", color: "#007a64" }} />
                  </div>
                </div>
                <div className="progress  rounded-0" style={{ height: 4 }}>
                  <div className="progress-bar rounded-0 bg-secondary progress-animated" style={{ width: '0%', height: 4 }} role="progressbar">
                    <span className="sr-only">0% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3  col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="fs-34 text-black font-w600">0</h2>
                      <span>Visitors</span>
                    </div>
                    <FontAwesomeIcon icon={faUserGroup} size={90} style={{ height: "40px", color: "#007a64" }} />
                  </div>
                </div>
                <div className="progress  rounded-0" style={{ height: 4 }}>
                  <div className="progress-bar rounded-0 bg-secondary progress-animated" style={{ width: '0%', height: 4 }} role="progressbar">
                    <span className="sr-only">0% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3  col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="fs-34 text-black font-w600">0</h2>
                      <span>Doctors</span>
                    </div>
                    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.3334 16.6667C38.3384 15.7489 38.0907 14.8474 37.6174 14.061C37.1441 13.2746 36.4635 12.6337 35.6501 12.2084C34.8368 11.7832 33.9221 11.59 33.0062 11.6501C32.0904 11.7101 31.2087 12.0211 30.4579 12.5489C29.707 13.0768 29.116 13.8011 28.7494 14.6426C28.3829 15.484 28.2551 16.4101 28.3799 17.3194C28.5047 18.2287 28.8774 19.0861 29.4572 19.7976C30.0369 20.5092 30.8014 21.0474 31.6667 21.3534V26.6667C31.6667 28.8768 30.7887 30.9964 29.2259 32.5592C27.6631 34.122 25.5435 35 23.3334 35C21.1232 35 19.0036 34.122 17.4408 32.5592C15.878 30.9964 15 28.8768 15 26.6667V24.8667C17.7735 24.4643 20.3097 23.0778 22.1456 20.9604C23.9815 18.8429 24.9947 16.1359 25 13.3334V3.33335C25 2.89133 24.8244 2.4674 24.5119 2.15484C24.1993 1.84228 23.7754 1.66669 23.3334 1.66669H18.3334C17.8913 1.66669 17.4674 1.84228 17.1548 2.15484C16.8423 2.4674 16.6667 2.89133 16.6667 3.33335C16.6667 3.77538 16.8423 4.1993 17.1548 4.51186C17.4674 4.82443 17.8913 5.00002 18.3334 5.00002H21.6667V13.3334C21.6667 15.5435 20.7887 17.6631 19.2259 19.2259C17.6631 20.7887 15.5435 21.6667 13.3334 21.6667C11.1232 21.6667 9.0036 20.7887 7.4408 19.2259C5.87799 17.6631 5.00002 15.5435 5.00002 13.3334V5.00002H8.33335C8.77538 5.00002 9.1993 4.82443 9.51186 4.51186C9.82442 4.1993 10 3.77538 10 3.33335C10 2.89133 9.82442 2.4674 9.51186 2.15484C9.1993 1.84228 8.77538 1.66669 8.33335 1.66669H3.33335C2.89133 1.66669 2.4674 1.84228 2.15484 2.15484C1.84228 2.4674 1.66669 2.89133 1.66669 3.33335V13.3334C1.67205 16.1359 2.68517 18.8429 4.52109 20.9604C6.357 23.0778 8.89322 24.4643 11.6667 24.8667V26.6667C11.6667 29.7609 12.8959 32.7283 15.0838 34.9163C17.2717 37.1042 20.2392 38.3334 23.3334 38.3334C26.4275 38.3334 29.395 37.1042 31.5829 34.9163C33.7709 32.7283 35 29.7609 35 26.6667V21.3534C35.9723 21.0132 36.8152 20.3797 37.4122 19.5403C38.0093 18.7008 38.3311 17.6968 38.3334 16.6667Z" fill="#007A64" />
                    </svg>
                  </div>
                </div>
                <div className="progress  rounded-0" style={{ height: 4 }}>
                  <div className="progress-bar rounded-0 bg-secondary progress-animated" style={{ width: '0%', height: 4 }} role="progressbar">
                    <span className="sr-only">0% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3  col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="fs-34 text-black font-w600">0</h2>
                      <span>Patients</span>
                    </div>
                    <FontAwesomeIcon icon={faPeopleGroup} size={90} style={{ height: "40px", color: "#007a64" }} />
                  </div>
                </div>
                <div className="progress  rounded-0" style={{ height: 4 }}>
                  <div className="progress-bar rounded-0 bg-secondary progress-animated" style={{ width: '0%', height: 4 }} role="progressbar">
                    <span className="sr-only">0% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="Daily" role="tabpanel">
                          <div className="row align-items-center">
                            <div className="col-xl-6 col-xxl-12 col-md-6">
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="Weekly" role="tabpanel">
                          <div className="d-flex flex-wrap align-items-center px-4  bg-light">
                            <div className="mr-auto py-3 d-flex align-items-center">
                              <span className="heart-ai bg-primary mr-3">
                                <i className="fa fa-heart-o" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="fs-18 mb-2">Total Patient</p>
                                <span className="fs-26 text-primary font-w600">786,360</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                {/* <div className="col-xl-12">
            <div className="card appointment-schedule">
              <div className="card-header pb-0 border-0">
                <h3 className="fs-20 text-black mb-0">Appointment Schedule</h3>
                <div className="dropdown ml-auto">
                  <div className="btn-link p-2 bg-light" data-toggle="dropdown">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#2E2E2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#2E2E2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#2E2E2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item text-black" href="javascript:;">Info</a>
                    <a className="dropdown-item text-black" href="javascript:;">Details</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 col-xxl-12 col-md-6">
                    <div className="appointment-calender">
                      <input type="text" className="form-control d-none" id="datetimepicker1" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-xxl-12  col-md-6 height415 dz-scroll" id="appointment-schedule">
                    <div className="d-flex pb-3 border-bottom mb-3 align-items-end">
                      <div className="mr-auto">
                        <p className="text-black font-w600 mb-2">Wednesday, June 3th</p>
                        <ul>
                          <li><i className="las la-clock" />09:00 - 10:30 AM</li>
                          <li><i className="las la-user" />Dr. Samantha</li>
                        </ul>
                      </div>
                      <a href="javascript:void(0)" className="text-success mr-3 mb-2">
                        <i className="las la-check-circle scale5" />
                      </a>
                      <a href="javascript:void(0)" className="text-danger mb-2">
                        <i className="las la-times-circle scale5" />
                      </a>
                    </div>
                    <div className="d-flex pb-3 border-bottom mb-3 align-items-end">
                      <div className="mr-auto">
                        <p className="text-black font-w600 mb-2">Tuesday,  June 16th</p>
                        <ul>
                          <li><i className="las la-clock" />09:00 - 10:30 AM</li>
                          <li><i className="las la-user" />Dr. Samantha</li>
                        </ul>
                      </div>
                      <a href="javascript:void(0)" className="text-success mr-3 mb-2">
                        <i className="las la-check-circle scale5" />
                      </a>
                      <a href="javascript:void(0)" className="text-danger mb-2">
                        <i className="las la-times-circle scale5" />
                      </a>
                    </div>
                    <div className="d-flex pb-3 border-bottom mb-3 align-items-end">
                      <div className="mr-auto">
                        <p className="text-black font-w600 mb-2">Saturday, June 27th</p>
                        <ul>
                          <li><i className="las la-clock" />09:00 - 10:30 AM</li>
                          <li><i className="las la-user" />Dr. Samantha</li>
                        </ul>
                      </div>
                      <a href="javascript:void(0)" className="text-success mr-3 mb-2">
                        <i className="las la-check-circle scale5" />
                      </a>
                      <a href="javascript:void(0)" className="text-danger mb-2">
                        <i className="las la-times-circle scale5" />
                      </a>
                    </div>
                    <div className="d-flex pb-3 border-bottom mb-3 align-items-end">
                      <div className="mr-auto">
                        <p className="text-black font-w600 mb-2">Wednesday, June 3th</p>
                        <ul>
                          <li><i className="las la-clock" />09:00 - 10:30 AM</li>
                          <li><i className="las la-user" />Dr. Samantha</li>
                        </ul>
                      </div>
                      <a href="javascript:void(0)" className="text-success mr-3 mb-2">
                        <i className="las la-check-circle scale5" />
                      </a>
                      <a href="javascript:void(0)" className="text-danger mb-2">
                        <i className="las la-times-circle scale5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                {/* <div className="col-xl-12">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h3 className="fs-20 text-black mb-0 mr-2">Revenue Summary</h3>
                <div className="dropdown mt-sm-0 mt-3">
                  <button type="button" className="btn bg-light text-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    2020
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="javascript:void(0);">2020</a>
                    <a className="dropdown-item" href="javascript:void(0);">2021</a>
                    <a className="dropdown-item" href="javascript:void(0);">2022</a>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div id="chartBar" />
              </div>
            </div>
          </div> */}
                <div className="col-xl-12">
                  {/* <div className="card patient-activity">
              <div className="card-header border-0 pb-0">
                <h3 className="fs-20 text-black mb-0">Recent Patient Activity</h3>
                <div className="dropdown ml-auto">
                  <div className="btn-link" data-toggle="dropdown">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0001 12C13.0001 11.4477 12.5523 11 12.0001 11C11.4478 11 11.0001 11.4477 11.0001 12C11.0001 12.5523 11.4478 13 12.0001 13C12.5523 13 13.0001 12.5523 13.0001 12Z" stroke="#2E2E2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.00006 12C6.00006 11.4477 5.55235 11 5.00006 11C4.44778 11 4.00006 11.4477 4.00006 12C4.00006 12.5523 4.44778 13 5.00006 13C5.55235 13 6.00006 12.5523 6.00006 12Z" stroke="#2E2E2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.0001 12C20.0001 11.4477 19.5523 11 19.0001 11C18.4478 11 18.0001 11.4477 18.0001 12C18.0001 12.5523 18.4478 13 19.0001 13C19.5523 13 20.0001 12.5523 20.0001 12Z" stroke="#2E2E2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item text-black" href="javascript:;">Info</a>
                    <a className="dropdown-item text-black" href="javascript:;">Details</a>
                  </div>
                </div>
              </div>
              <div className="card-body pb-0">
                <div className="table-responsive height720 dz-scroll" id="patient-activity">
                  <table className="table table-responsive-sm">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/6.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Roby Romeo</a></h6>
                              <span className="fs-14">41 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Allergies &amp; Asthma</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-primary font-w600 mb-2 d-block text-nowrap">Recovered</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/7.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Angela Nurhayati</a></h6>
                              <span className="fs-14">21 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Sleep Problem</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-danger font-w600 mb-2 text-nowrap d-block">New Patient</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/8.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">James Robinson</a></h6>
                              <span className="fs-14">41 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Dental Care</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-warning font-w600 mb-2 text-nowrap d-block">In Treatment</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/9.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Thomas Jaja</a></h6>
                              <span className="fs-14">7 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Diabetes</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-danger font-w600 mb-2 text-nowrap d-block">New Patient</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/10.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Cindy Brownleee</a></h6>
                              <span className="fs-14">71 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Covid-19 Suspect</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-warning font-w600 text-nowrap mb-2 d-block">In Treatment</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/11.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Oconner Jr.</a></h6>
                              <span className="fs-14">17 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Dental Care</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-primary font-w600 mb-2 text-nowrap d-block">Recovered</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"{&quot;images/users/7.jpg&quot;}"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Angela Nurhayati</a></h6>
                              <span className="fs-14">21 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Sleep Problem</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-danger font-w600 mb-2 text-nowrap d-block">New Patient</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/8.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">James Robinson</a></h6>
                              <span className="fs-14">41 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Dental Care</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-warning font-w600 mb-2 d-block text-nowrap">In Treatment</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex">
                            <img src={"images/users/9.jpg"} alt className="img-2 mr-3" />
                            <div>
                              <h6 className="fs-16 mb-1"><a href="patient.html" className="text-black">Thomas Jaja</a></h6>
                              <span className="fs-14">7 Years Old</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Disease</p>
                            <span className="text-primary font-w600 mb-auto">Diabetes</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="fs-14 mb-1">Status</p>
                            <span className="text-danger font-w600 mb-2 d-block text-nowrap">New Patient</span>
                            <p className="mb-0 fs-12">22/03/2020 12:34 AM</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-center border-0">
                <a href="patient.html" className="btn-link">See More &gt;&gt;</a>
              </div>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default ContentBody