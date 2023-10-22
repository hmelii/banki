import React, { FC, useCallback } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'
import { ItemProps } from '@/types/crumbs.type'
import Link from 'next/link'
import routes from '@/config/routes'
import styles from './crumbs.module.scss'
interface CrumbsProps {
  items: ItemProps[]
}

const Crumbs: FC<CrumbsProps & PropsWithClassName> = ({
  items = [],
  className = ''
}) => {
  return (
    <nav className={clsx(styles.crumbs, className)}>
      <ul className={styles.crumbs__list}>
        {items.map(({ id, label, active = false }) => (
          <li key={id} className={styles.crumbs__item}>
            {active ? (
              label
            ) : (
              <Link className={styles.crumbs__link} href={routes.MAIN}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Crumbs
