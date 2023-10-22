import { FC } from 'react'
import styles from './reviews.module.scss'
import Heading from '@/components/Heading'
import { PropsWithClassName } from '@/types/props-with-className.type'
import Box from '@/components/Box'
import { Col, Row } from '@/components/Grid'
import Typography from '@/components/Typography'
import Link from 'next/link'
import routes from '@/config/routes'
import { ItemProps } from '@/types/reviews.type'
import Rate from '@/components/Rate'
import clsx from 'clsx'
import BigNextButton from '@/components/BigNextButton'
interface ReviewsProps {
  items: ItemProps[]
  heading: string
}
export const Reviews: FC<PropsWithClassName & ReviewsProps> = ({
  className,
  items,
  heading = ''
}) => {
  return (
    <div className={clsx(styles.reviews, className)}>
      <Heading level={3}>{heading}</Heading>
      <Row gutter={[0, 32]}>
        <Row wrap={false} className={styles.reviews__list} gutter={32}>
          {items.map(({ id, image, name, summary, date, category }) => (
            <Col
              xl={12}
              xs={23}
              sm={23}
              className={styles.reviews__item}
              key={id}
            >
              <Box className={styles.reviews__card}>
                <Row gutter={[0, 16]}>
                  <Col sm={24} xs={24}>
                    <Row justify={'space-between'}>
                      <Col sm={12} xs={12}>
                        <Row gutter={[0, 8]}>
                          <Col sm={24} xs={24}>
                            <Heading
                              className={styles['reviews__card-heading']}
                              level={4}
                            >
                              {name}
                            </Heading>
                          </Col>
                          <Col sm={24} xs={24}>
                            <Row align={'middle'} gutter={8}>
                              <Col>
                                <Typography
                                  type={1}
                                  className={styles['reviews__rate-text']}
                                >
                                  Оценка
                                </Typography>
                              </Col>
                              <Col>
                                <Rate>5</Rate>
                              </Col>
                              <Col>
                                <Typography
                                  className={styles['reviews__rate-text']}
                                  type={1}
                                >
                                  Проверяется
                                </Typography>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={'auto'} xs={'auto'}>
                        <div className={styles.reviews__fig}>
                          <img
                            className={styles.reviews__img}
                            src={image}
                            alt={name}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={24} xs={24}>
                    <Row>
                      <Col>
                        <Typography type={3}>
                          {summary}{' '}
                          <Link href={routes.MAIN}>Читать полностью</Link>
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={24} xs={24}>
                    <Row gutter={16}>
                      <Col>
                        <Typography className={styles.reviews__date} type={1}>
                          {date}
                        </Typography>
                      </Col>
                      <Col>
                        <Typography type={1}>
                          <Link href={routes.MAIN}>{category}</Link>
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Box>
            </Col>
          ))}
          <BigNextButton className={styles['reviews__next-button']} />
        </Row>
        <Col>
          <Row gutter={32}>
            <Col>
              <Typography type={3}>
                <Link href={routes.MAIN}>Все отзывы</Link>
              </Typography>
            </Col>
            <Col>
              <Typography type={3}>
                <Link href={routes.MAIN}>Оставить отзыв</Link>
              </Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
