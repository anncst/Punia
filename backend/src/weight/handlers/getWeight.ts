import { Request, Response } from "express";
import Joi from "joi";
import * as repository from '../repository'

const schema = Joi.object({
  date: Joi.date()
})

export const getWeight = async (req:Request, res:Response) => {
  const date = await schema.validateAsync(req.body)
  const weight = await repository.findById(date)
  res.json(weight)
 }