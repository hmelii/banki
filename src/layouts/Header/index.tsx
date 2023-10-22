import { FC } from 'react'
import styles from './header.module.scss'
import { PropsWithClassName } from '@/types/props-with-className'
import Logo from '@/components/Logo'
import MainMenu from '@/components/MainMenu'
import { ItemProps, MainMenuProps } from '@/types/main-menu-types'
import routes from '@/config/routes'
import Actions from '@/components/Actions'
import LayoutWrapper from '@/layouts/LayoutWrapper'

const {
  DEPOSIT,
  CREDITS,
  CARDS,
  BUSINESS,
  INSURANCE,
  MORE,
  NEWS,
  MORTGAGE,
  INVESTMENTS
} = routes

const MAIN_MENU_ITEMS: ItemProps[] = [
  {
    id: 'deposits',
    label: 'Вклады',
    url: DEPOSIT
  },
  {
    id: 'credits',
    label: 'Кредиты',
    url: CREDITS
  },
  {
    id: 'сards',
    label: 'Карты',
    url: CARDS
  },
  {
    id: 'mortgage',
    label: 'Ипотека',
    url: MORTGAGE
  },
  {
    id: 'insurance',
    label: 'Страхование',
    url: INSURANCE
  },
  {
    id: 'investments',
    label: 'Инвестиции',
    url: INVESTMENTS
  },
  {
    id: 'business',
    label: 'Бизнес',
    url: BUSINESS
  },
  {
    id: 'news',
    label: 'Новости',
    url: NEWS
  },
  {
    id: 'more',
    label: 'Ещё',
    url: MORE
  }
]

export const Header: FC<PropsWithClassName> = () => {
  return (
    <header className={styles.header}>
      <LayoutWrapper className={styles.header__layout}>
        <Logo className={styles['header__logo']} />
        <MainMenu className={styles['header__menu']} items={MAIN_MENU_ITEMS} />
        <Actions className={styles['header__actions']} />
      </LayoutWrapper>
    </header>
  )
}
