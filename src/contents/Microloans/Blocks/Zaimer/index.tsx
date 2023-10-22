import Box from '@/components/Box'
import { Col, Row } from '@/components/Grid'
import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './zaimer.module.scss'
import ZaimerSVG from '../../../../../public/images/microloans/pic5.svg'
import SmallButtonNext from '@/components/SmallButtonNext'
import clsx from 'clsx'
import Heading from '@/components/Heading'
export const Zaimer: FC<PropsWithClassName> = ({ className = '' }) => {
  return (
    <Box className={clsx(styles.zaimer, className)}>
      <Row align={'middle'}>
        <Col sm={24} xs={24} xl={'auto'} className={styles.zaimer__logo}>
          <ZaimerSVG />
        </Col>
        <Col
          sm={24}
          xs={24}
          xl={'auto'}
          flex={1}
          className={styles.zaimer__content}
        >
          <Row gutter={4}>
            <Col sm={24} xs={24}>
              <Heading className={styles.zaimer__heading} level={3}>
                Первый займ бесплатно
              </Heading>
            </Col>
            <Col sm={24} xs={24} className={styles.zaimer__summary}>
              Лидер среди МФО по выдачам в России
            </Col>
          </Row>
        </Col>
        <Col className={styles.zaimer__footer}>
          <SmallButtonNext />
        </Col>
      </Row>
    </Box>
  )
}
