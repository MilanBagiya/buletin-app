import { useEffect, useState } from "react";
import NewsCard from "../../shared/news-card/NewsCard";
import "./news.scss";

function News() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=28")
      .then((response) => response.json())
      .then((data) => setProduct(data.products));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="app-news-title">Latest News</div>
        <div className="arrow-link">
          See all <i className="bi bi-arrow-right"></i>
        </div>
      </div>
      <div className="py-4">
        <div className="row">
          {product.map((item) => (
            <NewsCard key={item.id} productData={item}></NewsCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
