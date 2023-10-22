import Arrow from '../../../public/images/arrow/bottom/16.svg'
import Button from '@/components/Button'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styles from './more-button.module.scss'
const MoreButton: FC<PropsWithClassName & PropsWithChildren> = ({
  className = '',
  children = null
}) => {
  return (
    <Button
      className={clsx(styles['more-button'], className)}
      variant={'unstyled'}
      after={<Arrow />}
    >
      {children}
    </Button>
  )
}
export default MoreButton
