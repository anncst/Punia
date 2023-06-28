import { Request, Response } from "express"
import Joi from "joi"
import { Food } from "../types"
import * as repository from '../repository'

const schema = Joi.object<Omit<Food, 'date'>>({
  value: Joi.number(),
})

export const addFood = async (req: Request, res: Response) => {
  const food = await schema.validateAsync(req.body)
  await repository.add(food.value)
  res.send()
}
