import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import { ILink } from '../../shared/link.interface'
import { FC } from 'react'

interface IProps {
	links: ILink[]
}

const Home: FC<IProps> = ({ links }) => {
	return (
		<div>
			<Header />
			<Content links={links} />
		</div>
	)
}
export default Home
