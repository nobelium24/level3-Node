//@ts-check

const { shoppingListModel } = require("../models/shoppingListModel")
const cloudinary = require("../config/cloudinaryConfig");

const insertIntoShoppingList = async (req, res) => {
    try {
        const { name, price, category, image, description } = req.body
        if (name === "" || price === "" || category === "" || image === "" || description === "") {
            return res.status(400).send({ message: "Invalid query parameters" })
        }

        const uploadedImage = await cloudinary.uploader.upload(image)
        const uploadResult = {
            public_id: uploadedImage.public_id,
            secure_url:uploadedImage.secure_url
        }

        const response = await shoppingListModel.create({
            name,
            price,
            category,
            image:uploadResult,
            description
        })
        return res.status(201).send({ message: "Item created successfully", response })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Internal server error" })
    }
}

const readAllItemsInList = async (req, res) => {
    try {
        const listItems = await shoppingListModel.find({})
        if (!listItems) return res.status(500).send({ message: "" })
        return res.status(200).send(listItems)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}

const readSingleItemInList = async (req, res) => {
    try {
        const { id } = req.params;
        const listItem = await shoppingListModel.findById({ _id: id });
        return res.status(200).send(listItem)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}

const updateListItem = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, category, image, description, } = req.body
        const findItem = await shoppingListModel.findById({ _id: id })
        if (!findItem) return res.status(404).send({ message: "Item not found" });

        const update = await shoppingListModel.updateOne({
            name: name || findItem.name,
            price: price || findItem.price,
            category: category || findItem.category,
            image: image || findItem.image,
            description: description || findItem.description
        })

        if (!update) return res.status(500).send({ message: "Update failed" })
        return res.status(201).send({ message: "Update successful" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
}

const deleteListItem = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await shoppingListModel.findByIdAndDelete({ _id: id })
        if (!deleted) return res.status(500).send({ message: "Delete operation failed" })
        return res.status(204)
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}

module.exports = { insertIntoShoppingList, readAllItemsInList, readSingleItemInList, updateListItem, deleteListItem }