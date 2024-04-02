const mongoose = require("mongoose")
const {MONGODB_URI} = require("../constants/index")

const connectToDB = async() => {
    try {
        if(typeof MONGODB_URI !== 'string') throw {message:"Invalid connection string"}
        await mongoose.connect(MONGODB_URI)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectToDB}