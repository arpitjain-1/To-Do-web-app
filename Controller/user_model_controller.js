import user from "../Model/userModel.js";
import { setuser } from "../service/auth.js";

async function handleUserSignup(req, res) {
    const body = req.body;
    console.log(body);
    if (!body) return res.status(404).send("no data found, bad request");
    try {
        user.create({
            name: body.name,
            email: body.email,
            userName: body.userName,
            password: body.password,
        })
        return res.render("login")
    } catch (error) {
        console.log(error);
        res.send(`Internal Error`)
    }
}

async function handleUserLogin(req, res) {
    const {userName, password} = req.body;
    try {
        const existingUser = await user.findOne({userName, password});
        if(!existingUser) return res.render('login', {
            error: `Invalid Id or Password`,
        });
        const token = setuser(existingUser);
        res.cookie("uid", token);
        return res.render("home")
    } catch (error) {
        console.log(error);
        res.send(`Error Occured`)
    }
}


export {
    handleUserSignup,
    handleUserLogin,
}