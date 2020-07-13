import React, { useState, useEffect } from "react";
import "./Stores.css";
import axios from "axios";
import StoresGrid from "../ui/StoresGrid";
import Search from "../ui/Search";
const Stores = () => {
  const token = localStorage.getItem("token");

  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const options = {
    url: "http://localhost:3002/stores/getStores",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      store_name: query
    },
  };

  const fetchStores = async () => {
    const res = await axios(options);

    setStores(res.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStores();
  }, [query]);

  return (
    <div className="container-stores">
      <h1 className="cantidad-busqueda-stores">
        {stores.length + " resultados coincidentes"}
      </h1>
      <Search getQuery={(q) => setQuery(q)} screen={"tienda"} />
      <StoresGrid isLoading={isLoading} stores={stores} />
    </div>
  );
};

export default Stores;
