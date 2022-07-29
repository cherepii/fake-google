import HeadProvider from '../../app/providers/HeadProvider'
import AdminPanel from '../../app/screens/adminPanel/AdminPanel'
import type { NextPage } from 'next'

const AdminPanelPage: NextPage = () => {
	return (
		<HeadProvider title="Admin panel">
			<AdminPanel />
		</HeadProvider>
	)
}

export default AdminPanelPage
