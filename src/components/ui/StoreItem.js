import React from "react";
import './StoreItem.css'

const StoreItem = ({store}) => {
  return (
    <div className="card-container-store">
      <img alt="store-img" className="store-img" src={store.store_pic}></img>
      <h2 className="store-title">{store.store_name}</h2>
    </div>
  );
};

export default StoreItem;
