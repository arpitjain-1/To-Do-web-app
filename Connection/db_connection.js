import mongoose from "mongoose";

function connect(URL){
    return mongoose.connect(URL);
}

export default connect;