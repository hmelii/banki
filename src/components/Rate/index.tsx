import styles from './rate.module.scss'
import { FC, PropsWithChildren } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

const Rate: FC<PropsWithClassName & PropsWithChildren> = ({
  className = '',
  children = null
}) => {
  return <div className={clsx(styles.rate, className)}>{children}</div>
}
export default Rate
