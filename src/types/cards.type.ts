export interface CardProps {
  id?: string
  license?: string
  label?: string
  url?: string
  empty?: boolean
}

export interface CardsProps {
  items: CardProps[]
}
