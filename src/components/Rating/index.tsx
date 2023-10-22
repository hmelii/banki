import { FC, PropsWithChildren } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './rating.module.scss'
import clsx from 'clsx'
import { Col, Row } from '@/components/Grid'
import StarSVG from '../../../public/images/star/16.svg'
const Rating: FC<PropsWithClassName & PropsWithChildren> = ({
  className = '',
  children
}) => {
  return (
    <Row
      align={'middle'}
      className={clsx(styles.rating, className)}
      gutter={4}
      justify={'center'}
    >
      <Col className={styles.rating__star}>
        <StarSVG />
      </Col>
      <Col className={styles.rating__name}>{children}</Col>
    </Row>
  )
}
export default Rating
