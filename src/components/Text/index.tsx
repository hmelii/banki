import styles from './text.module.scss'
import { FC, PropsWithChildren } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
const Text: FC<PropsWithClassName & PropsWithChildren> = ({ children }) => {
  return <div className={styles.text}>{children}</div>
}
export default Text
