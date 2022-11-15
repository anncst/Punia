import { Request, Response } from "express";
import * as repository from '../repository'

export const removeWeight = (req: Request, res: Response) => {
  repository.deleteOne(req.body.id)
}