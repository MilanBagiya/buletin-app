import { useEffect, useState } from "react";
import "./blog.scss";

function Blog() {
  const [blog, setBLog] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/2")
      .then((response) => response.json())
      .then((data) => setBLog(data));
  }, []);

  return (
    <section>
      <div className="app-blog">
        <div className="row">
          <div className="col-6">
            <div className="app-blog-wrapper">
              <img src={blog.thumbnail} alt="wallImage" />
            </div>
          </div>

          <div className="col-6">
            <div className="app-blog-wrapper">
              <div className="blog_text">
                <div className="app-sub-title d-flex justify-content-between align-items-center">
                  <div className="app-icon">
                    <img src={blog.thumbnail} alt="Avatar" />
                  </div>
                  <span>{blog.product} </span>{" "}
                  <span className="dot-span"></span>
                  <span> {blog.stock} minutes ago</span>
                </div>
                <div className="app-title">{blog.title}</div>
                <div className="sub-text">{blog.description}</div>
                <div className="footer-text d-flex justify-content-between align-items-center">
                  <span className="text-danger">{blog.category} </span>
                  <span className="dot-span"></span> <span>{blog.price}$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
