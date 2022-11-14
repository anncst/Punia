import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://mongo:27017')

const db = client.db('app')

export default db
