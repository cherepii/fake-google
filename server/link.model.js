import mongoose from 'mongoose'

const linkModel = mongoose.Schema(
	{
		title: { type: String, required: true },
		domain: { type: String, required: true },
		url: { type: String, required: true },
		subTitle: { type: String, required: true },
	},
	{
		minimize: false,
		timestamps: true,
	}
)

const Link = mongoose.model('Link', linkModel)

export default Link
