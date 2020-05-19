import Task from "../models/taskModel.js"
import checkAPIs from 'express-validator';

const { validationResult } = checkAPIs;

export const createTask = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const testTask = Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    });
    testTask.save()
        .then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Task."
            });
        });
}

export const findAllTask = (req, res) => {
    Task.find()
        .then(tasks => {
            res.send(tasks);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tasks."
            });
        });
}

export const findTaskById = (req, res) => {
    Task.findById(req.params.taskId)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            res.send(task);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Task not found with id " + req.params.taskId
                });
            }
            return res.status(500).send({
                message: "Task retrieving note with id " + req.params.taskId
            });
        });
};