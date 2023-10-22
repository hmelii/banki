import { FC } from 'react'
import styles from './faq.module.scss'
import { Col, Row } from '@/components/Grid'
import Heading from '@/components/Heading'
import { Faces } from '@/contents/Microloans/Blocks'
import Button from '@/components/Button'

export const Faq: FC = () => {
  return (
    <div className={styles.faq}>
      <Row align={'stretch'} gutter={48}>
        <Col className={styles.faq__col}>
          <Heading className={styles.faq__heading} level={3}>
            Эксперт Банки.ру
          </Heading>
        </Col>
        <Col className={styles.faq__col}>
          <Faces
            items={[
              {
                id: '1',
                image: '/banki/images/microloans/pic4.png',
                name: 'Банки.ру',
                summary:
                  'Наша команда экспертов доступна в рабочие дни с 10 утра до 7 вечера'
              }
            ]}
          />
        </Col>
        <Col className={styles.faq__col}>
          <Row gutter={16}>
            <Col>
              <Button size={'m'} variant={'link'}>
                Читать ответы
              </Button>
            </Col>
            <Col>
              <Button size={'m'} variant={'light'}>
                Задать вопрос
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
