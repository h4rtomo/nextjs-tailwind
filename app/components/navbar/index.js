export default function Navbar() {
  return (
    // <div className="navbar bg-base-100 px-5 fixed top-0 right-0">
    <div className="navbar bg-base-100 px-5 sticky top-0">
      <div className="flex-1 flex justify-between">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-between">
        <div className="dropdown dropdown-end bg-gray-200 rounded-full mr-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
                  class="fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-violet-300 dark:fill-slate-600"
                ></path>
                <circle
                  cx="12"
                  cy="11"
                  r="1"
                  class="fill-white dark:group-hover:fill-white dark:fill-slate-400"
                ></circle>
                <circle
                  cx="9"
                  cy="11"
                  r="1"
                  class="fill-violet-200 dark:group-hover:fill-white dark:fill-slate-400"
                ></circle>
                <circle
                  cx="15"
                  cy="11"
                  r="1"
                  class="fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white"
                ></circle>
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
