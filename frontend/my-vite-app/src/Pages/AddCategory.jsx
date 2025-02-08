import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddCategory = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
  });

  const handleCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/api/v1/add/category", input, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding category");
    }
  };

  return (
    <div className="container shadow">
      <h2 className="text-center my-3">Add a New Category</h2>
      <div className="col-md-12 my-3 d-flex align-items-center justify-content-center">
        <div className="row">
          <form onSubmit={handleCategory}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                className="form-control"
                placeholder="Enter category title"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
