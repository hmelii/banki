import styles from './offers.module.scss'
import { FC } from 'react'
import Heading from '@/components/Heading'
import Carousel from '@/components/Carousel'
import { ItemProps } from '@/types/carousel.types'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

interface OffersProps {
  items: ItemProps[]
}
const Offers: FC<OffersProps & PropsWithClassName> = ({
  items = [],
  className = ''
}) => {
  return (
    <div className={clsx(styles.offers, className)}>
      <Heading level={3}>Предложения месяца</Heading>
      <Carousel items={items} />
    </div>
  )
}
export default Offers
