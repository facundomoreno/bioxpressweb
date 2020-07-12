import React, { useState } from "react";
import "./Search.css";

const Search = ({getQuery}) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
      setText(q);
      getQuery(q);
  }
  return (
    <input
      className="input-search"
      type="text"      
      placeholder="Buscar producto"
      value={text}
      onChange={(e) => onChange(e.target.value)}
      autoFocus
    ></input>
  );
};

export default Search;
