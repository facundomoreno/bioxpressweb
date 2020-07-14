import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductDetailCard from '../ui/ProductDetailCard'
import './ProductDetail.css'

const ProductDetail = ({match}) => {

    const token = localStorage.getItem('token');

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const options = {
        url: `http://localhost:3002/products/getProductByIdProduct/${match.params.product}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      };

    const fetchProduct = async () =>
    {
        const res = await axios(options)   
        const data = res.data.data[0];
        console.log(data)     
        setProduct(data)               
              
    }

    useEffect(() => 
    {        
        fetchProduct();
        setIsLoading(false)        
        
    },[]);
    return (
        <div className="product-detail-container">
            <ProductDetailCard key={product.id_product} product={product}/>            
        </div>
    )
}

export default ProductDetail
