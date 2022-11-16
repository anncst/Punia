import { Request, Response } from "express";
import Joi from "joi";
import * as repository from '../repository'

const schema = Joi.object({
  date: Joi.date()
})

export const getFood = async (req:Request, res:Response) => {
  const date = await schema.validateAsync(req.body)
  const food = await repository.findById(date)
  res.json(food)
 }