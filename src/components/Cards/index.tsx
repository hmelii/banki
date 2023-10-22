import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { CardsProps } from '@/types/cards.type'
import styles from './cards.module.scss'
import Card from '@/components/Card'
import { Col, Row } from '@/components/Grid'
import clsx from 'clsx'

const Cards: FC<PropsWithClassName & CardsProps> = ({
  items = [],
  className = ''
}) => {
  return (
    <Row className={clsx(styles.cards, className)}>
      {items.map(item => (
        <Col key={item.id} className={styles.cards__item}>
          <Card className={styles.cards__card} {...item} />
        </Col>
      ))}
      <Col className={styles.cards__item}>
        <Card empty className={styles.cards__card} />
      </Col>
    </Row>
  )
}
export default Cards
