export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export const petCategories: Category[] = [
  {
    id: 'cats',
    name: 'Кошки',
    description: 'Котята и взрослые кошки разных пород',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/cat'
  },
  {
    id: 'dogs',
    name: 'Собаки',
    description: 'Щенки и взрослые собаки разных пород',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/dog'
  },
  {
    id: 'birds',
    name: 'Птицы',
    description: 'Попугаи, канарейки и другие декоративные птицы',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/bird'
  },
  {
    id: 'rodents',
    name: 'Грызуны',
    description: 'Хомяки, крысы, морские свинки и другие грызуны',
    image: 'https://images.pexels.com/photos/4520483/pexels-photo-4520483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/rodent'
  },
  {
    id: 'reptiles',
    name: 'Рептилии',
    description: 'Черепахи, ящерицы и другие рептилии',
    image: 'https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/reptile'
  },
  {
    id: 'fish',
    name: 'Рыбы',
    description: 'Аквариумные рыбки разных видов',
    image: 'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/fish'
  }
];

export const productCategories: Category[] = [
  {
    id: 'food',
    name: 'Корма и питание',
    description: 'Сухие и влажные корма, лакомства, витамины',
    image: 'https://images.pexels.com/photos/6823379/pexels-photo-6823379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/products/food'
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    description: 'Ошейники, поводки, одежда, миски',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/products/accessories'
  },
  {
    id: 'toys',
    name: 'Игрушки',
    description: 'Мячики, игрушки-пищалки, интерактивные игрушки',
    image: 'https://img.joomcdn.net/1ee7cc5420262cbe8de91263f831212063c728f2_original.jpeg',
    link: '/catalog/products/toys'
  },
  {
    id: 'care',
    name: 'Средства ухода',
    description: 'Шампуни, щетки, когтерезки, средства от паразитов',
    image: 'https://storage.yandexcloud.net/moskvichmag/uploads/2019/03/5.jpg',
    link: '/catalog/products/care'
  },
  {
    id: 'housing',
    name: 'Домики и клетки',
    description: 'Лежанки, домики, клетки, переноски',
    image: 'https://ae04.alicdn.com/kf/S3e4a5b06a3b44308b2a3d5ae91b04b452.jpg',
    link: '/catalog/products/housing'
  }
];