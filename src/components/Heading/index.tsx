import { ElementType, FC, PropsWithChildren } from 'react'
import { PropsWithClassName } from '@/types/props-with-className'
import clsx from 'clsx'
import styles from './heading.module.scss'

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}
const Heading: FC<HeadingProps & PropsWithChildren & PropsWithClassName> = ({
  className = '',
  children,
  level = 1
}) => {
  const Tag = `h${level}` as ElementType

  return (
    <Tag
      className={clsx(
        styles.heading,
        styles[`heading_level-${level}`],
        className
      )}
    >
      {children}
    </Tag>
  )
}
export default Heading
