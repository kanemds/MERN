import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import postRoutes from './routes/posts.js'

dotenv.config()
const app = express()



const CONNECTION_URL = process.env.HOST_MONGODB
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to DB')
    app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`)
    })
  })
  .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)


// Express version 4.16+, their own body-parser implementation is now included in the default Express package 

// You have added a line to your code that looks like the following:

// app.use(bodyparser.json({ limit: '30mb', extended: true }));
// If you are using Express 4.16+ you can now replace that line with:

// app.use(express.json({ limit: '30mb', extended: true }));
// you also have the following code in your environment:

// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// You can replace that with:

// app.use(express.urlencoded({ limit: '30mb', extended: true }));



app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes)