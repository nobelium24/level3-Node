//@ts-check

const yup = require("yup");

const userValidationSchema = yup.object().shape({
    name: yup.string()
        .min(2, "Name must contain at least 2 characters")
        .max(100, "Name must be at most 100 characters")
        .required("Name is required")
        .matches(/^[a-zA-Z0-9]+$/, "Name must contain only alphabets and numerals"),

    email: yup.string()
        .email("Invalid email address")
        .required("Email si required"),

    password: yup.string()
        .min(8, "Password must be of at least 8 characters")
        .max(100, "Password must be at most 100 characters")
        .required("Password is required")
        .matches(/^[a-zA-Z0-9]+$/, "Password must contain numerals and alphabets alone."),

    isAdmin: yup.boolean()
        .required("Admin status is required")
})

module.exports = { userValidationSchema }