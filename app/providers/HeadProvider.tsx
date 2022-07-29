import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

const HeadProvider: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<title>{title}</title>
			</Head>
			{children}
		</>
	)
}
export default HeadProvider
