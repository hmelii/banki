import { FC } from 'react'
import styles from './microloans.module.scss'
import Hero from '@/components/Hero'
import { AllProducts } from '@/contents/Companies/blocks'
import Crumbs from '@/components/Crumbs'
import { Accordion } from '@/components/Accordion'
import Text from '../../components/Text'
import {
  Faces,
  Faq,
  Filters,
  FreeMicroloan,
  Zaimer,
  Catalog,
  Organization,
  Top10,
  Reviews
} from '@/contents/Microloans/Blocks'
import Offers from '@/components/Offers'
import { Catalog as CatalogAccordition } from '../Companies/blocks'

export const Microloans: FC = () => {
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
      label: 'Микрозаймы',
      active: true
    }
  ]

  const HOW_TO = [
    {
      id: '1',
      heading: 'Срочно взять микрозайм на карту онлайн',
      summary: (
        <Text>
          <>
            <figure
              style={{
                float: 'left',
                marginBottom: 10,
                marginRight: 20,
                width: 210
              }}
            >
              <img
                style={{ width: '100%' }}
                src={'/banki/images/microloans/pic1.jpg'}
                alt={''}
              />
            </figure>
            <p>
              Сегодня, когда российские банки сокращают объемы необеспеченного
              кредитования, микрозаймы небанковских кредитных организаций стали
              для некоторых граждан единственной возможностью финансирования.
            </p>
            <h3>Где взять микрозайм?</h3>
            <p>
              Многие мини займы выдаются в режиме онлайн круглосуточно. Для
              того, что подать заявку на получение денежных средств в Москве в
              большинстве случаев достаточно связаться со специалистом
              организации по телефону или через интернет.
            </p>
            <p>
              Все займы онлайн <a href={'#'}>микрофинансовых организаций</a>{' '}
              требуют от заемщика предоставления паспортных и других личных
              данных. Кроме паспорта никаких других документов предоставлять,
              как правило, не нужно.
            </p>
            <h3>Как взять микрозайм на банковскую карту?</h3>
            <p>
              Существует много различных способов получения микрозаймов онлайн в
              микрофинансовой организации. Денежные средства могут быть выданы
              наличными в офисе компании или ее курьером, почтовым переводом, с
              помощью систем переводов, на электронный кошелек. Кроме того,
              получить онлайн микрозаймы на карту срочно можно легко и без
              проблем. Оформляйте заявку и получайте ваши деньги.
            </p>

            <p>
              Выбрать способ получения средств заемщику необходимо в момент
              подачи онлайн-заявки.
            </p>

            <p>
              Все предложения, отображенные на данной странице, являются лучшими
              или выгодными исключительно по мнению экспертов Банки.ру
            </p>

            <table className={'table1'}>
              <tbody>
                <tr>
                  <td>🔷 Минимальная ставка займа:</td>
                  <td> 0%</td>
                </tr>

                <tr>
                  <td>🔷 Минимальная сумма займа:</td>
                  <td>100 ₽</td>
                </tr>
                <tr>
                  <td>🔷 Максимальная сумма займа:</td>
                  <td>3 000 000 ₽</td>
                </tr>
                <tr>
                  <td>🔷 Максимальный срок займа:</td>
                  <td>1825 дней</td>
                </tr>
              </tbody>
            </table>
          </>
        </Text>
      ),

      added: '10.08.2021',
      edited: '20.09.2023'
    },
    {
      id: '2',
      heading: 'Эксперты направления микрозаймов',
      summary: (
        <Faces
          items={[
            {
              id: '1',
              image: '/banki/images/microloans/pic2.jpg',
              name: 'Надежда Низамова',
              summary: 'специалист по кредитному контенту Банки.ру'
            },
            {
              id: '2',
              image: '/banki/images/microloans/pic3.jpg',
              name: 'Ольга Станчак',
              summary: 'эксперт отдела анализа банковских услуг Банки.ру'
            }
          ]}
        ></Faces>
      )
    },
    {
      id: '3',
      heading: 'Задать вопрос о микрозаймах',
      summary: <Faq />
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

  const FILTERS = [
    {
      active: true,
      id: '1',
      name: 'Не важно'
    },
    {
      id: '2',
      name: '5 000 - 15 000 ₽'
    },
    {
      id: '3',
      name: '15 000 - 30 000 ₽'
    },
    {
      id: '4',
      name: '30 000 - 100 000 ₽'
    }
  ]

  const MICROLOANS = [
    {
      id: 'dengi',
      name: 'Деньги',
      image: '/banki/images/microloans/pic6.svg'
    },
    {
      id: 'krediska',
      name: 'Krediska',
      image: '/banki/images/microloans/pic7.svg'
    },
    {
      id: 'zaimer',
      name: 'zaimer',
      image: '/banki/images/microloans/pic8.svg'
    },
    {
      id: 'vebzaim',
      name: 'Vebzaim',
      image: '/banki/images/microloans/pic9.svg'
    },
    {
      id: 'Belka',
      name: 'Belka Credit',
      image: '/banki/images/microloans/pic10.svg'
    }
  ]

  const CATALOG = [
    {
      id: '1',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic11.svg'
    },
    {
      id: '2',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic12.svg'
    },
    {
      id: '3',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic13.svg'
    },
    {
      id: '4',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic14.svg'
    },
    {
      id: '5',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic11.svg'
    },
    {
      id: '6',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic12.svg'
    },
    {
      id: '7',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic13.svg'
    },
    {
      id: '8',
      rating: '5.0',
      amount: '2 000 — 30 000 ₽',
      term: '7 — 30 дн.',
      termWithoutPercent: '30 дн.',
      name: 'Займер.ру',
      summary: 'Займ под 0%',
      image: '/banki/images/microloans/pic14.svg'
    }
  ]

  const ORGANIZATION = [
    {
      id: '1',
      name: '495 Кредит',
      phone: '8 495 122-22-89',
      image: '/banki/images/microloans/pic15.svg',
      license: '№ 2103045009690'
    },
    {
      id: '2',
      name: 'Белка Кредит',
      phone: '8 495 122-22-89',
      image: '/banki/images/microloans/pic16.svg',
      license: '№ 2103045009690'
    },
    {
      id: '3',
      name: 'Boostra',
      phone: '8 495 122-22-89',
      image: '/banki/images/microloans/pic17.svg',
      license: '№ 2103045009690'
    },
    {
      id: '4',
      name: 'Budgett',
      phone: '8 495 122-22-89',
      image: '/banki/images/microloans/pic18.svg',
      license: '№ 2103045009690'
    }
  ]

  const CATALOG_ACCORDITION = [
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

  const TOP_10 = {
    head: [
      {
        id: 'bank',
        label: 'Банк'
      },
      {
        id: 'rate',
        label: 'Эффективная ставка'
      },
      {
        id: 'term',
        label: 'Срок'
      },
      {
        id: 'sum',
        label: 'Сумма'
      }
    ],
    body: [
      [
        {
          id: '1',
          label: 'Kviku'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'А ДЕНЬГИ'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'Деньги на дом'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'Krediska'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'ФИНТЕРРА'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'CarMoney'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'Бериберу'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'Космикзайм'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'Мир Займов'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ],
      [
        {
          id: '1',
          label: 'Целевые Финансы'
        },
        {
          id: '2',
          label: '0%'
        },
        {
          id: '3',
          label: '60 — 365 дней'
        },
        {
          id: '3',
          label: '1 000 ₽ — 15 000 ₽'
        }
      ]
    ]
  }

  const REVIEWS = [
    {
      id: '1',
      name: 'Отзыв о работе компании',
      image: '/banki/images/microloans/pic18.svg',
      summary:
        'отличная компания!предоставляет заем быстро без навязывания страховки, всегда предоставляют промокоды и дополнитель... ',
      date: '30.10.2023',
      category: 'ЗАЙМЫ',
      rate: 5
    },
    {
      id: '2',
      name: 'Быстрота',
      image: '/banki/images/microloans/pic19.svg',
      summary:
        'отличная компания!предоставляет заем быстро без навязывания страховки, всегда предоставляют промокоды и дополнитель... ',
      date: '30.10.2023',
      category: 'ЗАЙМЫ',
      rate: 5
    }
  ]

  return (
    <div className={styles.microloans}>
      <Hero
        className={styles.companies__hero}
        body={
          <div className={styles['microloans__heading-body']}>
            Выгодные предложения по срочным микрозаймам для физических лиц.
            Выбирайте низкие проценты, удобные способы оплаты и зачисления денег
            на карту. Оставьте заявку на микрозайм онлайн.
          </div>
        }
      >
        Микрозаймы <a href={'#'}>в Москве</a>
      </Hero>
      <Filters className={styles.microloans__filters} items={FILTERS} />
      <Zaimer className={styles.microloans__zaimer} />
      <FreeMicroloan
        heading={'Первый займ бесплатно'}
        className={styles.microloans__section}
        items={MICROLOANS}
      />
      <Catalog className={styles.microloans__section} items={CATALOG} />
      <Offers className={styles.microloans__section} items={OFFERS} />
      <Organization
        className={styles.microloans__section}
        heading={'Микрокредитные организации'}
        items={ORGANIZATION}
      />
      <CatalogAccordition
        className={styles.microloans__section}
        items={CATALOG_ACCORDITION}
      />
      <Top10 className={styles.microloans__section} data={TOP_10} />
      <Reviews
        className={styles.microloans__section}
        heading={'Отзывы о МФО'}
        items={REVIEWS}
      />
      <Accordion className={styles.microloans__section} items={HOW_TO} />

      <AllProducts
        className={styles.microloans__section}
        items={OTHER_PRODUCTS}
      />
      <AllProducts
        className={styles.microloans__section}
        heading={'Все продукты Банки.ру'}
        items={ALL_PRODUCTS}
      />
      <Crumbs className={styles.microloans__footer} items={CRUMBS} />
    </div>
  )
}
