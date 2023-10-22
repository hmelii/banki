import { Row as AntRow, RowProps } from 'antd'
import { FC, PropsWithChildren } from 'react'

export const Row: FC<PropsWithChildren & RowProps> = ({
  children,
  ...rest
}) => <AntRow {...rest}>{children}</AntRow>
