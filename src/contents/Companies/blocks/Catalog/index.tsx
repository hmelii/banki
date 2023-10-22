import styles from './catalog.module.scss'
import Heading from '@/components/Heading'
import CollapseList from '../../../../components/CollapsibleList'
import { ItemProps } from '@/types/catalog.type'
import { FC } from 'react'
import { PropsWithClassName } from '@/types/props-with-className.type'
import clsx from 'clsx'

interface CatalogProps {
  items: ItemProps[]
}
export const Catalog: FC<CatalogProps & PropsWithClassName> = ({
  items = [],
  className = ''
}) => {
  return (
    <div className={clsx(styles.catalog, className)}>
      <Heading level={3}>Каталог микрозаймов</Heading>
      <CollapseList items={items} />
    </div>
  )
}
