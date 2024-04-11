
const express = require("express")
const {connectToDB} = require("./database/index");
const { shoppingItemRoutes } = require("./routes/shoppingListRoute");
const {userRoute} = require("./routes/userRoute")


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/list", shoppingItemRoutes)
app.use("/users", userRoute)

connectToDB().then(()=>{
    const server = app.listen(5000,()=>{
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(error)
})