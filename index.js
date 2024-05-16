import express from "express";
import user from "./Model/userModel.js";
import connect from "./Connection/db_connection.js";
import path from "path";
import cookieParser from "cookie-parser";
import { restrictLoggedUser, checkAuth } from "./middleware/auth.js";

import router from "./Routers/user_router.js";
import staticRouter from "./Routers/static_router.js";
import taskRouter from "./Routers/taskRoute.js";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

connect(`mongodb://127.0.0.1:27017/user`)
.then(() => console.log(`DB connected`))
.catch(() => console.log(`DB rejected`))

app.use('/', checkAuth, staticRouter);
app.use('/user', router );
app.use('/task', restrictLoggedUser, taskRouter);


app.listen(PORT);
