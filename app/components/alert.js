import React, { useState } from "react"

import { HiInformationCircle } from "react-icons/hi"

export default function Alert({ type, color, message, show, onclick }) {
  return (
    <>
      {show ? (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
            color +
            "-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <HiInformationCircle size={20} />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{type}!</b> {message}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={onclick}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  )
}
