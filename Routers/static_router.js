import express from "express";

const router = express.Router();

router.get('/', async(req, res) => {
    if(!req.user) return res.redirect('/login');
    // const allToDos = await todo.find({});
    return res.render("home");
})

router.get('/login', (req, res) => {
    res.render("login");
})

router.get('/signup', (req, res) => {
    res.render("signup");
})

export default router;