import Head from 'next/head'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { logoAtom } from '../store'
import { authLogin } from '../libs/withAuthSync'

export default function Home() {
  const [error, setError] = useState("")
  const [errorColor, setErrorColor] = useState("green")
  const [logon, setLogon] = useAtom(logoAtom)
  const processLogin = async (event) => {
    event.preventDefault();
    setError(".....Busy.....");
    setErrorColor("green")
    const result = await fetch('/api/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logon)
    })
    const admin = await result.json();
    const { status } = admin;
    if (status) {
      setError("");
      authLogin(admin.accid);
    } else {
      setErrorColor("red")
      setError("Invalid Username and Password");
    }
  }
  return (
    <>
      <Head>
        <title>NOHE Admin</title>
      </Head>
      <div className="authincation" style={{ marginTop: "5%" }}>
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className='text-center'><h3 style={{ color: errorColor }}>{error}</h3></div>
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <a href="'/'"><h1 className='text-white'>NOHE Admin</h1></a>
                      </div>
                      <h4 className="text-center mb-4 text-white">Sign in your account</h4>
                      <form onSubmit={processLogin}>
                        <div className="form-group">
                          <label className="mb-1 text-white"><strong>Email</strong></label>
                          <input type="email" required={true} className="form-control text-black form-control-lg" defaultValue={logon.email}
                            onChange={(e) => setLogon({ ...logon, email: e.target.value })} />
                        </div>

                        <div className="form-group">
                          <label className="mb-1 text-white"><strong>Password</strong></label>
                          <input type="password" className="form-control text-black form-control-lg" required={true} onChange={(e) => setLogon({ ...logon, password: e.target.value })} />
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn bg-white text-primary btn-block">Sign Me In</button>
                        </div>
                      </form>
                      <div className="new-account mt-3 text-center">
                        <p className="text-white">Contact Owner for Account Setup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
