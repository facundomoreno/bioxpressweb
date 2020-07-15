import React from "react";
import "./StoreDetailCard.css";
import "./StoreDetailProducts"
import StoreDetailProducts from "./StoreDetailProducts";

const StoreDetailCard = ({ store, products }) => {
  return (
    <div className="card-store-detail">
      <div className="store-detail-info-container">
        <h1 className="store-detail-title">{store.store_name}</h1>
        <img
          alt="store-detail-pic"
          className="store-detail-image"
          src={store.store_pic}
        ></img>
        <h2 className="store-detail-rating">{`Rating: ${store.rating}/5 `}</h2>
        <div className="store-detail-ul-container">
          <ul className="store-detial-ul">
            <li className="store-detail-li">
              <h4 className="store-detail-ds">{store.ds_store}</h4>
            </li>

            <li className="store-detail-li">
              <h4>{`Ubicación: ${store.adress}`}</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className="store-detail-products-container">

          <h2>Productos: </h2>
          <StoreDetailProducts products={products}/>

      </div>
    </div>
  );
};

export default StoreDetailCard;
