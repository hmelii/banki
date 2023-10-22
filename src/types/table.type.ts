export interface CellProps {
  id: string
  label: string
}

export interface TableProps {
  head: CellProps[]
  body: CellProps[][]
}
