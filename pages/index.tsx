import { instance } from '../app/api/instance'
import HeadProvider from '../app/providers/HeadProvider'
import Home from '../app/screens/home/Home'
import { ILink } from '../app/shared/link.interface'
import type { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage = () => {
	return (
		<HeadProvider title="Google - результаты поиска">
			<Home />
		</HeadProvider>
	)
}

export default HomePage
