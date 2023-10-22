import { FC, PropsWithChildren } from 'react'
import styles from './content.module.scss'
import { PropsWithClassName } from '@/types/props-with-className'
import LayoutWrapper from '@/layouts/LayoutWrapper'

export const Content: FC<PropsWithChildren & PropsWithClassName> = ({
  children
}) => {
  return (
    <section className={styles.content}>
      <LayoutWrapper>{children}</LayoutWrapper>
    </section>
  )
}
