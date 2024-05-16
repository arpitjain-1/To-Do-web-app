import { getUser } from "../service/auth.js";

async function restrictLoggedUser(req, res, next){
    const userId = req.cookies?.uid;
    if(!userId) return res.redirect('/login');

    const user = await getUser(userId);
    if(!user) res.redirect('/login');

    next();
}

async function checkAuth(req, res, next){
    const userId = req.cookies?.uid;

    const user = await getUser(userId);

    req.user = user;

    next();
}

export {
    restrictLoggedUser, 
    checkAuth,
}