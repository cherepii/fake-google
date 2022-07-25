import { instance } from '../app/api/instance'
import Home from '../app/screens/home/Home'
import { ILink } from '../app/shared/link.interface'
import type { GetStaticProps, NextPage } from 'next'

interface IHome {
	links: ILink[]
}

const HomePage: NextPage<IHome> = ({ links }) => {
	return <Home links={links} />
}

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await instance.get('/links')

	const links = res.data

	return {
		props: {
			links,
		},
	}
}

export default HomePage
