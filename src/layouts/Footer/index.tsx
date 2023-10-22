import { FC, PropsWithChildren } from 'react'
import styles from './footer.module.scss'
import { PropsWithClassName } from '@/types/props-with-className'

export const Footer: FC<PropsWithChildren & PropsWithClassName> = ({
  children
}) => {
  return <footer className={styles.footer}>{children}</footer>
}
