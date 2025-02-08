import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddBlog = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/v1/get/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchAllCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("category", input.category);
    formData.append("description", input.description);
    if (file) formData.append("thumbnail", file);

    try {
      const res = await axios.post("http://localhost:9000/api/v1/add/blog", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Error submitting blog");
    }
  };

  return (
    <div className="container shadow">
      <h2 className="text-center my-3">Add a New Blog</h2>
      <div className="col-xl-12 my-3 d-flex align-items-center justify-content-center">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                className="form-control"
                placeholder="Enter blog title"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-control"
                name="category"
                value={input.category}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
              >
                <option disabled>Select Category</option>
                {categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={input.description}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                className="form-control"
                placeholder="Blog description"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Thumbnail</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
