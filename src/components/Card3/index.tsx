import { FC } from 'react'
import styles from './card.module.scss'
import { ItemProps } from '@/types/catalog.type'
import { Col, Row } from '@/components/Grid'
import routes from '@/config/routes'
import Link from 'next/link'
const Card3: FC<ItemProps> = ({ image, id, name }) => {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} href={routes.MAIN}>
        <Row gutter={24} align={'middle'}>
          <Col xs={'auto'} sm={'auto'}>
            <div className={styles.card__fig}>
              <img className={styles.card__img} src={image} alt={name} />
            </div>
          </Col>
          <Col flex={1}>
            <div className={styles.card__heading}>{name}</div>
          </Col>
        </Row>
      </Link>
    </div>
  )
}
export default Card3
