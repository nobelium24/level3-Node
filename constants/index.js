const dotenv = require("dotenv");
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD;
const MAILER_GMAIL = process.env.MAILER_GMAIL;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

module.exports = {
    MONGODB_URI,
    JWT_SECRET,
    MAILER_GMAIL,
    MAILER_PASSWORD,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
}