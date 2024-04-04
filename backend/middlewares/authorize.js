const { default: database } = require("../database");

module.exports = async function AuthorizeMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token || token == null || token == "") {
        return res.json({
            success: false,
            message: "Unauthorized - Not Allowed"
        });
    }

    try {
        const user = await database.getUserByToken(token);
        console.log(user)

        req.user = user;
        next(); // Pass control to the next middleware in the stack
    } catch (error) {
        console.error("Error in authorization middleware:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
