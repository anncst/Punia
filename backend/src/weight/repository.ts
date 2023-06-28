import { ObjectId } from 'mongodb'
import db from '../utils/db'
import { Weight } from './types'

export const collection = db.collection<Weight>('weight')

export const add = (value:number) => collection.insertOne({ value, date:new Date() })

export const findById = (id: ObjectId) => collection.findOne({ _id: new ObjectId(id) })

export const deleteOne = (date: Date) => collection.deleteOne({date})

export const findByDates = (from: Date, to: Date) => collection.find({date: {$gte: from, $lte: to}})
