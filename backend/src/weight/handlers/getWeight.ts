import { Request, Response } from "express";
import * as repository from '../repository'

export const getWeight = async (req:Request, res:Response) => {
  const weight = await repository.findById(req.body.id)
  res.json(weight)
 }