import mongoose from 'mongoose';
import STATUS from '../enums/STATUS.js';

const TaskModel = mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    status: { type: String, default: STATUS.TODO },
    archive: { type: Boolean, default: false }
}, {
    timestamps: true
})

export default mongoose.model('Tasks', TaskModel);