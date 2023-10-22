import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './search.module.scss'
import clsx from 'clsx'
import TextField from '@/components/TextField'

export const Search: FC<PropsWithClassName> = ({ className = '' }) => {
  return (
    <div className={clsx(styles.search, className)}>
      <form>
        <TextField
          className={styles.search__field}
          type={'text'}
          value={''}
          placeholder={'Поиск по сайту'}
        />
      </form>
    </div>
  )
}
