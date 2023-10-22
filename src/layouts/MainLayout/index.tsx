import { FC, PropsWithChildren } from 'react'
import styles from './main.module.scss'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Content } from '../Content'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles['main-layout']}>
      <Header className={styles['main-layout__header']} />
      <Content className={styles['main-layout__content']}>{children}</Content>
      <Footer className={styles['main-layout__footer']} />
    </main>
  )
}
