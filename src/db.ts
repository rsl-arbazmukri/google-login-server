import mongoose, { Connection } from 'mongoose'
import { MONGO_URI } from "./utils/secrets";

mongoose.connect(MONGO_URI)

const dbConnection: Connection = mongoose.connection

export default dbConnection