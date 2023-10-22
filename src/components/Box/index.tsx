import { FC, PropsWithChildren } from 'react'
import styles from './box.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

const Box: FC<PropsWithClassName & PropsWithChildren> = ({
  className = '',
  children
}) => {
  return <div className={clsx(styles.box, className)}>{children}</div>
}
export default Box
