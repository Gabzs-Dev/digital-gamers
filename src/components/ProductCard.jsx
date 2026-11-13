function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <span className="product-tag">
          {product.tag}
        </span>

        <span className="product-icon">
          {product.icon}
        </span>
      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </strong>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;