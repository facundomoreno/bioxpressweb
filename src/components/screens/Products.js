import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../ui/Search";
import "./Products.css";
import ProductsGrid from "../ui/ProductsGrid";

const Products = () => {
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
 

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
      maxP: 100000
    },
  };

  const fetchProducts = async () => {
    const res = await axios(options);
    console.log(res.data.data);
    setProducts(res.data.data);
    console.log(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [query]);

  return (
    <div className="container-products">
      <h1 className="cantidad-busqueda">{products.length +" resultados coincidentes"}</h1>
      <Search getQuery={(q) => setQuery(q)} screen={"producto"} />     
      <ProductsGrid loading={loading} products={products} />
    </div>
  );
};

export default Products;
