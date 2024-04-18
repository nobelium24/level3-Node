
const express = require("express")
const {connectToDB} = require("./database/index");
const { shoppingItemRoutes } = require("./routes/shoppingListRoute");
const {userRoute} = require("./routes/userRoute")
const cors = require("cors")


const app = express();

app.use(cors({origin:"*"}))
app.use(express.json({limit:"200mb"}));
app.use(express.urlencoded({ extended: true, limit:"200mb" }))

app.use("/list", shoppingItemRoutes)
app.use("/users", userRoute)

connectToDB().then(()=>{
    const server = app.listen(5000,()=>{
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(error)
})