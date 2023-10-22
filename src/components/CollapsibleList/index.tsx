import { ItemProps } from '@/types/catalog.type'
import { FC } from 'react'
import styles from './collapsible-list.module.scss'
import Card from '../Card3'
import { Col, Row } from '@/components/Grid'
import MoreButton from '@/components/MoreButton'
interface CollapsibleListProps {
  items: ItemProps[]
}

const CollapsibleList: FC<CollapsibleListProps> = ({ items = [] }) => {
  return (
    <div className={styles['collapsible-list']}>
      <Row
        wrap
        gutter={[
          { xs: 8, sm: 8, xl: 32 },
          { xs: 8, sm: 8, xl: 32 }
        ]}
        className={styles['collapsible-list__list']}
      >
        {items.map(item => (
          <Col
            key={item.id}
            xl={8}
            xs={24}
            sm={24}
            className={styles['collapsible-list__item']}
          >
            <Card {...item} />
          </Col>
        ))}
      </Row>
      <div className={styles['collapsible-list__footer']}>
        <MoreButton className={styles['collapsible-list__footer-button']}>
          Показать ещё
        </MoreButton>
      </div>
    </div>
  )
}
export default CollapsibleList
