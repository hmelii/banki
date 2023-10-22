import { FC, PropsWithChildren } from 'react'

import styles from './RootLayout.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

export const RootLayout: FC<PropsWithChildren & PropsWithClassName> = ({
  className,
  children
}) => {
  return <main className={clsx(styles.root, className)}>{children}</main>
}
