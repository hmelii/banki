import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './actions.module.scss'
import Enter from '../../../../../public/images/enter.svg'
import Location from '../../../../../public/images/location.svg'
import Search from '../../../../../public/images/search.svg'
import clsx from 'clsx'
import Link from 'next/link'
import routes from '@/config/routes'

const ACTIONS = [
  {
    id: 'enter',
    Icon: Enter
  },
  {
    id: 'location',
    Icon: Location
  },
  {
    id: 'search',
    Icon: Search
  }
]

export const Actions: FC<PropsWithClassName> = ({ className = '' }) => {
  return (
    <div className={clsx(styles.actions, className)}>
      {ACTIONS.map(({ id, Icon }) => (
        <Link href={routes.MAIN} key={id} className={styles.actions__link}>
          <Icon />
        </Link>
      ))}
    </div>
  )
}
