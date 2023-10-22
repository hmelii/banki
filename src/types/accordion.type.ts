import { ReactElement } from 'react'

export interface ItemProps {
  id: string
  heading: string
  summary: ReactElement
  footnote?: string
  added?: string
  edited?: string
}
