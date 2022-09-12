import React, { useEffect, useState } from "react"

import axios from "axios"
import Link from "next/link"
import Router from "next/router"

import Sidebar from "../../components/sidebar"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function App() {
  const [roleName, setRolenName] = useState("")
  const [loading, setLoading] = useState(false)

  const submitData = async () => {
    if (roleName == "" || loading) {
    } else if (roleName.length < 3) {
    } else {
      setLoading(true)
      const url = "http://localhost:8026/api/role/create/"

      axios
        .post(
          url,
          {
            role_name: roleName,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyOTUzNTkzLCJpYXQiOjE2NjI4ODE1OTMsImp0aSI6ImI2MjdmYmVhN2YzNzQ3MTBhM2IzZmNiYjEzMTk3YmE2IiwidXNlcl9pZCI6MX0.Hp592WuzPu-klgGl8CwB_r2Phdj5EP9imGRpKFyXKas",
            },
          }
        )
        .then((res) => {
          console.log(res)
          setLoading(false)
          if (res.status == 200) {
            Router.push("/role")
          } else {
            alert(res.response.data[0])
          }
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
          alert(err.response.data[0])
        })
    }
  }

  return (
    <div className="flex h-auto min-h-screen font-sans">
      <Sidebar />
      <div className="ml-[240px] grow-[1] bg-[#EEE] flex flex-col relative">
        <Navbar />
        <div className="px-5 flex-auto mb-20">
          <div className="mt-5 bg-white p-4 rounded-md shadow-lg shadow-sky-100">
            <h1 className="text-3xl text-slate-800 font-bold rh">
              Create Role
            </h1>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="role_name">
                <span className="label-text">Role name</span>
              </label>
              <input
                id="role_name"
                className="input input-bordered w-full max-w-xs"
                type="text"
                onChange={(e) => setRolenName(e.target.value)}
                value={roleName}
                placeholder="Role Name"
              />
              <label className="label">
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>
            <div className="flex items-center mt-4">
              <button
                className={`rounded-md text-white px-3 py-2 bg-gray-400 text-sm`}
              >
                <Link href="/role">Back</Link>
              </button>
              <button
                onClick={submitData}
                className={`rounded-md text-white px-3 py-2 ml-2 text-sm ${
                  roleName == "" ? "bg-gray-500" : "bg-sky-500"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
