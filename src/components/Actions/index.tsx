import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className'
import styles from './actions.module.scss'
import Enter from '../../images/enter.svg'
import Location from '../../images/location.svg'
import Search from '../../images/search.svg'

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

const Actions: FC<PropsWithClassName> = () => {
  return (
    <div className={styles.actions}>
      {ACTIONS.map(({ id, Icon }) => (
        <a key={id} className={styles.actions__link}>
          <Icon />
        </a>
      ))}
    </div>
  )
}
export default Actions
