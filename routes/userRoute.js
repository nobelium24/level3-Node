//@ts-check

const { Router } = require("express")
const { register, loginUser, checkStatus } = require("../controllers/userController")
const { validate } = require("../middlewares/validator")
const { userValidationSchema } = require("../middlewares/userValidate")

const userRoute = Router()

userRoute.post("/register", validate(userValidationSchema), register);
userRoute.post("/login", loginUser);
userRoute.get("/status", checkStatus)

module.exports = { userRoute }