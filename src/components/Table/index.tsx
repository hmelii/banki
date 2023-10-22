import styles from './table.module.scss'
import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import { CellProps, TableProps } from '@/types/table.type'
import clsx from 'clsx'
import Typography from '@/components/Typography'

const Table: FC<PropsWithClassName & TableProps> = ({
  className = '',
  head = [],
  body = []
}) => {
  return (
    <table className={clsx(styles.table, className)}>
      <thead>
        <tr>
          {head.map(({ id, label }) => (
            <th key={id}>
              <Typography type={2}>{label}</Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, index) => (
          <tr key={index}>
            {row.map(({ id, label }) => (
              <td key={id}>{label}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
