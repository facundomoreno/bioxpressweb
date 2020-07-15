import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './StoreDetail.css'
import StoreDetailCard from '../ui/StoreDetailCard'

const StoreDetail = ({match}) => {

    const token = localStorage.getItem('token');
    const [store, setStore]= useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const optionsStore = {
        url: `http://localhost:3002/stores/getStoresbyid/${match.params.store}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      };
      
    const optionsStoreProducts = {
        url: `http://localhost:3002/products/getProductsByIdStore/${match.params.store}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      };

      const fetchStore = async () =>{
          const res = await axios(optionsStore);
          const data = res.data.data;
          setStore(data);       
          console.log(data)
      }
      const fetchProducts = async () =>
      {
          const res = await axios(optionsStoreProducts);
          const data = res.data.data;
          console.log(data);
          setProducts(data);
      }

      useEffect(() => {
          fetchStore();
          fetchProducts();
          setLoading(false)
      }, [])

    return (
        <div className="card-store-detail-container">
            <StoreDetailCard key={store.id_store} store={store} products={products}/>        
                        
        </div>
    )
}

export default StoreDetail
