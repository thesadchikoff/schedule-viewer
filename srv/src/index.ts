import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import { router } from 'router/router'
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT
app.use(cors())
app.use(router)
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
