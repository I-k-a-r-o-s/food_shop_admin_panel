import Nabvar from "./components/Nabvar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <Nabvar />
        {/* Page content here */}
        <div className="p-4">Page Content</div>
      </div>
      <Sidebar />
    </div>
  );
};
export default App;
