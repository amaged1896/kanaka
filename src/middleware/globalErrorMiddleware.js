export const globalErrorMiddleware = (err, req, res, next) => {
    if (err.code === 11000) {
        return res.status(400).json({ message: "Duplicate key error: This element is already initialized" });
    }
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message, statusCode });
};