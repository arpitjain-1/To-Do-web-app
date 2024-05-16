import Task from '../Model/TaskModel.js';

// Get all tasks for a user
export const handleTaskShowing = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

// Create a new task
export const handleTaskCreation = async (req, res) => {
    try {
        const { description } = req.body;
        const newTask = new Task({ description, userId: req.user._id });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: 'Error creating task' });
    }
};

// Update a task
export const handleTaskUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, { completed }, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: 'Error updating task' });
    }
};

// Delete a task
export const handleTaskDeletion = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Error deleting task' });
    }
};
