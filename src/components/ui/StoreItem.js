import React from "react";
import "./StoreItem.css";
import { Link } from "react-router-dom";

const StoreItem = ({ store }) => {
  return (
    <div>
      <Link to={`/store/${store.id_store}`} className="link-product">
        <div className="card-container-store">
          <img
            alt="store-img"
            className="store-img"
            src={store.store_pic}
          ></img>
          <h2 className="store-title">{store.store_name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default StoreItem;
