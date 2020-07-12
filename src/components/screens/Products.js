import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import checkToken from "../../checkToken";
import Search from '../ui/Search'

const Products = () => {
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const[query, setQuery] = useState('')

  const options = {
    url: "http://localhost:3002/products/getProductsByFilters",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      title: query,
      minS: 1,
      maxS: 100000,
      minP: 1,
      maxP: 100000,
      id_category: 1,
    },
  };

  const fetchProducts = async () => {
    const res = await axios(options);
    console.log(res.data.data)
    setProducts(res.data.data)
    console.log(products)
    
  };

  useEffect(() => {
        
      fetchProducts();
    
  }, [query]);


  return (
    <div>

      <Search getQuery={(q) => setQuery(q)}/>

      {products.map(product => (
          <h3>{product.title}</h3>
      ))}  
      
    </div>
  );
};

export default Products;
