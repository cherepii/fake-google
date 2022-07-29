import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://fake-google-back.vercel.app/api',
	headers: {
		'Content-Type': 'application/json',
	},
})
