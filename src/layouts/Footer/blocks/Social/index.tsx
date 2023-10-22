import styles from './social.module.scss'
import { ItemProps } from '@/types/social.type'
import { FC } from 'react'
import { Col, Row } from '@/components/Grid'
interface SocialProps {
  items: ItemProps[]
}
export const Social: FC<SocialProps> = ({ items = [] }) => {
  return (
    <div className={styles.social}>
      <Row gutter={32} align={'middle'} className={styles.social__list}>
        {items.map(({ id, label }) => (
          <Col key={id} className={styles.social__item}>
            <img src={`/banki/images/footer/social/${id}.svg`} alt={label} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
