import jwt from "jsonwebtoken";

/**
 * Middleware to verify JWT token
 * Protects API routes by checking for valid authentication token
 */
export const verifyToken = (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Extract token (remove "Bearer " prefix)
        const token = authHeader.substring(7);

        // Verify token
        const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this-in-production";
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach user info to request object
        req.user = decoded;

        // Continue to next middleware/route handler
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        }
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(500).json({ message: "Server error" });
    }
};

/**
 * Optional middleware to verify token but don't fail if missing
 * Useful for routes that work for both authenticated and non-authenticated users
 */
export const optionalAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
            const token = authHeader.substring(7);
            const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this-in-production";
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
        }

        next();
    } catch (error) {
        // Don't fail, just continue without user info
        next();
    }
};
