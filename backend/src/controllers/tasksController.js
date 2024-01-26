const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {

    const tasks = await tasksModel.getAll();
    
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTasks = await tasksModel.createTask(req.body);
    return {insertId: createdTasks.insertId};
}

module.exports = {
    getAll,
    createTask
};