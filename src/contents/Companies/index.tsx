import { FC } from 'react'
import Cards from '@/components/Cards'
import Button from '@/components/Button'
import Offers from '@/components/Offers'
import { AllProducts, Catalog } from '@/contents/Companies/blocks'
import Crumbs from '@/components/Crumbs'
import { Accordion } from '@/components/Accordion'
import styles from './companies.module.scss'
import Hero from '@/components/Hero'
import Text from '../../components/Text'
import routes from '@/config/routes'
import Link from 'next/link'

const COMPANIES = [
  {
    id: '495credit',
    label: '495 кредит',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'belka-credit',
    label: 'Belka Credit',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'boostra',
    label: 'Boostra',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'budgett',
    label: 'Budgett',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'caranga',
    label: 'Caranga',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'carcapital',
    label: 'Car Capital',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'car-money',
    label: 'Car Money',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'cash-drive',
    label: 'Cash Drive',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'car-money2',
    label: 'Car Money2',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'cash-drive3',
    label: 'Cash Drive3',
    license: '2103045009690',
    url: '/'
  },
  {
    id: 'cash-drive4',
    label: 'Cash Drive4',
    license: '2103045009690',
    url: '/'
  }
]

const OFFERS = [
  {
    id: '1',
    name: 'Турбозайм',
    percent: 'от 0%',
    amount: 'до 30 000 ₽',
    summary: 'Займ онлайн',
    image: '/banki/images/offers/23.svg'
  },
  {
    id: '2',
    name: 'Займер.ру',
    percent: 'от 0%',
    amount: 'до 30 000 ₽',
    summary: 'Займ под 0%',
    image: '/banki/images/offers/14.svg'
  },
  {
    id: '3',
    name: 'Веб-займ',
    percent: 'от 0%',
    amount: 'до 30 000 ₽',
    summary: 'Онлайн для новых клиентов',
    image: '/banki/images/offers/86.svg'
  },
  {
    id: '4',
    name: 'BelkaCredit',
    percent: 'от 0%',
    amount: 'до 30 000 ₽',
    summary: 'Первый займ бесплатно',
    image: '/banki/images/offers/133.svg'
  }
]

const CATALOG = [
  {
    id: '1',
    name: 'Займ онлайн',
    image: '/banki/images/catalog/1.svg'
  },
  {
    id: '2',
    name: 'Деньги по паспорту',
    image: '/banki/images/catalog/2.svg'
  },
  {
    id: '3',
    name: 'На карту онлайн',
    image: '/banki/images/catalog/3.svg'
  },
  {
    id: '4',
    name: 'На большую сумму',
    image: '/banki/images/catalog/4.svg'
  },
  {
    id: '5',
    name: 'Экспресс',
    image: '/banki/images/catalog/5.svg'
  },
  {
    id: '6',
    name: 'Без процентов',
    image: '/banki/images/catalog/6.svg'
  }
]

const OTHER_PRODUCTS = [
  {
    id: '1',
    heading: 'Без отказа',
    items: [
      {
        id: '1',
        heading: 'Займ без прописки'
      },
      {
        id: '2',
        heading: 'Займы на карту по всей России'
      },
      {
        id: '3',
        heading: 'Займы безработным'
      },
      {
        id: '4',
        heading: 'Займы 10000 рублей на карту'
      },
      {
        id: '5',
        heading: 'Частные денежные займы'
      },
      {
        id: '6',
        heading: 'СМС займы с моментальным одобрением'
      },
      {
        id: '7',
        heading: 'Займы 80000'
      },
      {
        id: '8',
        heading: 'Займ без паспорта онлайн'
      },
      {
        id: '9',
        heading: 'Займы 200000 рублей на карту'
      },
      {
        id: '10',
        heading: 'Займы 20000 рублей на карту'
      }
    ]
  },
  {
    id: '2',
    heading: 'Онлайн',
    items: [
      {
        id: '1',
        heading: 'Займы без проверки кредитной истории'
      },
      {
        id: '2',
        heading: 'Займы на год'
      },
      {
        id: '3',
        heading: 'Займ по акции (спецпредложения)'
      },
      {
        id: '4',
        heading: 'Займ без указания работы'
      },
      {
        id: '5',
        heading: 'Займы с доставкой'
      },
      {
        id: '6',
        heading: 'Деньги по паспорту срочно'
      },
      {
        id: '7',
        heading: 'Займы 12000'
      },
      {
        id: '8',
        heading: 'Новые мфо'
      },
      {
        id: '9',
        heading: 'Займ без залога'
      },
      {
        id: '10',
        heading: 'Займ на карту Виза'
      }
    ]
  },
  {
    id: '3',
    heading: 'По виду',
    items: [
      {
        id: '1',
        heading: 'Новинки микрозаймов'
      },
      {
        id: '2',
        heading: 'Займы на чужую карту'
      },
      {
        id: '3',
        heading: 'Займ с моментальным решением'
      },
      {
        id: '4',
        heading: 'Займы переводом через Золотую корону'
      },
      {
        id: '5',
        heading: 'Микрозайм на карту Сбербанка'
      },
      {
        id: '6',
        heading: 'Займ на карту Кукуруза'
      },
      {
        id: '7',
        heading: 'Деньги под залог авто без ПТС'
      },
      {
        id: '8',
        heading: 'Займ 300 000 рублей'
      },
      {
        id: '9',
        heading: 'Деньги под залог ПТС'
      },
      {
        id: '10',
        heading: 'Займ без отказа с плохой кредитной историей'
      }
    ]
  },
  {
    id: '4',
    heading: 'Предложения',
    items: [
      {
        id: '1',
        heading: '10 000 рублей'
      },
      {
        id: '2',
        heading: 'На карту с плохой кредитной историей'
      },
      {
        id: '3',
        heading: 'С плохой кредитной историей'
      },
      {
        id: '4',
        heading: 'Мгновенно без отказа'
      },
      {
        id: '5',
        heading: 'Круглосуточно без отказа'
      },
      {
        id: '6',
        heading: 'Деньги на карту'
      },
      {
        id: '7',
        heading: 'Получить займ без паспорта'
      },
      {
        id: '8',
        heading: 'Под низкий процент'
      },
      {
        id: '9',
        heading: 'Онлайн с переводом на карту'
      },
      {
        id: '10',
        heading: 'Под залог недвижимости'
      }
    ]
  }
]

const ALL_PRODUCTS = [
  {
    id: '1',
    heading: 'Калькуляторы',
    items: [
      {
        id: '1',
        heading: 'Калькулятор туристической страховки'
      },
      {
        id: '2',
        heading: 'Калькулятор ипотечного страхования'
      },
      {
        id: '3',
        heading: 'Калькулятор вкладов'
      },
      {
        id: '4',
        heading: 'Калькулятор кредитов'
      },
      {
        id: '5',
        heading: 'Калькулятор ипотеки'
      },
      {
        id: '6',
        heading: 'Калькулятор автокредитов'
      },
      {
        id: '7',
        heading: 'Калькулятор ОСАГО'
      },
      {
        id: '8',
        heading: 'Калькулятор Каско'
      },
      {
        id: '9',
        heading: 'Калькулятор ДМС'
      },
      {
        id: '10',
        heading: 'Калькулятор медицинской страховки'
      }
    ]
  },
  {
    id: '2',
    heading: 'Вклады и инвестиции',
    items: [
      {
        id: '1',
        heading: 'Вклады в Сбербанке'
      },
      {
        id: '2',
        heading: 'В Почта банке'
      },
      {
        id: '3',
        heading: 'В рублях'
      },
      {
        id: '4',
        heading: 'С высоким процентом'
      },
      {
        id: '5',
        heading: 'Вклады с онлайн заявкой'
      },
      {
        id: '6',
        heading: 'Купить ПИФы'
      },
      {
        id: '7',
        heading: 'Вклады в Москве'
      },
      {
        id: '8',
        heading: 'Купить облигации'
      },
      {
        id: '9',
        heading: 'Акции российских компаний'
      },
      {
        id: '10',
        heading: 'Акции Газпром'
      },

      {
        id: '11',
        heading: 'Акции Голубые фишки'
      }
    ]
  },
  {
    id: '3',
    heading: 'Кредиты и займы',
    items: [
      {
        id: '1',
        heading: 'С онлайн заявкой'
      },
      {
        id: '2',
        heading: 'Для пенсионеров'
      },
      {
        id: '3',
        heading: 'Срочный займ на карту'
      },
      {
        id: '4',
        heading: 'Займ без отказа'
      },
      {
        id: '5',
        heading: 'Беспроцентный займ'
      },
      {
        id: '6',
        heading: 'Рефинансирование кредитов'
      },
      {
        id: '7',
        heading: 'Под залог'
      },
      {
        id: '8',
        heading: 'Кредиты в Москве'
      },
      {
        id: '9',
        heading: 'Займ на карту'
      },
      {
        id: '10',
        heading: 'Займ онлайн'
      },

      {
        id: '11',
        heading: 'Акции Голубые фишки'
      }
    ]
  },
  {
    id: '4',
    heading: 'Ещё',
    items: [
      {
        id: '1',
        heading: '1 доллар в рублях'
      },
      {
        id: '2',
        heading: '1 евро в рублях'
      },
      {
        id: '3',
        heading: 'Курсы ЦБ'
      },
      {
        id: '4',
        heading: 'Банки России'
      },
      {
        id: '5',
        heading: 'Книга памяти'
      },
      {
        id: '6',
        heading: 'Банки на карте'
      },
      {
        id: '7',
        heading: 'Отзывы о банках'
      },
      {
        id: '8',
        heading: 'Отзывы о страховых компаниях'
      },
      {
        id: '9',
        heading: 'Личный кабинет агента'
      },
      {
        id: '10',
        heading: 'Народный рейтинг МФО'
      },

      {
        id: '11',
        heading: 'Тема дня'
      },
      {
        id: '12',
        heading: 'Новости'
      },
      {
        id: '13',
        heading: 'Финансовый словарь'
      }
    ]
  }
]

const CRUMBS = [
  {
    id: 'main',
    label: 'Главная'
  },
  {
    id: 'category',
    label: 'Микрозаймы'
  },
  {
    id: 'city',
    label: 'Москва',
    active: true
  }
]

const HOW_TO = [
  {
    id: '1',
    heading: 'Список лучших МФО',
    summary: (
      <Text>
        <>
          <p>
            Сегодня у человека есть множество способов решения финансовых
            проблем. Некоторые предпочитают взять в долг у друзей, кто-то
            обращается в банки, но в последние годы появилась и другая
            возможность — займ в МФО, предоставляемый микрофинансовыми
            компаниями. Данный продукт с каждым днем набирает популярность среди
            населения, поскольку крупные кредитные организации установили
            довольно жесткие требования к клиентам, поэтому в банковском секторе
            очень сложно получить необходимую сумму.
          </p>
          <p>
            Взять займ в микрофинансовой организации вправе любой человек,
            соответствующий следующим критериям:
          </p>
          <ul>
            <li>возраст на момент оформления займа — от 18 лет;</li>
            <li>наличие гражданства РФ;</li>
            <li>постоянный доход (в том числе неофициальный);</li>
            <li>постоянная прописка в России.</li>
          </ul>
          <p>
            Последний пункт появился одновременно с возникновением
            онлайн-оформления по займам, благодаря чему МФО сегодня предлагают
            средства не только жителям крупных городов, но и другим гражданам.
            Многие предпочитают именно этот вариант, поскольку он доступен
            круглосуточно, а также по выходным и праздникам.
          </p>
          <h3>Как оформить займ в МФО?</h3>
          <p>
            Прежде чем составлять заявления, вам необходимо сделать расчеты
            планируемых расходов — так вы поймете, о какой сумме идет речь. При
            этом не стоит искусственно завышать бюджет. Чем меньше окажется
            итоговая сумма, тем легче её вернуть. Далее переходите к изучению
            условий, предложенных микрофинансовыми организациями. Поскольку
            сегодня информацию о займах можно найти онлайн, посетите сайт
            компании и проанализируйте основные параметры: процентная ставка,
            продолжительность и стоимость обслуживания. Все эти параметры влияют
            на итоговую цену, которую можно узнать с помощью онлайн-калькулятора
            или же у представителей лучших МФО на карту, которых много. Помимо
            подачи заявки по займу на официальном сайте, составить заявление
            можно в офисах компании или на точках обслуживания.
          </p>

          <p>
            Вы заполняете анкету, в которой указываете личные данные, сведения о
            займе, а также способ, которым хотите получить средства в случае
            одобрения: банковская карта, денежный перевод, перечисление на
            онлайн-кошелек или же наличные в офисе компании. Указанные
            инструменты также подходят для погашения займов. С их помощью можно
            совершать ежемесячные выплаты и возвращать долг.
          </p>

          <p>
            Прежде чем одобрить сумму, компания проводит проверку заявления на
            достоверность сведений. В высокой долей вероятности вы сможете
            получить необходимую сумму, даже если ранее у вас случались
            просрочки по ежемесячным платежам. Разумеется, при плохой кредитной
            истории на крупный займ не стоит рассчитывать, но и небольшие деньги
            способны в определенной мере решить финансовые проблемы.
          </p>
        </>
      </Text>
    ),
    footnote:
      'Все предложения, отображенные на данной странице, являются лучшими или выгодными исключительно по мнению экспертов Банки.ру',
    added: '10.08.2021',
    edited: '20.09.2023'
  }
]

export const Companies: FC = () => {
  return (
    <div className={styles.companies}>
      <Hero
        className={styles.companies__hero}
        side={
          <Button
            className={styles['companies__side-button']}
            variant={'light'}
            size="l"
          >
            Подобрать займ
          </Button>
        }
      >
        Микрофинансовые и микрокредитные организации{' '}
        <Link href={routes.MAIN}>в Москве</Link>
      </Hero>
      <Cards className={styles.companies__section} items={COMPANIES} />
      <Offers className={styles.companies__section} items={OFFERS} />
      <Catalog className={styles.companies__section} items={CATALOG} />
      <Accordion className={styles.companies__section} items={HOW_TO} />
      <AllProducts
        className={styles.companies__section}
        items={OTHER_PRODUCTS}
      />
      <AllProducts
        className={styles.companies__section}
        heading={'Все продукты Банки.ру'}
        items={ALL_PRODUCTS}
      />
      <Crumbs className={styles.companies__footer} items={CRUMBS} />
    </div>
  )
}
