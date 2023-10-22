import clsx from 'clsx'
import {
  ButtonHTMLAttributes,
  ElementType,
  FC,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useMemo
} from 'react'

// import Icon from '@/components/Icon'
// import { UrlObjectProp } from '@/components/Link/LinkProp'

import styles from './Button.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'link' | 'default' | 'ghost' | 'light' | 'unstyled'
  size?: 's' | 'l' | 'icon' | 'm'
  before?: ReactNode
  after?: ReactNode
  as?: FunctionComponent | ElementType
  href?: string /*| UrlObjectProp*/
  shape?: 'circle' | 'round'
  loading?: boolean
  title?: string | undefined
  bgColor?: string
  borderColor?: string
  color?: string
  fluid?: boolean
}

const Button: FC<ButtonProps & PropsWithChildren & PropsWithClassName> = ({
  className = '',
  children,
  before,
  after,
  variant = 'default',
  as: Tag = 'button',
  size = 's',
  shape = 'round',
  loading = false,
  title = null,
  bgColor = null,
  borderColor = null,
  color = null,
  style = null,
  fluid = false,
  ...rest
}) => {
  const titleObj = useMemo(() => {
    if (!title) {
      return {}
    }
    return {
      title: title.replace(/&nbsp;/g, '\u00A0')
    }
  }, [title])
  return (
    <Tag
      className={clsx(
        styles['button'],
        styles[`button_variant-${variant}`],
        { [styles[`button_size-${size}`]]: variant !== 'unstyled' },
        { [styles[`button_shape-${shape}`]]: variant !== 'unstyled' },
        { [styles['button_loading']]: loading },
        { [styles['button_fluid']]: fluid },
        className
      )}
      style={{
        ...style,
        borderColor,
        color,
        backgroundColor: bgColor
      }}
      {...titleObj}
      {...rest}
    >
      {loading
        ? /*<Icon className={styles['button__spinner']} name={'spinner/16'} />*/
          null
        : before && <span className={styles['button__before']}>{before}</span>}
      <span className={styles['button__content']}>{children}</span>
      {after && <span className={styles['button__after']}>{after}</span>}
    </Tag>
  )
}

export default Button
