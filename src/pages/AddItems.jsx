import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddItems = () => {
  const [image, setImage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    try {
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("image", image);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/food/add`,
        data,
      );
      if (response.data.success) {
        setFormData({
          name: "",
          description: "",
          price: 0,
          category: "",
        });
        setImage(false);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Internal Server Error!");
      console.log("Error in handleSubmit(AddItems):", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Add Item</legend>

          {image ? (
            <div className="card bg-base-300 w-96 shadow-sm">
              <figure>
                <img src={URL.createObjectURL(image)} />
              </figure>
            </div>
          ) : (
            <div className="card bg-base-300 text-neutral-content w-96">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Preview</h2>
              </div>
            </div>
          )}
          <label className="label">Upload Image</label>
          <input
            type="file"
            className="file-input"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <label className="label">Product Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label className="label">Description</label>
          <textarea
            className="textarea h-24"
            placeholder="Describe Product"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <label className="label">Product Category</label>
          <select
            className="select"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Pick a Category
            </option>
            <option>fruit</option>
            <option>soup</option>
            <option>sandwitches</option>
          </select>

          <label className="label">Price</label>
          <input
            type="number"
            className="input"
            placeholder="0"
            name="price"
            min="0"
            required
            value={formData.price}
            onChange={handleChange}
          />

          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default AddItems;
