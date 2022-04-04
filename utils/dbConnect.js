import mongoose from 'mongoose'

const connection = {}
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }

console.log(MONGODB_URI)
async function dbConnect() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect( MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState
    console.log('Connected to DB ' + connection.isConnected)
}

export default dbConnect