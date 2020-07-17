import React, {useState, useEffect} from "react";
import Rating from '@material-ui/lab/Rating';
import "./StoreDetailCard.css";
import "./StoreDetailProducts";
import StoreDetailProducts from "./StoreDetailProducts";
import userPh from '../../user.png'


const StoreDetailCard = ({ store, products }) => {
  const [photo, SetUserPhoto] = useState('')
  
  useEffect(()=>{
    if(store.profile_pic != 'no')
    {
      SetUserPhoto(store.profile_pic)
    }
    else
    {
      SetUserPhoto(userPh);
    }


  },[])
  return (
    <div className="card-store-detail">
        <div className="store-detail-owner-container">
                <h4 className="store-detial-owner-name">{store.first_name +" " +store.last_name}</h4>
                <img
                  className="store-detail-user-pic"
                  alt="store-detail-user-pic"
                  src={photo}
                ></img>
              </div>
      <div className="store-detail-info-container">
        <h1 className="store-detail-title">{store.store_name}</h1>
        <img
          alt="store-detail-pic"
          className="store-detail-image"
          src={store.store_pic}
        ></img>
        <Rating className="rating-component-store-detail" name="read-only"  value={store.rating} precision={0.5} readOnly></Rating> (x ventas)
        <div className="store-detail-ul-container">
          <ul className="store-detial-ul">
            <li className="store-detail-li">
              <h4 className="store-detail-ds">{store.ds_store}</h4>
            </li>

            <li className="store-detail-li">
              <h4 className="store-detail-adress">{`Ubicación: ${store.adress}`}</h4>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      </div>

      <h2 className="store-detail-productos-title-alert">Productos: </h2>
      <StoreDetailProducts products={products} />
    </div>
  );
};

export default StoreDetailCard;
