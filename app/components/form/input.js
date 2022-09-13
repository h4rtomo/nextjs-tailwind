import React, { useState } from "react"
export default function InputForm(props) {
  const [hasBlur, setHasBlur] = useState(false)
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor="role_name">
        <span className="label-text text-sky-500 font-semibold">
          {props.label}
        </span>
      </label>
      <input
        id="role_name"
        className={`input input-bordered w-full max-w-xs bg-gray-200 text-[#000] ${
          props.error || (props.value == "" && hasBlur) ? "border-rose-500" : ""
        }`}
        type="text"
        onChange={props.onchange}
        value={props.value}
        placeholder="Role Name"
        autoComplete="off"
        onBlur={() => setHasBlur(true)}
      />
      {props.error || (props.value == "" && hasBlur) ? (
        <label className="label">
          <span className="label-text-alt text-rose-500">
            {props.error ? props.error : props.label + " is required"}
          </span>
        </label>
      ) : null}
    </div>
  )
}
