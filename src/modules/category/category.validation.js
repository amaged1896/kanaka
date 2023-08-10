import Joi from "joi";

export const addCategorySchema = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required()
});

export const updateCategorySchema = Joi.object({
    id: Joi.string().min(24).max(24).required(),
    name: Joi.string().alphanum().min(2).max(30)
});