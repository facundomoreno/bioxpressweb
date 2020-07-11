import React, {useState} from 'react'
import './CardLogin.css'

export const CardLogIn = ({getValues}) => {
    const [userText, setUserText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const onchangeUser = (e) => {
        setUserText(e.target.value)
    }
    const onchangePass = (e) => {
        setPasswordText(e.target.value)
    }

    const onClick = () =>
    {
        getValues({"user": userText, "password":passwordText})        
    }



    return (
        <div className="card">
            <h1 className="login-h1">Log In</h1>
            <input onChange = {(e) => onchangeUser(e)} className="input-user" type="text" placeholder="Usuario"></input>
            <input onChange={(e) => onchangePass(e)} type="password" placeholder="Contraseña"></input>
            <button onClick={() => onClick()} className="submit">Continue</button>
            
        </div>
    )
}

export default CardLogIn;
