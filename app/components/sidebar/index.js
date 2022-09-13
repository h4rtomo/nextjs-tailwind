import React, { useState } from "react"

import {
  HiMenuAlt1,
  HiMenuAlt3,
  HiLockClosed,
  HiChartPie,
  HiAdjustments,
  HiChat,
  HiShoppingBag,
  HiArchive,
  HiCube,
  HiViewBoards,
  HiUser,
} from "react-icons/hi"

import Link from "next/link"

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", link: "/", icon: HiChartPie, margin: false },
    { name: "Role", link: "/", icon: HiLockClosed, margin: false },
    { name: "Employee", link: "/", icon: HiUser, margin: false },
    { name: "Item Category", link: "/", icon: HiViewBoards, margin: true },
    { name: "Product", link: "/", icon: HiCube, margin: false },
    { name: "Stock", link: "/", icon: HiArchive, margin: false },
    { name: "Order", link: "/", icon: HiShoppingBag, margin: true },
    { name: "Message", link: "/", icon: HiChat, margin: true },
    { name: "Setting", link: "/", icon: HiAdjustments, margin: true },
  ]
  const [open, setOpen] = useState(true)
  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-[68px]"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-5 flex justify-end">
        {open ? (
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <HiMenuAlt1
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <div className="mt-4 flex flex-col relative">
        {menus?.map((menu, i) => (
          <Link href={menu?.link} key={i}>
            <div
              className={`${
                menu.margin ? "mt-5" : ""
              } group flex items-center text-sm gap-3.5 font-medium w-full p-2 cursor-pointer hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `300ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  open ? "opacity-1" : "opacity-0"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open ? "hidden" : ""
                } absolute z-[2] left-[60px] bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
