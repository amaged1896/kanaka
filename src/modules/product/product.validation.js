import Joi from "joi";

export const addProductSchema = Joi.object({
    title: Joi.string().alphanum().min(2).max(30).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(5).max(300).required(),
    category: Joi.string().min(24).max(24).required(),
});

export const updateProductSchema = Joi.object({
    id: Joi.string().min(24).max(24).required(),
    title: Joi.string().alphanum().min(2).max(30),
    price: Joi.number().min(0),
    description: Joi.string().min(5).max(300),
    category: Joi.string().min(24).max(24)
});

/*
title
price
priceAfterDiscount
description
imgCover
images
category
*/
