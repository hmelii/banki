import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import Button from '@/components/Button'
import Link from 'next/link'
import routes from '@/config/routes'
import clsx from 'clsx'
import styles from './card.module.scss'
import { ItemProps } from '@/types/carousel.types'
import { Col, Row } from '@/components/Grid'
import Heading from '@/components/Heading'

const Card2: FC<PropsWithClassName & ItemProps> = ({
  id,
  className = '',
  name,
  summary,
  image,
  percent,
  amount
}) => {
  return (
    <div className={clsx(styles.card, className)}>
      <Row className={styles.card__header} justify={'space-between'}>
        <Col>
          <Heading level={5} className={styles.card__heading}>
            {name}
          </Heading>
          <div className={styles.card__summary}>{summary}</div>
        </Col>
        <Col sm={'auto'} xs={'auto'}>
          <div className={styles.card__fig}>
            <img className={styles['card__fig-img']} src={image} alt={name} />
          </div>
        </Col>
      </Row>
      <Row className={styles.card__info}>
        <Col sm={12} xs={12}>
          <div className={styles.card__percent}>{percent}</div>
          <div className={styles.card__legend}>ставка в день</div>
        </Col>
        <Col sm={12} xs={12}>
          <div className={styles.card__amount}>{amount}</div>
          <div className={styles.card__legend}>сумма</div>
        </Col>
      </Row>
    </div>
  )
}
export default Card2
