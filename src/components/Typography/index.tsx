import { FC, PropsWithChildren } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './typography.module.scss'
import clsx from 'clsx'

interface TypographyProps {
  type: number | string
}
const Typography: FC<
  PropsWithClassName & PropsWithChildren & TypographyProps
> = ({ className = '', children = null, type = 1 }) => {
  return (
    <section
      className={clsx(
        styles.typography,
        className,
        styles[`typography_type-${type}`]
      )}
    >
      {children}
    </section>
  )
}

export default Typography
