import React, { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/v1/get/allblogs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchAllBlogs();
  }, []);

  return (
    <main className="my-5">
      <div className="container shadow-lg">
        <section className="text-center">
          <h2 className="mb-5 my-3">
            <strong>Latest Posts</strong>
          </h2>

          <div className="row">
            {blogs && blogs.length > 0 ? (
              blogs.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img
                        src={item.imageUrl || "https://via.placeholder.com/300"} // Fallback image
                        className="w-100"
                        alt={item.title}
                      />
                      <a href="#">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 182, 43, 0.7)" }}></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description.slice(0, 100)}...</p>
                      <button className="btn btn-primary">Read More</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No blogs available</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
