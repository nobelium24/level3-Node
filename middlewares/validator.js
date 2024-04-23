//@ts-check

const validate = (schema) => async (req, res, next)=> {
    const body = req.body;
    try {
        await schema.validate(body)
        next()
    } catch (error) {
        res.status(409).send({message:error.message})
    }
} 

module.exports = {validate}