import { instance } from '../../api/instance'
import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import { ILink } from '../../shared/link.interface'
import { FC, useEffect, useState } from 'react'

const Home: FC = () => {
	const [links, setLinks] = useState([])

	useEffect(() => {
		const res = instance.get<ILink[]>('/links')

		res.then((data) => setLinks(data.data))
	}, [])

	return (
		<div>
			<Header />
			<Content links={links} />
		</div>
	)
}
export default Home
