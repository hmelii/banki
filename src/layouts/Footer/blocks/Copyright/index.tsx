import { FC } from 'react'
import { Col, Row } from '@/components/Grid'
import styles from './copyright.module.scss'
import Link from 'next/link'
import routes from '@/config/routes'
export const Copyright: FC = () => {
  return (
    <Row gutter={[0, 8]} className={styles.copyright}>
      <Col sm={24} xs={24}>
        © 2005—2023 ООО ИА «Банки.ру». При использовании материалов гиперссылка
        на Banki.ru обязательна.
      </Col>
      <Col sm={24} xs={24}>
        Свидетельство на товарный знак № 445945 от 18.10.2011г.
      </Col>
      <Col sm={24} xs={24}>
        <Row justify={'start'} gutter={[16, 8]}>
          <Col sm={24} xs={24} xl={'auto'}>
            <Link className={styles.copyright__link} href={routes.MAIN}>
              Пользовательское соглашение
            </Link>
          </Col>
          <Col sm={24} xs={24} xl={'auto'}>
            <Link className={styles.copyright__link} href={routes.MAIN}>
              Политика обработки персональных данных
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
