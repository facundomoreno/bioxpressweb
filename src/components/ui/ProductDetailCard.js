import React from "react";
import "./ProductDetailCard.css";
import {Link} from 'react-router-dom'
const ProductDetailCard = ({ product }) => {
  return (
    <div className="card-product-detail">
      <Link to={`/store/${product.id_store}`} className="link-product">
      <div className="product-detail-store-info">        
        <img
          alt="store-pic"
          className="image-store-detail-card"
          src={product.store_pic}
        ></img>
        <h2 className="h1-store-name-product-detail">{product.store_name}</h2>
      </div>
      </Link>
      <img className="image-product-detail-card" src={product.path}></img>
      <div className="text-info-container">
        <h1 className="h1-title-detail-product">{product.title}</h1>
        <h2 className="h1-price-detail-product">
          {"Precio: $" + product.price}
        </h2>
        <ul className="ul-product-detail-card">
          <li className="li-product-detail">
            <strong className="description-product-detail">
              {product.ds_product}
            </strong>
          </li>
          <li className="li-product-detail">
            <strong>Stock: </strong>
            {product.stock}
          </li>
          <li className="li-product-detail">
            <strong>Categoría: </strong>
            {product.ds_category}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailCard;
