const { Router } = require("express");
const AuthorizeMiddleware = require("../middlewares/authorize");

const route = Router();

route.get("/me", AuthorizeMiddleware, function (req, res) {
    return res.json({
        user: req?.user
    });
});

module.exports = route;
