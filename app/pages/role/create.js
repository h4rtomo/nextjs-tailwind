import React, { useEffect, useState } from "react"

import axios from "axios"
import Link from "next/link"
import Router from "next/router"

import Sidebar from "../../components/sidebar"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Alert from "../../components/alert"
import InputForm from "../../components/form/input"

export default function App() {
  const [roleName, setRolenName] = useState("")
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

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
          try {
            setShowAlert(true)
            setAlertMessage(err.response.data[0])
          } catch (error) {
            setShowAlert(true)
            setAlertMessage("Failed connect API")
          }
        })
    }
  }

  return (
    <>
      <Header title={"Create Role"} />
      <div className="flex h-auto min-h-screen font-[Plus Jakarta Sans]">
        <Sidebar />
        <div className="grow-[1] bg-[#EEE] flex flex-col relative">
          <Navbar />
          <div className="px-5 flex-auto mb-20">
            <div className="mt-5 bg-white p-4 rounded-md shadow-lg shadow-sky-100">
              <Alert
                type="error"
                color="rose"
                message={alertMessage}
                show={showAlert}
                onclick={() => setShowAlert(false)}
              />
              <h1 className="text-3xl text-slate-800 font-bold mb-5">
                Create Role
              </h1>
              <InputForm
                value={roleName}
                onchange={(e) => setRolenName(e.target.value)}
                label="Role Name"
              />
              <div className="flex items-center mt-4">
                {/* <button
                  className={`rounded-md text-white px-3 py-2 bg-gray-400 text-sm mr-2`}
                >
                  <Link href="/role">Back</Link>
                </button> */}
                <button
                  onClick={submitData}
                  className={`rounded-md text-white px-4 py-2 text-md ${
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
    </>
  )
}
