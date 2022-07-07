import { ObjectId } from 'mongodb'
import db from '../utils/db'

export const collection = db.collection('hello')

export const add = (message) => collection.insertOne({ message })

export const findById = (id) => collection.findOne({ _id: ObjectId(id) })
