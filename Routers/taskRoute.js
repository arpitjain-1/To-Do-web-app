import express from "express";
import{
    handleTaskShowing,
    handleTaskCreation,
    handleTaskUpdate,
    handleTaskDeletion
}from "../Controller/taskController.js"

const router = express.Router();

router.get('/', handleTaskShowing);
router.post('/', handleTaskCreation);
router.put('/:id', handleTaskUpdate);
router.delete('/:id', handleTaskDeletion);

export default router;