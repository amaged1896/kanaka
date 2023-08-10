export const validation = (schema) => {
    return (req, res, next) => {
        let validationParam = {};
        Object.assign(validationParam, req.body, req.params, req.query);
        let { error } = schema.validate(validationParam, {
            abortEarly: false,
        });
        if (error) {
            error = error.details.map((details) => details.message.split('"')[2]);
            return res.json({ message: error[0] });
        }
        next();
    };
};