import React, {useState, useEffect} from 'react'


const Home = () => {

    const [userData, setUserData] = useState([])
    console.log(JSON.parse(localStorage.getItem('token')).result.username);
   

    useEffect(()=>{
        //setUserData(JSON.parse(localStorage.getItem('token')))
        var data = JSON.parse(localStorage.getItem('token')).result;
        setUserData({"username": data.username, "ds_type": data.ds_type})
        
        

    });

    return (
        <div>
            <h1>{`¡Bienvenido ${userData.username}!`}</h1>
        </div>
    )
}

export default Home
