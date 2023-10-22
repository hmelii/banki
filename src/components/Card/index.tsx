import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { CardProps, CardsProps } from '@/types/cards.type'
import Button from '@/components/Button'
import Link from 'next/link'
import routes from '@/config/routes'
import clsx from 'clsx'
import styles from './card.module.scss'

const Card: FC<PropsWithClassName & CardProps> = ({
  id,
  className = '',
  url,
  license,
  label,
  empty = false
}) => {
  if (empty) {
    return (
      <div className={clsx(styles.card, styles.card_empty, className)}>
        <div className={styles.card__fig}>
          <img
            className={styles['card__fig-img']}
            src={`/banki/images/companies/microcredit.svg`}
            alt={''}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.card__fig}>
        <img
          className={styles['card__fig-img']}
          src={`/banki/images/companies/${id}.svg`}
          alt={label}
        />
      </div>
      <div className={styles.card__actions}>
        <Button
          variant={'link'}
          as={Link}
          size={'m'}
          href={routes.MAIN}
          className={styles.card__button}
        >
          Подробнее
        </Button>
      </div>
      <div className={styles.card__license}>Лиц. № {license}</div>
    </div>
  )
}
export default Card
