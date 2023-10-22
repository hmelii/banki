import styles from './big-next-button.module.scss'
import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import ArrowRightSVG from '../../../public/images/arrow/right/24.svg'
import clsx from 'clsx'
const BigNextButton: FC<PropsWithClassName> = ({ className = '' }) => {
  return (
    <button className={clsx(styles.button, className)}>
      <ArrowRightSVG />
    </button>
  )
}
export default BigNextButton
