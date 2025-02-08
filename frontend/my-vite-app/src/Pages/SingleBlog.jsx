import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/v1/get/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchSingleBlog();
  }, [id]);

  return (
    <div className="container shadow my-3">
      <div className="col-md d-flex align-items-center justify-content-center bg-light">
        <div className="row">
          <h1 className="my-3">{blog.title}</h1>
          <img
            src={`http://localhost:9000/${blog.thumbnail || "default.jpg"}`}
            className="img-fluid"
            alt="thumbnail"
          />
          <p className="my-3">{blog.description}</p>
        </div>
      </div>
      <button onClick={() => navigate("/")} className="btn btn-primary">
        Back To Posts
      </button>
    </div>
  );
};

export default SingleBlog;
