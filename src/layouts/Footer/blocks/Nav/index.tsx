import { FC } from 'react'
import styles from './nav.module.scss'
import { ItemProps } from '@/types/footer-nav.type'
import Link from 'next/link'
import { Col, Row } from '@/components/Grid'
interface NavProps {
  items: ItemProps[]
}
export const Nav: FC<NavProps> = ({ items = [] }) => {
  return (
    <nav className={styles.nav}>
      <Row gutter={16} className={styles.nav__list}>
        {items.map(({ id, heading, url }) => (
          <Col key={id} className={styles.nav__item}>
            <Link className={styles.nav__link} href={url}>
              {heading}
            </Link>
          </Col>
        ))}
      </Row>
    </nav>
  )
}
