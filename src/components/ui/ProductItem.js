import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product.id_product}`} className="link-product">
        <div className="card-container-product">
          <img src={product.path} className="product-image"></img>

          <h2 className="title-product-item">{product.title}</h2>
          <ul>
            <li className="li-item-product">
              <strong>Price: $ </strong> {product.price}
            </li>
            <li className="li-item-product">
              <strong>Tienda: </strong> {product.store_name}
            </li>
            <li className="li-item-product">
              <strong>Stock disponible: </strong> {product.stock}
            </li>
            <li className="li-item-product">
              <strong>Descripción: </strong>
              {product.ds_product}
            </li>
            <li className="li-item-product">
              <strong>Categoría: </strong> {product.ds_category}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
