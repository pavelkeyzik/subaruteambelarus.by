export type EventType = 'carmeet' | 'trip';

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
];
