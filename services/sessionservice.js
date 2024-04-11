//@ts-check

const jsonwebtoken = require("jsonwebtoken");
const {JWT_SECRET} = require("../constants/index")


const createToken = (email, isAdmin) =>{
    const role = isAdmin ? "Admin" : "User";
    if(!JWT_SECRET) throw {message:"Invalid Secret key"}

    const token = jsonwebtoken.sign({email, role}, JWT_SECRET, {expiresIn:"24h"})

    return token
}


const verifyToken = (token)=>{
    const verifiedToken = jsonwebtoken.verify(token, JWT_SECRET)
    return verifiedToken
}

module.exports = {createToken, verifyToken}