import React, { useState, useEffect } from "react";
import CardLogIn from "../ui/CardLogIn";
import "./LogIn.css";
import axios from "axios";

import { useHistory } from "react-router-dom";

const LogIn = () => {
  let history = useHistory();

  const [values, setValues] = useState({});
  const [success, setSuccess] = useState(false);

  const options = {
    url: "http://localhost:3002/users/login",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      username: values.user,
      password: values.password,
    },
  };

  const login = async () => {
    const res = await axios(options);
    if (res.status === 200) {
      let buff = new Buffer(res.data.token.split(".")[1], "base64");
      let data = buff.toString("ascii");
      //console.log(JSON.parse(data).result.username);

      localStorage.setItem("tokenInfo", data);
      localStorage.setItem("token", res.data.token);

      history.push({
        pathname: "/home",
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      history.push("home");
    }
    login();
  }, [values]);

  return (
    <div className="card-container">
      <CardLogIn getValues={(v) => setValues(v)} />
    </div>
  );
};

export default LogIn;
