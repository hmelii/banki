import { Col, Row } from '@/components/Grid'
import Heading from '@/components/Heading'
import { FC, PropsWithChildren, ReactNode } from 'react'
import styles from './hero.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

interface HeroProps {
  side?: ReactNode
  body?: ReactNode
}

const Hero: FC<PropsWithClassName & PropsWithChildren & HeroProps> = ({
  className = '',
  side = null,
  body = null,
  children
}) => {
  return (
    <div className={clsx(styles.hero, className)}>
      <Row
        wrap={false}
        justify={{ xs: 'center', sm: 'center', md: 'space-between' }}
        align={{ sm: 'middle' }}
      >
        <Col xs={24} sm={24} md={'auto'} className={styles['hero__heading']}>
          <Heading level={1}>{children}</Heading>
        </Col>
        {side && <Col className={styles['hero__side']}>{side}</Col>}
      </Row>
      {body && (
        <Row className={styles['hero__body']}>
          <Col sm={12} xs={12}>
            {body}
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Hero
