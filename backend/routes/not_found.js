const { Router } = require("express");
const route = Router();

route.use("/", function (req, res) {
    const incoming_ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    return res.json({
        success: false,
        message: `Driver [${incoming_ip}]: Method [${req.method?.toUpperCase()}] - Route ${req.baseUrl} Not Located On This Server`
    })
})

module.exports = route