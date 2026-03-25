import { FaRegListAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <ul className="menu w-full grow gap-15">
          {/* List item */}
          <li>
            <Link to={"/add"}>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Items"
              >
                <MdAddCircleOutline size={20} />
                <span className="is-drawer-close:hidden">Add Items</span>
              </button>
            </Link>
          </li>

          {/* List item */}
          <li>
            <Link to={"/list"}>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="List Items"
              >
                <FaRegListAlt size={20} />
                <span className="is-drawer-close:hidden">List Items</span>
              </button>
            </Link>
          </li>

          <li>
            <Link to={"/orders"}>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Orders"
              >
                <GoChecklist size={20} />
                <span className="is-drawer-close:hidden">Orders</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
