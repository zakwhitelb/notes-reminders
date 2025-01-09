const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
    throw new Error("Missing JWT_SECRET! Set it in your environment variables.");
}

const getUserIdByToken = (req, res, next) => {
    const token = req.params.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided." });
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    } 
    catch (err) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

module.exports = getUserIdByToken;
