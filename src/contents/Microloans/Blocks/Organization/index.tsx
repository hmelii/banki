import styles from './organization.module.scss'
import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { Col, Row } from '@/components/Grid'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import { ItemProps } from '@/types/item.type'
import Box from '@/components/Box'
import BigNextButton from '@/components/BigNextButton'
import routes from '@/config/routes'
import Link from 'next/link'
import Typography from '@/components/Typography'
interface OrganizationProps {
  heading: string
  items: ItemProps[]
}
export const Organization: FC<PropsWithClassName & OrganizationProps> = ({
  heading = '',
  className = '',
  items = []
}) => {
  return (
    <div className={clsx(styles.organization, className)}>
      <Heading level={3} className={styles.organization__heading}>
        {heading}
      </Heading>
      <Row gutter={[0, 32]}>
        <Row
          gutter={[{ sm: 16, xs: 16, xl: 32 }, 0]}
          className={styles.organization__list}
          wrap={false}
        >
          {items.map(({ id, image, license, name, phone }) => (
            <Col
              sm={12}
              xs={12}
              md={6}
              key={id}
              className={styles.organization__item}
            >
              <Box className={styles.organization__card}>
                <Row gutter={[0, 24]}>
                  <Col sm={24} xs={24}>
                    <div className={styles.organization__fig}>
                      <img
                        className={styles.organization__img}
                        src={image}
                        alt={name}
                      />
                    </div>
                  </Col>
                  <Col sm={24} xs={24} className={styles.organization__phone}>
                    {phone}
                  </Col>
                  <Col sm={24} xs={24} className={styles.organization__license}>
                    {license}
                  </Col>
                </Row>
              </Box>
            </Col>
          ))}
          <BigNextButton
            className={styles['organization__next-button']}
          ></BigNextButton>
        </Row>
        <Row>
          <Col>
            <Typography type={2}>
              <Link href={routes.MAIN}>Все МФО</Link>
            </Typography>
          </Col>
        </Row>
      </Row>
    </div>
  )
}
