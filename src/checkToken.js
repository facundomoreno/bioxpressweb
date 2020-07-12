const checkToken = (token) => {    
     if(token != null){
    
    var dateNow = Date.now();
    let buff = new Buffer(token.split(".")[1], "base64");
    let data = buff.toString("ascii");    
    var iat = JSON.parse(data).iat;
    var exp = JSON.parse(data).exp;
    console.log({"iat":iat, "exp":exp})

    if(exp  < dateNow / 1000)
    {
        return false
    }
    else
    {
        return true
    }
}

}
export default checkToken;