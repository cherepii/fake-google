import { instance } from '../../api/instance'
import { ILink } from '../../shared/link.interface'
import Link from 'next/link'
import { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from 'react'

import styles from './AdminPanel.module.scss'

interface IProps {
	link: ILink
}

const LinkItem: FC<IProps> = ({ link }) => {
	const [isOpen, setIsOpen] = useState(false)

	const { title, domain, subTitle, url, _id } = link

	const [urlValue, setUrlValue] = useState(url || '')
	const [titleValue, setTitleValue] = useState(title || '')
	const [subTitleValue, setSubTitleValue] = useState(subTitle || '')
	const [domainValue, setDomainValue] = useState(domain || '')

	const updateLink = async () => {
		const res = await instance.put('/links', {
			_id,
			title: titleValue,
			domain: domainValue,
			url: urlValue,
			subTitle: subTitle,
		})

		if (res.status === 200) location.reload()

		return res.data
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		updateLink()
		setIsOpen(false)
	}

	return (
		<li className={styles.item}>
			<div className={styles.flex}>
				<span>{domain}</span>
				<button onClick={() => setIsOpen(!isOpen)}>Изменить</button>
			</div>

			<h4>{title}</h4>
			<p>{subTitle}</p>

			{isOpen && (
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formItem}>
						<label htmlFor="url">Url - адрес: </label>
						<input
							id="url"
							type="text"
							value={urlValue}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setUrlValue(e.target.value)
							}
						/>
					</div>
					<div className={styles.formItem}>
						<label htmlFor="title">Заголовок: </label>
						<input
							id="title"
							type="text"
							value={titleValue}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setTitleValue(e.target.value)
							}
						/>
					</div>
					<div className={styles.formItem}>
						<label htmlFor="sub-title">Подзаголовок: </label>
						<input
							id="sub-title"
							type="text"
							value={subTitleValue}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setSubTitleValue(e.target.value)
							}
						/>
					</div>
					<div className={styles.formItem}>
						<label htmlFor="domain">Домен: </label>
						<input
							id="domain"
							type="text"
							value={domainValue}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDomainValue(e.target.value)
							}
						/>
					</div>

					<div className={styles.formItem}>
						<button type="submit">Сохранить</button>
					</div>
				</form>
			)}
		</li>
	)
}
export default LinkItem
