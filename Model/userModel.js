import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    userName:{
        required: true,
        type: String,
        unique: true,
    },
    password:{
        required: true,
        type: Number,
    }
}, { timestamps: true});

const user = mongoose.model("allusers", userSchema);

export default user;