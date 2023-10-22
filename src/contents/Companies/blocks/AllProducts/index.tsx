import styles from './all-products.module.scss'
import Heading from '@/components/Heading'
import { Col, Row } from '@/components/Grid'
import { FC } from 'react'
import Link from 'next/link'
import routes from '@/config/routes'
import MoreButton from '@/components/MoreButton'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'
interface AllProductsProps {
  items: ItemProps[]
  heading?: null | string
}
export const AllProducts: FC<AllProductsProps & PropsWithClassName> = ({
  heading = null,
  items = [],
  className = ''
}) => {
  return (
    <div className={clsx(styles['all-products'], className)}>
      {heading && (
        <Heading className={styles['all-products__main-heading']} level={3}>
          {heading}
        </Heading>
      )}
      <Row wrap={false} className={styles['all-products__list']} gutter={32}>
        {items.map(({ id, heading, items = [] }) => (
          <Col className={styles['all-products__item']} sm={6} xs={6} key={id}>
            <Row gutter={[0, 16]}>
              <Col sm={24} xs={24}>
                <Heading className={styles['all-products__heading']} level={4}>
                  {heading}
                </Heading>
              </Col>
              <Col sm={24} xs={24}>
                <Row gutter={[0, 8]}>
                  {items.map(({ id, heading }) => (
                    <Col
                      className={styles['all-products__item']}
                      sm={24}
                      xs={24}
                      key={id}
                    >
                      <Link
                        className={styles['all-products__link']}
                        href={routes.MAIN}
                      >
                        {heading}
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <MoreButton>Показать ещё</MoreButton>
    </div>
  )
}
