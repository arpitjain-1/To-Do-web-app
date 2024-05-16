import {mongoose} from "mongoose";

const taskSchema = mongoose.Schema({
    description:{
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }
})

const Task = mongoose.model('task', taskSchema);

export default Task;