export interface ItemProps {
  id: string
  name: string
  image: string
  summary: string
  percent: string
  amount: string
}

export interface CarouselProps {
  items: ItemProps[]
}
