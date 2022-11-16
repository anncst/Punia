import { ObjectID } from "bson";
import { Request, Response } from "express";
import Joi from "joi";
import * as repository from '../repository'

const schema = Joi.object({
  date: Joi.date()
})
export const removeWeight = async (req: Request, res: Response) => {
  const weight = await schema.validateAsync(req.body)
  await repository.deleteOne(weight)
}