//@ts-check

const userModel = require("../models/userModel");
const argon2 = require("argon2");
const { createToken, verifyToken } = require("../services/sessionservice");
const sendMail =  require("../services/mailerService")

const register = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body

        const duplicateUser = await userModel.findOne({ email })
        if (duplicateUser) return res.status(400).send({ message: "Email in use" });

        const hashedPassword = await argon2.hash(password);

        await userModel.create({
            name,
            email,
            password: hashedPassword,
            isAdmin
        })

        await sendMail(email, name)

        return res.status(201).send({ message: "Account created successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error" })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const verifyEmail = await userModel.findOne({ email })
        if (!verifyEmail) return res.status(404).send({ message: "User not found" })

        const verifyPassword = await argon2.verify(verifyEmail.password, password)
        if (!verifyPassword) return res.status(400).send({ message: "Invalid password" })

        const token = createToken(email, verifyEmail.isAdmin)

        return res.status(200).send({ Message: `Welcome, ${verifyEmail.name}`, token })
    } catch (error) {
        return res.status(500).send({ message: "Internal server error" })
    }
}

const checkStatus = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        // console.log(token)
        const verifiedToken = verifyToken(token)
        console.log(verifiedToken)
        if(verifiedToken.role === "User"){
            return res.status(200).send({message:`${verifiedToken.email} is a user`})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error" })
    }
}
module.exports = { register, loginUser, checkStatus }