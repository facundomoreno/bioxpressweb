import React, {useState, useEffect} from 'react'
import CardLogIn from '../ui/CardLogIn'
import './LogIn.css'
import axios from 'axios'

const LogIn = () => {

    const [values, setValues] = useState({});

    const options = {
        url: 'http://localhost:3002/user/login',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     },
     data:{
         "username": values.user,
         "password": values.password
     }
    }

   

    useEffect(() => {

        axios(options)
        .then(response => {
            console.log(response);
        })
        console.log(values);
    }, [values])

    return (
        <div className="card-container">
          <CardLogIn getValues={(v) => setValues(v)}/>
        </div>
    )
}

export default LogIn
