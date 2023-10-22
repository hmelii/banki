import Box from '@/components/Box'
import { FC } from 'react'
import styles from './styles.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { ItemProps } from '@/types/microloan.type'
import clsx from 'clsx'
import { Col, Row } from '@/components/Grid'
import Link from 'next/link'
import routes from '@/config/routes'
import Heading from '@/components/Heading'
import BigNextButton from '@/components/BigNextButton'
interface FreeMicroloanProps {
  items: ItemProps[]
  heading: string
}
export const FreeMicroloan: FC<PropsWithClassName & FreeMicroloanProps> = ({
  items = [],
  className = '',
  heading = ''
}) => {
  return (
    <Box className={clsx(styles.microloan, className)}>
      <Row gutter={24}>
        <Col sm={24} xs={24}>
          <Heading className={styles.microloan__heading} level={3}>
            Первый займ бесплатно
          </Heading>
        </Col>
        <Col sm={24} xs={24}>
          <Row wrap={false} className={styles.microloan__list} gutter={32}>
            {items.map(({ id, name, image }) => (
              <Col key={id} className={styles.microloan__item}>
                <Link className={styles.microloan__link} href={routes.MAIN}>
                  <img
                    className={styles.microloan__img}
                    src={image}
                    alt={name}
                  />
                </Link>
              </Col>
            ))}
          </Row>
          <BigNextButton className={styles['microloan__next-button']} />
        </Col>
      </Row>
    </Box>
  )
}
