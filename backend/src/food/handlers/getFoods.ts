import { Request, Response } from "express"
import Joi from "joi"
import * as repository from '../repository'

const schema = Joi.object({
  from: Joi.date(),
  to: Joi.date(),
})

export const getFoods = async (req: Request, res: Response) => {
  const {from, to} = await schema.validateAsync(req.body)
  const result  = await repository.findByDates(from,to)
  res.json(result)
}