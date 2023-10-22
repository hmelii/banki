import AdultSVG from '../../../../../public/images/footer/adult.svg'
import routes from '@/config/routes'
import styles from './adult.module.scss'
import Link from 'next/link'
export const Adult = () => {
  return (
    <div className={styles.adult}>
      <Link href={routes.MAIN}>
        <AdultSVG />
      </Link>
    </div>
  )
}
