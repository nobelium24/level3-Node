const express = require("express")
const {connectToDB} = require("./database/index");
const { shoppingItemRoutes } = require("./routes/shoppingListRoute");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/list", shoppingItemRoutes)

connectToDB().then(()=>{
    const server = app.listen(5000,()=>{
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(error)
})