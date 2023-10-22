import { FC } from 'react'
import Box from '@/components/Box'
import styles from './filters.module.scss'
import { Col, Row } from '@/components/Grid'
import Link from 'next/link'
import routes from '@/config/routes'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { ItemProps } from '@/types/filters.type'
import clsx from 'clsx'
interface FiltersProps {
  items: ItemProps[]
}
export const Filters: FC<PropsWithClassName & FiltersProps> = ({
  className = '',
  items = []
}) => {
  return (
    <Box className={clsx(styles.filters, className)}>
      <Row className={styles.filters__list} wrap={false} gutter={8}>
        {items.map(({ id, name, active = false }) => (
          <Col key={id}>
            <Link
              className={clsx(styles.filters__link, {
                [styles.filters__link_active]: active
              })}
              href={routes.MAIN}
            >
              {name}
            </Link>
          </Col>
        ))}
      </Row>
    </Box>
  )
}
