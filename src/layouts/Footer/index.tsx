import { FC, PropsWithChildren } from 'react'
import styles from './footer.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import LayoutWrapper from '@/layouts/LayoutWrapper'
import {
  Cookie,
  Logo,
  Nav,
  Slogan,
  Social,
  Copyright,
  Legend,
  Adult,
  MobileApp
} from '@/layouts/Footer/blocks'
import { Col, Row } from '@/components/Grid'
import routes from '@/config/routes'

export const Footer: FC<PropsWithClassName> = () => {
  const SOCIAL = [
    {
      id: 'zen',
      label: 'Zen'
    },
    {
      id: 'twitter',
      label: 'Twitter'
    },
    {
      id: 'vk',
      label: 'VK'
    },
    {
      id: 'telegram',
      label: 'Telegram'
    },
    {
      id: 'ok',
      label: 'OK'
    }
  ]
  const NAV = [
    {
      id: 'about',
      heading: 'О проекте',
      url: routes.MAIN
    },
    {
      id: 'how_it_works',
      heading: 'Как это работает',
      url: routes.MAIN
    },
    {
      id: 'awards',
      heading: 'Наши награды',
      url: routes.MAIN
    },
    {
      id: 'reviews',
      heading: 'Отзывы о Банки.ру',
      url: routes.MAIN
    },
    {
      id: 'work',
      heading: 'Работа в Banki.ru',
      url: routes.MAIN
    },
    {
      id: 'adv',
      heading: 'Реклама',
      url: routes.MAIN
    },
    {
      id: 'contacts',
      heading: 'Контакты',
      url: routes.MAIN
    },
    {
      id: 'partners',
      heading: 'Партнерская программа',
      url: routes.MAIN
    },
    {
      id: 'support',
      heading: 'Служба поддержки',
      url: routes.MAIN
    },

    {
      id: 'map',
      heading: 'Карта сайта',
      url: routes.MAIN
    }
  ]
  return (
    <footer className={styles.footer}>
      <LayoutWrapper>
        <Row
          className={styles.footer__header}
          gutter={[32, 16]}
          align={'middle'}
        >
          <Col sm={24} xs={24} xl={'auto'}>
            <Logo />
          </Col>
          <Col flex={1} sm={24} xs={24} xl={'auto'}>
            <Slogan />
          </Col>
          <Col sm={24} xs={24} xl={'auto'}>
            <Social items={SOCIAL} />
          </Col>
        </Row>
        <MobileApp />
        <Nav items={NAV} />
        <Row gutter={[32, 16]}>
          <Col sm={24} xs={24} xl={12}>
            <Cookie />
          </Col>
          <Col sm={24} xs={24} xl={12}>
            <Copyright />
          </Col>
        </Row>
        <Row
          className={styles.footer__footer}
          align={'middle'}
          justify={'space-between'}
        >
          <Col xs={24} sm={24} xl={'auto'}>
            <Legend />
          </Col>
          <Col xs={24} sm={24} xl={'auto'}>
            <Adult />
          </Col>
        </Row>
      </LayoutWrapper>
    </footer>
  )
}
