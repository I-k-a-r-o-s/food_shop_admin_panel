import { FaRegListAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { MdAddCircleOutline } from "react-icons/md";
import { NavLink } from "react-router";

const Sidebar = () => {
  const baseClass =
    "flex items-center gap-2 w-full px-3 py-2 rounded-btn is-drawer-close:tooltip is-drawer-close:tooltip-right";

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        <ul className="menu w-full grow gap-15 p-2">
          <li>
            <NavLink
              to="/add"
              data-tip="Add Items"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? "bg-primary text-primary-content" : "hover:bg-base-300"}`
              }
            >
              <MdAddCircleOutline size={20} />
              <span className="is-drawer-close:hidden">Add Items</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/list"
              data-tip="List Items"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? "bg-primary text-primary-content" : "hover:bg-base-300"}`
              }
            >
              <FaRegListAlt size={20} />
              <span className="is-drawer-close:hidden">List Items</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders"
              data-tip="Orders"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? "bg-primary text-primary-content" : "hover:bg-base-300"}`
              }
            >
              <GoChecklist size={20} />
              <span className="is-drawer-close:hidden">Orders</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
