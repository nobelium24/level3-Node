const { Router } = require("express")
const {
    insertIntoShoppingList,
    readAllItemsInList,
    readSingleItemInList,
    updateListItem,
    deleteListItem
} = require("../controllers/shoppingListController")


const shoppingItemRoutes = Router();

shoppingItemRoutes.post("/create-item", insertIntoShoppingList);
shoppingItemRoutes.get("/read-items", readAllItemsInList);
shoppingItemRoutes.get("/read-single-item/:id", readSingleItemInList);
shoppingItemRoutes.post("/update-shopping-list/:id", updateListItem);
shoppingItemRoutes.delete("/delete/:id", deleteListItem);

module.exports = { shoppingItemRoutes }