const validateBody = (req, res, next) => {

    const { body } = req;

    if(body.title == undefined) {
       return res.status(400).json({ message: 'O campo titulo é obrigatório.'})
    }
    if(body.title == undefined) {
        return res.status(400).json({ message: 'O campo titulo não pode está vazio.'})
    }
    next();
};

module.exports = {
    validateBody,
}