import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import useBrandRouter from './routes/brandRoutes'
import useLectureRouter from './routes/lectureRoutes'
import useAreaRouter from './routes/areaRoutes'
import useCategoryRouter from './routes/categoryRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

// Connect to db
const mongoStr = process.env.DB_URL || ''

mongoose.connect(mongoStr)
const db = mongoose.connection

db.on('error', error => {
  console.log(error)
})

db.once('connected', () => {
  console.log('DB connected!')
})

app.use('/api/areas', useAreaRouter)
app.use('/api/brands', useBrandRouter)
app.use('/api/lectures', useLectureRouter)
app.use('/api/categories', useCategoryRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
