import React, { useEffect, useState } from "react"

import axios from "axios"
import DataTable from "react-data-table-component"

import Sidebar from "../../components/sidebar"

export default function App() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalRows, setTotalRows] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const url = "http://192.168.1.5:8026/api/role/list/"

  const fetchData = async (page, size = perPage) => {
    setLoading(true)
    axios
      .get(url, {
        params: {
          format: "datatables",
          start: (page - 1) * size,
          length: size,
        },
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyOTUzNTkzLCJpYXQiOjE2NjI4ODE1OTMsImp0aSI6ImI2MjdmYmVhN2YzNzQ3MTBhM2IzZmNiYjEzMTk3YmE2IiwidXNlcl9pZCI6MX0.Hp592WuzPu-klgGl8CwB_r2Phdj5EP9imGRpKFyXKas",
        },
      })
      .then((res) => {
        setCustomers(res.data.data)
        setTotalRows(res.data.recordsTotal)
        setLoading(false)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData(currentPage)
  }, [])

  const handlePageChange = (page) => {
    fetchData(page)
    setCurrentPage(page)
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchData(page, newPerPage)
    setPerPage(newPerPage)
  }

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.role_name,
      sortable: true,
    },
    // {
    //   name: "username",
    //   selector: (row) => row.username,
    //   sortable: true,
    // },
    // {
    //   name: "email",
    //   selector: (row) => row.email,
    //   sortable: true,
    // },
  ]
  return (
    <div className="flex h-auto min-h-screen font-sans">
      <Sidebar />
      <div className="grow-[1]  bg-[#EEE]">
        <div className="my-auto h-full px-10 flex flex-col">
          <div className="mt-5 bg-white p-4 rounded-md shadow-lg shadow-sky-100">
            <DataTable
              columns={columns}
              data={customers}
              defaultSortFieldId={1}
              pagination
              paginationServer
              progressPending={loading}
              paginationTotalRows={totalRows}
              paginationDefaultPage={currentPage}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              onColumnOrderChange={({ col }) => console.log(col)}
              onSort={(col) => console.log(col)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
