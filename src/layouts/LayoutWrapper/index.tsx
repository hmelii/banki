import { FC, PropsWithChildren } from 'react'
import styles from './layout-wrapper.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

const LayoutWrapper: FC<PropsWithChildren & PropsWithClassName> = ({
  children = null,
  className = ''
}) => {
  return (
    <div className={clsx(styles['layout-wrapper'], className)}>{children}</div>
  )
}
export default LayoutWrapper
