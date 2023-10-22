import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { Col, Row } from '@/components/Grid'
import { ItemProps } from '@/types/catalog.type'
import Box from '@/components/Box'
import styles from './catalog.module.scss'
import clsx from 'clsx'
import Rating from '@/components/Rating'
import Button from '@/components/Button'
import LikeSVG from '../../../../../public/images/like/16.svg'
import InfoSVG from '../../../../../public/images/info/24.svg'
import ArrowTopSVG from '../../../../../public/images/arrow/top/24.svg'

interface CatalogProps {
  items: ItemProps[]
}

export const Catalog: FC<PropsWithClassName & CatalogProps> = ({
  className = '',
  items = []
}) => {
  return (
    <div className={clsx(styles.catalog, className)}>
      <Row gutter={[0, 32]}>
        <Col sm={24} xs={24}>
          <Row
            gutter={[
              { sm: 8, xs: 8, xl: 32 },
              { sm: 8, xs: 8, xl: 32 }
            ]}
          >
            {items.map(
              ({
                id,
                name,
                rating,
                image,
                amount,
                term,
                termWithoutPercent,
                summary
              }) => (
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  xl={6}
                  key={id}
                  className={styles.catalog__item}
                >
                  <Box className={styles.catalog__card}>
                    <Row
                      justify={'space-between'}
                      className={styles.catalog__header}
                    >
                      <Col>
                        <Row align={'middle'}>
                          <Col className={styles.catalog__fig}>
                            <img
                              className={styles.catalog__img}
                              src={image}
                              alt={name}
                            />
                          </Col>
                          <Col>
                            <Row>
                              <Col
                                sm={24}
                                xs={24}
                                className={styles.catalog__name}
                              >
                                {name}
                              </Col>
                              <Col
                                sm={24}
                                xs={24}
                                className={styles.catalog__summary}
                              >
                                {summary}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Rating className={styles.catalog__rating}>
                          {rating}
                        </Rating>
                      </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                      <Col sm={24} xs={24}>
                        <Row
                          gutter={[
                            { sm: 0, xs: 0, lg: 0 },
                            { sm: 8, xs: 8, lg: 16 }
                          ]}
                          className={styles.catalog__content}
                        >
                          <Col
                            sm={12}
                            xs={12}
                            className={styles['catalog__content-label']}
                          >
                            Сумма
                          </Col>
                          <Col
                            sm={12}
                            xs={12}
                            className={styles['catalog__content-value']}
                          >
                            {amount}
                          </Col>

                          <Col
                            sm={12}
                            xs={12}
                            className={styles['catalog__content-label']}
                          >
                            Срок
                          </Col>
                          <Col
                            sm={12}
                            xs={12}
                            className={styles['catalog__content-value']}
                          >
                            {term}
                          </Col>

                          <Col
                            sm={12}
                            xs={12}
                            className={styles['catalog__content-label']}
                          >
                            Срок без %
                          </Col>
                          <Col
                            sm={12}
                            xs={12}
                            className={styles['catalog__content-value']}
                          >
                            {termWithoutPercent}
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={24} xs={24}>
                        <Row>
                          <Col sm={24} xs={24}>
                            <Button
                              fluid
                              borderColor={'#eceff1'}
                              bgColor={'#f5f5f5'}
                              color={'#039be5'}
                              size={'s'}
                              before={<LikeSVG fill={'#039be5'} />}
                            >
                              Узнать вероятность одобрения
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={24} xs={24}>
                        <Row gutter={12}>
                          <Col>
                            <Button
                              variant={'link'}
                              size={'m'}
                              style={{ padding: '.8rem' }}
                            >
                              <InfoSVG />
                            </Button>
                          </Col>
                          <Col flex={1}>
                            <Button variant={'light'} size={'m'} fluid>
                              Получить деньги
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              )
            )}
          </Row>
        </Col>
        <Col sm={24} xs={24}>
          <Row gutter={[0, 16]}>
            <Col sm={24} xs={24}>
              <Button
                className={styles['catalog__more-button']}
                variant={'default'}
                fluid
                after={<ArrowTopSVG />}
              >
                Показать ещё
              </Button>
            </Col>
            <Col sm={24} xs={24} className={styles['catalog__footer']}>
              Рейтинг микрофинансовых организаций присваивается в соответствии с
              популярностью продуктов на Banki.ru
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
