import jwt from "jsonwebtoken";
const encryptKey = "$#@%@#$";

function setuser(user){
    return jwt.sign({
        userName: user.userName,
        password: user.password,
    }, encryptKey);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, encryptKey);
}

export{
    setuser,
    getUser
}