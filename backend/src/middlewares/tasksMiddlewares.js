const { response } = require("../app");

const validateFieldTitle = (req, res, next) => {

    const { body } = req;

    if(body.title == undefined) {
       return res.status(400).json({ message: 'O campo "titulo" é obrigatório.'})
    }
    if(body.title == undefined) {
        return res.status(400).json({ message: 'O campo "titulo" não pode está vazio.'})
    }
    next();
};

const validateFieldStatus = (req, res, next) => {
    const { body } = req;
    
    if (body.status == undefined) {
        return res.status(400).json({ message: 'O  campo "status" é obrigatório.'})
    }
    if (body.status == '') {
        return res.status(400).json({ message: 'O campo "status" não pode está vazio.'});
    }

    next();
};

module.exports = {
    validateFieldTitle ,
    validateFieldStatus
}