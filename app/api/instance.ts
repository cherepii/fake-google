import axios from 'axios'

export const instance = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000/api'
			: 'https://google-green.vercel.app/api',
	headers: {
		'Content-Type': 'application/json',
	},
})
