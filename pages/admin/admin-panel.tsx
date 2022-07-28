import { instance } from '../../app/api/instance'
import AdminPanel from '../../app/screens/adminPanel/AdminPanel'
import { ILink } from '../../app/shared/link.interface'
import { GetStaticProps, NextPage } from 'next'

const AdminPanelPage: NextPage<{ links: ILink[] }> = ({ links }) => {
	return <AdminPanel links={links} />
}
export default AdminPanelPage

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await instance.get('/links')

	const links = res.data

	return {
		props: {
			links,
		},
	}
}
