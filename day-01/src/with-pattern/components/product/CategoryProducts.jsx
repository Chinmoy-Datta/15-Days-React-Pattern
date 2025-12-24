import React from 'react'

function CategoryProducts({
    products,
    onCart
}) {
    return (
         <section className="category-products">
      {products?.length === 0 ? (
        <p className="category-empty">
          Select a category to view products
        </p>
      ) : (
        <div className="category-products-grid">
          {products?.map((product) => (
            <div key={product.id} className="product-card fade-in">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <span className="product-category">
                  {product.category}
                </span>

                <h3 className="product-name">{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-price">
                  <span className="current-price">
                    ₹{product.price}
                  </span> 
                </div>
                <div className="">
                  <button
                  className="add-to-cart-btn"
                  onClick={onCart}
                  
                  >
                     Add To cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
    )
}

export default CategoryProducts
