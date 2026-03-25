import { Toaster } from "react-hot-toast";
import Nabvar from "./components/Nabvar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";
import AddItems from "./pages/AddItems";
import ListItems from "./pages/ListItems";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <Nabvar />
          {/* Page content here */}
          <div className="p-4">
            <Routes>
              <Route path="/add" element={<AddItems />} />
              <Route path="/list" element={<ListItems />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
export default App;
