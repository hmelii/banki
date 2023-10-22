import { FC } from 'react'
import styles from './legend.module.scss'
export const Legend: FC = () => {
  return (
    <div className={styles.legend}>
      *На основании исследований ИОМ &ldquo;Анкетолог&rdquo;, Tiburon Research,
      август 2022 года
    </div>
  )
}
