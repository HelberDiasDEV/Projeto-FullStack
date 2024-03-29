const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {

    const tasks = await tasksModel.getAll();
    
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTasks = await tasksModel.createTask(req.body);
    return {insertId: createdTasks.insertId};
}

const deleteTask = async(req, res) =>{
    const { id } = req.params;

    await tasksModel.deleteTask(id);
    return res.status(204).json();
};

const updateTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};