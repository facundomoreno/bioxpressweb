import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import checkToken from "../../checkToken";

const Home = () => {
  let history = useHistory();

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const logOut = () => {
    localStorage.clear();
    console.log("desloguedo");
    history.replace("/");
  };

  useEffect(() => {
    try{
       var token = localStorage.getItem("token");
       var data = JSON.parse(localStorage.getItem("tokenInfo")).result;

    }  
    catch(e)
    {
        console.log(e);
        logOut();
    }
    
    if (checkToken(token) && data.ds_type === "administrador") {
      if (loading === true) {
        //setUserData(JSON.parse(localStorage.getItem('token')))

        setUserData({
          username: data.username,
          ds_type: data.ds_type,
          first_name: data.first_name,
        });
        setLoading(false);
      }
    } else {
      logOut();
    }
  }, []);

  return (
    <div>
      <button onClick={() => logOut()}>LogOut</button>
      <h1>{`¡Bienvenido ${userData.first_name}!`}</h1>
    </div>
  );
};

export default Home;
