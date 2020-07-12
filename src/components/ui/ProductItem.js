import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-face">
          <h2>{product.title}</h2>
          <ul>
            <li>
              <strong>Price: $ </strong> {product.price}
            </li>
            <li>
              <strong>Tienda: </strong> {product.store_name}
            </li>
            <li>
              <strong>Stock disponible: </strong> {product.stock}
            </li>
            <li>
              <strong>Descripción: </strong>{product.ds_product}
            </li>
            <li>
              <strong>Categoría: </strong> {product.ds_category}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
