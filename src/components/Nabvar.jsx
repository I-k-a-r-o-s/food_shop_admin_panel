import { GoSidebarExpand } from "react-icons/go";
import logo from "../assets/logo.jpeg";

const Nabvar = () => {
  return (
    <nav className="navbar w-full bg-base-300">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <GoSidebarExpand size={20} />
        </label>

        <div className="px-4">
          <div className="avatar btn btn-ghost">
            <div className="w-16 rounded-full">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        {/* optional center content */}
      </div>

      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
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
    </nav>
  );
};
export default Nabvar;
