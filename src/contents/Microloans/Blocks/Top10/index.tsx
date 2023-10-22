import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import styles from './top10.module.scss'
import clsx from 'clsx'
import Table from '@/components/Table'
import Box from '@/components/Box'
import { TableProps } from '@/types/table.type'

interface Top10Props {
  data: TableProps
}
export const Top10: FC<PropsWithClassName & Top10Props> = ({
  className = '',
  data = {}
}) => {
  return (
    <Box className={clsx(styles.top10, className)}>
      <Table
        head={data.head || []}
        body={data.body || []}
        className={styles.top10__table}
      />
    </Box>
  )
}
