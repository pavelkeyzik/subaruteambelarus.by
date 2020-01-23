export type EventType = 'carmeet' | 'trip' | 'competition';

export interface IEvent {
  title: string;
  link: string | null;
  type: EventType;
}

export interface IEventSection {
  headerTitle: string;
  data: IEvent[];
}

export const events: IEventSection[] = [
  {
    headerTitle: '2020',
    data: [
      {
        title: '5-ый День Рождения витебского клуба SUBARU',
        type: 'trip',
        link: null,
      },
    ],
  },
  {
    headerTitle: '2019',
    data: [
      {
        title: 'Предновогодняя сходка',
        type: 'carmeet',
        link: 'https://vk.com/album-75289878_269292835',
      },
      {
        title: 'Слёт субаристов в г. Могилёв',
        type: 'trip',
        link: 'https://vk.com/album-75289878_268725319',
      },
      {
        title: 'Сходка ТЦ ALL',
        type: 'carmeet',
        link: 'https://vk.com/album-75289878_268171896',
      },
      {
        title: 'Сходка ТЦ ALL',
        type: 'carmeet',
        link: 'https://vk.com/album-75289878_267049971',
      },
      {
        title: 'Встреча с SubaruSect',
        type: 'carmeet',
        link: 'https://vk.com/album-75289878_264504386',
      },
      {
        title: 'Встреча с официальным диллером SUBARU в Беларуси «Ланкор»',
        type: 'carmeet',
        link: 'https://vk.com/album-75289878_261102630',
      },
      {
        title:
          'Слёт субаристов в г. Лепель совместно с КЦ «Forsage» и официальным диллером SUBARU в Беларуси «Ланкор»',
        type: 'trip',
        link: 'https://vk.com/album-75289878_259931099',
      },
    ],
  },
  {
    headerTitle: '2018',
    data: [
      {
        title: 'Слёт субаристов в г. Солигорск',
        link: 'https://vk.com/album-75289878_253758522',
        type: 'trip',
      },
    ],
  },
  {
    headerTitle: '2017',
    data: [
      {
        title: 'Первая сходка клуба SUBARU г. Солигорск',
        link: 'https://vk.com/album-75289878_244084745',
        type: 'carmeet',
      },
    ],
  },
  {
    headerTitle: '2016',
    data: [
      {
        title: 'Выезд в поле',
        link: 'https://vk.com/album-75289878_238084688',
        type: 'carmeet',
      },
      {
        title: 'Выезд в поле в районе Сенницы',
        link: 'https://vk.com/album-75289878_237831058',
        type: 'carmeet',
      },
      {
        title: 'Слёт субаристов в г. Могилёв',
        link: 'https://vk.com/album-75289878_237831058',
        type: 'trip',
      },
      {
        title: 'Засветились на Onliner.by',
        link: 'https://auto.onliner.by/2016/08/05/subaru-85',
        type: 'carmeet',
      },
      {
        title: 'Поездка в Брест',
        link: 'https://vk.com/album-75289878_232530634',
        type: 'competition',
      },
    ],
  },
  {
    headerTitle: '2015',
    data: [
      {
        title: 'Соревнования SUBARU vs BMW vs Mitsubishi vs Honda',
        link: 'https://vk.com/album-75289878_218937394',
        type: 'competition',
      },
    ],
  },
];
