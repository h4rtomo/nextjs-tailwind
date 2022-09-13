import { HiBell } from "react-icons/hi"
export default function Navbar() {
  return (
    // <div className="navbar bg-base-100 px-5 fixed top-0 right-0">
    <div className="navbar bg-base-100 px-5 sticky top-0">
      <div className="flex-1 flex justify-between">App Name</div>
      <div className="flex justify-between">
        <div className="mr-5">
          <label tabIndex={0}>
            <div className="indicator">
              <HiBell size={26} className="cursor-pointer" />
              <div className="w-[10px] h-[10px] bg-rose-500 rounded-full absolute right-0 top-0"></div>
            </div>
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-circle avatar border-violet-100 border-[4px]"
          >
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
