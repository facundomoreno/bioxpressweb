import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";
import CardsCategories from "../ui/CardsCategories";


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [insertText, setInsertText] = useState("");
  const token = localStorage.getItem("token");

  const options = {
    url: "http://localhost:3002/products/getProductCategories",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const optionsInsert = {
    url: "http://localhost:3002/products/createProductCategory",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      ds_category: insertText,
    },
  };

  const uploadCategory = async () => {
      const res = await axios(optionsInsert);     
      if(res.status === 200)
      {          
          
          alert('subido con éxito!');
          fetchCategories()
          
      }
      else
      {
          alert('error al subir');
      }
  }

  const fetchCategories = async () => {
    const res = await axios(options);
    const data = res.data.data;
    setCategories(data);

    console.log(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="categories-screen-container">
      <h1 className="categories-screen-title">Categorías de productos</h1>
      <div className="categories-screen-form">
        <input
          placeholder="Crear nueva categoría..."
          className="categories-screen-input"
          onChange={(e) => setInsertText(e.target.value)}
        ></input>
        <button onClick={() => uploadCategory()} className="categories-screen-button">OK</button>
      </div>
      <CardsCategories categories={categories} />
    </div>
  );
};

export default Categories;
