import express from 'express';
import checkAPIs from 'express-validator';

import {
    createTask,
    findAllTask,
    findTaskById
} from '../service/taskService.js';

const { body } = checkAPIs;

const testRoutes = new express.Router();

testRoutes.get("/tasks", findAllTask);
testRoutes.get("/tasks/:taskId", findTaskById);

testRoutes.post("/tasks", [
    body('title')
    .not().isEmpty()
    .trim()
    .escape()
], createTask);

export default testRoutes;