//@ts-check

const {Router} = require("express")
const {register, loginUser, checkStatus} = require("../controllers/userController")

const userRoute = Router()

userRoute.post("/register", register);
userRoute.post("/login", loginUser);
userRoute.get("/status", checkStatus)

module.exports = {userRoute}