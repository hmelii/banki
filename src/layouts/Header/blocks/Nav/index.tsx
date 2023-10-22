import { FC, useCallback, useState } from 'react'
import { ItemProps } from '@/types/main-menu.type'
import Link from 'next/link'
import styles from './nav.module.scss'
import clsx from 'clsx'
import { PropsWithClassName } from '@/types/props-with-className.type'
import TriggerSVG from '../../../../../public/images/trigger/24.svg'
import CloseSVG from '../../../../../public/images/close/24.svg'
import { Search } from '@/layouts/Header/blocks/Search'

interface NavProps {
  items: ItemProps[]
}
export const Nav: FC<NavProps & PropsWithClassName> = ({
  items = [],
  className = ''
}) => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = useCallback(() => {
    setVisible(!isVisible)
  }, [isVisible])

  return (
    <nav className={clsx(styles['nav'], className)}>
      <button
        className={clsx(styles['nav__trigger'], {
          [styles['nav__trigger_active']]: isVisible
        })}
        onClick={handleClick}
      >
        <TriggerSVG className={styles['nav__trigger-open']} />
        <CloseSVG className={styles['nav__trigger-close']} />
      </button>
      <div
        className={clsx(styles['nav__list-wrapper'], {
          [styles['nav__list-wrapper_visible']]: isVisible
        })}
      >
        <Search className={styles['nav__search']} />
        <ul className={styles['nav__list']}>
          {items.map(({ id, label, url }) => (
            <li key={id} className={styles['nav__item']}>
              <Link
                className={styles['nav__link']}
                href={url}
                data-title={label}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
