const dotenv = require("dotenv");
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const MAILER_PASSWORD = process.env.MAILER_PASSWORD;
const MAILER_GMAIL = process.env.MAILER_GMAIL;

module.exports = {MONGODB_URI, JWT_SECRET, MAILER_GMAIL, MAILER_PASSWORD}