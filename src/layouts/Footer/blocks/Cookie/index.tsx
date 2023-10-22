import styles from './cookie.module.scss'
import Link from 'next/link'
import routes from '@/config/routes'
import { FC } from 'react'

export const Cookie: FC = () => {
  return (
    <div className={styles.cookie}>
      ООО ИА «Банки.ру» использует файлы cookie для повышения удобства
      пользователей и обеспечения должного уровня работоспособности сайта и
      сервисов. Cookie называются небольшие файлы, содержащие информацию о
      настройках и предыдущих посещениях веб-сайта. Если вы не хотите
      использовать файлы cookie, то можете изменить настройки браузера. Условия
      использования{' '}
      <Link className={styles.cookie__link} href={routes.MAIN}>
        смотрите здесь
      </Link>
      .
    </div>
  )
}
