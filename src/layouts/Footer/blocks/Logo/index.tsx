import styles from './logo.module.scss'
import Link from 'next/link'
import routes from '@/config/routes'
import LogoSVG from '../../../../../public/images/footer/logo.svg'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.logo__link} href={routes.MAIN}>
        <LogoSVG />
      </Link>
    </div>
  )
}
