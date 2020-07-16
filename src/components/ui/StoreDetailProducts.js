import React from "react";
import "./StoreDetailProducts.css";
import { Link } from "react-router-dom";

const StoreDetailProducts = ({ products }) => {
  return (
    <div className="store-detail-product-container">
      {products.map((product) => (
        <div>
          <Link to={`/product/${product.id_product}`} className="link-product">
            <div key={product.id_product} className="store-detail-product-card">
              <img
                src={product.path}
                alt="store-detial-product"
                className="store-detail-product-img"
              ></img>
              <div className="store-detail-product-titleandprice">
                <h1 className="store-detail-product-title">{product.title}</h1>
                <h2 className="store-detail-product-price">{"$ " + product.price}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StoreDetailProducts;
