import "./newsCard.scss";

function NewsCard({ productData }) {
  const { title, description, price, stock, brand, category, thumbnail } =
    productData;

  return (
    <>
      <div className="col-3">
        <div className="app-news">
          <div className="app-blog-img">
            <img src={thumbnail} alt={thumbnail} />
          </div>
          <div className="blog_text">
            <div className="app-sub-title d-flex justify-content-between align-items-center">
              <div className="app-icon">
                <img src={thumbnail} alt="Avatar" />
              </div>
              <span>{brand} </span> <span className="dot-span"></span>
              <span> {stock} minutes ago</span>
            </div>
            <div className="app-title-sm">{title}</div>
            <div className="app-description-sm">{description}</div>
            <div className="footer-text d-flex justify-content-between align-items-center">
              <span className="text-danger">{category}</span>
              <span className="dot-span"></span> <span> {price}$</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
