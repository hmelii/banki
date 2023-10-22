import { FC } from 'react'
import { MainMenuProps } from '@/types/main-menu-types'
import Link from 'next/link'
import styles from './MainMenu.module.scss'
import clsx from 'clsx'
import { PropsWithClassName } from '@/types/props-with-className'

const MainMenu: FC<MainMenuProps & PropsWithClassName> = ({
  items = [],
  className = ''
}) => {
  return (
    <nav className={clsx(styles['main-menu'], className)}>
      <ul className={styles['main-menu__list']}>
        {items.map(({ id, label, url }) => (
          <li key={id} className={styles['main-menu__list-item']}>
            <Link
              className={styles['main-menu__list-link']}
              href={url}
              data-title={label}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default MainMenu
