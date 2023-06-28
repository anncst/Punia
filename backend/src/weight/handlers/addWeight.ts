import { Request, Response } from "express"
import Joi from "joi"
import { Weight } from "../types"
import * as repository from '../repository'

const schema = Joi.object<Omit<Weight, 'date'>>({
  value: Joi.number(),
})

export const addWeight = async (req: Request, res: Response) => {
  const weight = await schema.validateAsync(req.body)
  await repository.add(weight.value)
  res.send()
}
