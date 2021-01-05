const { MongoClient } = require('mongodb');


export async function connectToDatabase() {

    if (cachedClient && cachedDb) {
      return { client: cachedClient, db: cachedDb }
    }
  
    const client = await MongoClient.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  
    const db = await client.db(dbName)
  
    cachedClient = client
    cachedDb = db
  
    return { client, db }
  }