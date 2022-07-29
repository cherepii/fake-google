import HeadProvider from '../app/providers/HeadProvider'
import Home from '../app/screens/home/Home'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
	return (
		<HeadProvider title="Google - результаты поиска">
			<Home />
		</HeadProvider>
	)
}

export default HomePage
