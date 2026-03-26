import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";

const ListItems = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/food/list`,
    );
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching Lists!");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/api/food/remove`,
      { data: { id: foodId } },
    );
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/images/${item.image}`}
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs btn-circle"
                  onClick={() => removeFood(item._id)}
                >
                  <RxCross1 size={20} className="hover:text-error" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ListItems;
