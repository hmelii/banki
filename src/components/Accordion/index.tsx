import { FC } from 'react'
import Heading from '@/components/Heading'
import styles from './accordion.module.scss'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'
import { Col, Row } from '@/components/Grid'
import Button from '@/components/Button'
import Arrow from '../../../public/images/arrow/bottom/24.svg'
import { ItemProps } from '@/types/accordion.type'
interface AccordionProps {
  items: ItemProps[]
}
export const Accordion: FC<AccordionProps & PropsWithClassName> = ({
  className = '',
  items = []
}) => {
  return (
    <div className={clsx(styles['accordion'], className)}>
      {items.map(
        ({
          id,
          heading = '',
          summary = '',
          footnote = '',
          added = '',
          edited = ''
        }) => (
          <div key={id} className={styles['accordion__item']}>
            <Row
              align={'middle'}
              justify={'space-between'}
              className={styles['accordion__header']}
            >
              <Col>
                <Heading className={styles['accordion__heading']} level={3}>
                  {heading}
                </Heading>
              </Col>
              <Col>
                <Button
                  className={styles.accordion__arrow}
                  variant={'unstyled'}
                >
                  <Arrow />
                </Button>
              </Col>
            </Row>
            <div className={styles['accordion__content']}>
              <div className={styles['accordion__summary']}>{summary}</div>

              {footnote && (
                <div className={styles['accordion__footnote']}>{footnote}</div>
              )}
              {added && edited && (
                <Row className={styles['accordion__footnote-date']} gutter={32}>
                  <Col>Публикация: {added}</Col>
                  <Col>Изменено: {edited}</Col>
                </Row>
              )}
            </div>
          </div>
        )
      )}
    </div>
  )
}
