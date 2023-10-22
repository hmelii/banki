import { FC } from 'react'
import Link from 'next/link'
import routes from '@/config/routes'
import styles from './logo.module.scss'
import LogoSVG from '../../images/logo.svg'
import { PropsWithClassName } from '@/types/props-with-className'
import clsx from 'clsx'

const Logo: FC<PropsWithClassName> = ({ className = '' }) => {
  return (
    <div className={clsx(styles.logo, className)}>
      <Link className={styles.logo__link} href={routes.MAIN}>
        <LogoSVG />
      </Link>
    </div>
  )
}

export default Logo
