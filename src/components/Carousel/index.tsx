import styles from './carousel.module.scss'
import { FC } from 'react'
import Card2 from '@/components/Card2'
import { ItemProps } from '@/types/carousel.types'

interface CarouselProps {
  items: ItemProps[]
}
const Carousel: FC<CarouselProps> = ({ items = [] }) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__layout}>
        <ul className={styles.carousel__list}>
          {items.map((item) => (
            <li key={item.id} className={styles.carousel__item}>
              <Card2 {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Carousel
