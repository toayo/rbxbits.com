const { db } = require("../database");

module.exports = async function AuthorizeMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token || token == null || token == "") {
        return res.json({
            success: false,
            message: "Unauthorized - Not Allowed"
        });
    }

    try {
        const user = await db.getUserByToken(token);

        if (user != null) {
            req.user = user;
            next();
        } else {
            return res.json({
                success: false,
                message: "Unauthorized"
            })
        }
    } catch (error) {
        console.error("Error in authorization middleware:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
