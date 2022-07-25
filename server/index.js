import Link from './link.model.js'
import { configDB } from './mongo.config.js'
import dotenv from 'dotenv'
import express from 'express'
import asyncHandler from 'express-async-handler'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'

const PORT = process.env.REACT_APP_PORT || 3000

dotenv.config()
configDB()

const app = next({ dev })
const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const server = express()

		server.use(express.json())

		server.get(
			'/api/links',
			asyncHandler(async (req, res) => {
				const links = await Link.find({})

				return res.json(links)
			})
		)

		server.post(
			'/api/links',
			asyncHandler(async (req, res) => {
				const { title, domain, url, isOffer, subTitle } = req.body

				const link = await Link.create({
					title,
					domain,
					url,
					isOffer,
					subTitle,
				})

				res.json(link)
			})
		)

		server.all('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(PORT, (error) => {
			if (error) throw error
			console.log(`> Ready on http://localhost:${PORT}`)
		})
	})
	.catch((error) => {
		console.log(error)
		process.exit(1)
	})
