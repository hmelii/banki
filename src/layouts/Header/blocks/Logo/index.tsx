import { FC } from 'react'
import Link from 'next/link'
import routes from '@/config/routes'
import styles from './logo.module.scss'
import LogoSVG from '../../../../../public/images/logo.svg'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

export const Logo: FC<PropsWithClassName> = ({ className = '' }) => {
  return (
    <div className={clsx(styles.logo, className)}>
      <Link className={styles.logo__link} href={routes.MAIN}>
        <LogoSVG className={styles.logo__img} />
      </Link>
    </div>
  )
}
