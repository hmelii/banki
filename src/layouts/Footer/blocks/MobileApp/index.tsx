import { Col, Row } from '@/components/Grid'
import Heading from '@/components/Heading'
import Link from 'next/link'
import AppStoreSVG from '../../../../../public/images/footer/mobile-app/app-store.svg'
import GooglePlaySVG from '../../../../../public/images/footer/mobile-app/google-play.svg'
import AppGallerySVG from '../../../../../public/images/footer/mobile-app/app-gallery.svg'
import routes from '@/config/routes'
import styles from './mobile-app.module.scss'
export const MobileApp = () => {
  return (
    <div className={styles['mobile-app']}>
      <Row
        gutter={[
          { xs: 0, sm: 0, xl: 0 },
          { xs: 16, sm: 16, xl: 24 }
        ]}
      >
        <Col sm={24} xs={24}>
          <Heading className={styles['mobile-app__heading']} level={3}>
            Теперь финансовый маркетплейс Банки.ру и в мобильном приложении
          </Heading>
        </Col>
        <Col sm={24} xs={24}>
          <Row
            gutter={[
              { xs: 0, sm: 0, xl: 16 },
              { xs: 16, sm: 16, xl: 0 }
            ]}
          >
            <Col sm={24} xs={24} xl={'auto'}>
              <Link className={styles['mobile-app__link']} href={routes.MAIN}>
                <AppStoreSVG />
              </Link>
            </Col>
            <Col sm={24} xs={24} xl={'auto'}>
              <Link className={styles['mobile-app__link']} href={routes.MAIN}>
                <GooglePlaySVG />
              </Link>
            </Col>
            <Col sm={24} xs={24} xl={'auto'}>
              <Link className={styles['mobile-app__link']} href={routes.MAIN}>
                <AppGallerySVG />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col sm={24} xs={24} className={styles['mobile-app__footer']}>
          <Row gutter={12}>
            <Col>
              <img src="/banki/images/footer/mobile-app/qr.webp" alt="" />
            </Col>
            <Col>
              <Heading level={5} className={styles['mobile-app__heading2']}>
                Установка приложения Банки.ру
              </Heading>
              <div className={styles['mobile-app__summary2']}>
                Наведите камеру своего телефона на QR-код и перейдите по ссылке
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
