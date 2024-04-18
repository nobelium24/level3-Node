const { Schema, model, models } = require("mongoose")


const shoppingListSchema = new Schema({
    name: { required: true, type: String, trim: true },
    price: { type: Number, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: {public_id:String, secure_url:String}, required: true, trim: true },
    description: { type: String, required: true, trim: true },
})

const shoppingListModel = models.shoppingList_tbs || model("shoppingList_tbs", shoppingListSchema)

module.exports = { shoppingListModel }