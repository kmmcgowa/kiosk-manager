import { createConnection } from 'typeorm'

createConnection()
  .catch(err => {
    console.log("Error connecting to DB: ", err)
    process.exit(1)
  })