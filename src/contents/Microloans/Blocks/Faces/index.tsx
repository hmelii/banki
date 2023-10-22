import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { ItemProps } from '@/types/faces.type'
import { Col, Row } from '@/components/Grid'
import Heading from '@/components/Heading'
import styles from './faces.module.scss'
import Link from 'next/link'
import routes from '@/config/routes'
interface FacesProps {
  items: ItemProps[]
}
export const Faces: FC<PropsWithClassName & FacesProps> = ({
  items = [],
  className = ''
}) => {
  return (
    <Row className={styles.faces} align={'top'}>
      {items.map(({ image, name, summary, id }) => (
        <Col key={id} className={styles.faces__item}>
          <Row align={'middle'}>
            <Col className={styles.faces__fig}>
              <img className={styles.faces__img} src={image} alt="" />
            </Col>
            <Col className={styles.faces__body}>
              <Heading className={styles.faces__heading} level={5}>
                <Link
                  className={styles['faces__heading-link']}
                  href={routes.MAIN}
                >
                  {name}
                </Link>
              </Heading>
              <div className={styles.faces__summary}>{summary}</div>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  )
}
