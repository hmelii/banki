import { FC, InputHTMLAttributes } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './text-field.module.scss'
import clsx from 'clsx'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}
const TextField: FC<PropsWithClassName & TextFieldProps> = ({
  className = '',
  ...rest
}) => {
  return <input className={clsx(styles['text-field'], className)} {...rest} />
}
export default TextField
