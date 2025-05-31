export interface Pet {
  id: string;
  name: string;
  type: 'cat' | 'dog' | 'bird' | 'rodent' | 'reptile' | 'fish';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  price: number;
  description: string;
  careInstructions: string;
  images: string[];
  available: boolean;
  features: string[];
  weight?: string;
  vaccinated?: boolean;
  passport?: boolean;
}

export const pets: Pet[] = [
  {
    id: 'dog-1',
    name: 'Рекс',
    type: 'dog',
    breed: 'Немецкая овчарка',
    age: '8 месяцев',
    gender: 'male',
    price: 25000,
    description: 'Рекс - энергичный и умный щенок немецкой овчарки. Он уже знает базовые команды и любит играть с мячом. Отлично ладит с детьми и другими животными.',
    careInstructions: 'Требуется ежедневная физическая активность, регулярное расчесывание шерсти и сбалансированное питание.',
    images: [
      'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Игривый', 'Умный', 'Обучаемый', 'Дружелюбный'],
    weight: '12 кг',
    vaccinated: true,
    passport: true
  },
  {
    id: 'cat-1',
    name: 'Муся',
    type: 'cat',
    breed: 'Британская короткошерстная',
    age: '1 год',
    gender: 'female',
    price: 15000,
    description: 'Муся - очаровательная британская кошечка с плюшевой шерстью. Она спокойная, ласковая и любит сидеть на коленях. Приучена к лотку и когтеточке.',
    careInstructions: 'Нуждается в регулярном расчесывании шерсти, качественном корме и чистом лотке.',
    images: [
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Спокойная', 'Ласковая', 'Чистоплотная', 'Игривая'],
    weight: '3.5 кг',
    vaccinated: true,
    passport: true
  },
  {
    id: 'bird-1',
    name: 'Кеша',
    type: 'bird',
    breed: 'Волнистый попугай',
    age: '6 месяцев',
    gender: 'male',
    price: 3000,
    description: 'Кеша - яркий волнистый попугайчик с дружелюбным характером. Он уже научился сидеть на пальце и не боится людей. Принесет много радости вашей семье.',
    careInstructions: 'Требуется просторная клетка, свежая вода, специальный корм для попугаев и возможность летать вне клетки.',
    images: [
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Яркий', 'Активный', 'Любопытный', 'Обучаемый'],
    weight: '40 г',
    vaccinated: false,
    passport: false
  },
  {
    id: 'rodent-1',
    name: 'Хомка',
    type: 'rodent',
    breed: 'Сирийский хомяк',
    age: '3 месяца',
    gender: 'male',
    price: 1500,
    description: 'Хомка - забавный сирийский хомячок с золотистой шерсткой. Он активный по вечерам и любит бегать в колесе. Идеальный питомец для начинающих.',
    careInstructions: 'Нуждается в просторной клетке с опилками, беговом колесе, укрытии и регулярной чистке клетки.',
    images: [
      'https://images.pexels.com/photos/4520483/pexels-photo-4520483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Активный', 'Любопытный', 'Неприхотливый', 'Забавный'],
    weight: '120 г'
  },
  {
    id: 'dog-2',
    name: 'Белла',
    type: 'dog',
    breed: 'Лабрадор',
    age: '3 месяца',
    gender: 'female',
    price: 30000,
    description: 'Белла - очаровательный щенок лабрадора с золотистой шерстью. Она игривая, ласковая и очень умная. Отлично подойдет для семьи с детьми.',
    careInstructions: 'Требуется ежедневная физическая активность, регулярное купание и качественное питание.',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Добрая', 'Игривая', 'Умная', 'Любит детей'],
    weight: '5 кг',
    vaccinated: true,
    passport: true
  },
  {
    id: 'cat-2',
    name: 'Симба',
    type: 'cat',
    breed: 'Мейн-кун',
    age: '5 месяцев',
    gender: 'male',
    price: 45000,
    description: 'Симба - маленький представитель породы мейн-кун с потрясающей внешностью. У него красивый окрас, кисточки на ушах и уже сейчас видно, что вырастет очень крупным.',
    careInstructions: 'Требуется регулярное расчесывание, специальные игрушки для активных кошек и качественное питание.',
    images: [
      'https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/38867/pexels-photo-38867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Крупный', 'Ласковый', 'Игривый', 'Умный'],
    weight: '2.8 кг',
    vaccinated: true,
    passport: true
  },
  {
    id: 'bird-2',
    name: 'Рио',
    type: 'bird',
    breed: 'Жако',
    age: '1 год',
    gender: 'male',
    price: 85000,
    description: 'Рио - молодой попугай жако, известный своим интеллектом и способностью к обучению. Уже знает несколько слов и легко поддается дрессировке.',
    careInstructions: 'Необходима большая клетка, разнообразное питание, игрушки для развития интеллекта и регулярное общение.',
    images: [
      'https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Умный', 'Разговорчивый', 'Социальный', 'Долгожитель'],
    weight: '400 г',
    vaccinated: true,
    passport: true
  },
  {
    id: 'reptile-1',
    name: 'Зигзаг',
    type: 'reptile',
    breed: 'Бородатая агама',
    age: '2 года',
    gender: 'male',
    price: 12000,
    description: 'Зигзаг - дружелюбная бородатая агама, которая любит общение с человеком. Спокойный характер делает его отличным питомцем даже для начинающих.',
    careInstructions: 'Требуется террариум с УФ-лампой, правильный температурный режим и разнообразное питание (насекомые и растения).',
    images: [
      'https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Спокойный', 'Неприхотливый', 'Дружелюбный', 'Интересный'],
    weight: '300 г',
    vaccinated: false,
    passport: true
  },
  {
    id: 'fish-1',
    name: 'Немо',
    type: 'fish',
    breed: 'Рыба-клоун',
    age: '6 месяцев',
    gender: 'male',
    price: 2500,
    description: 'Немо - яркая и активная рыба-клоун, которая станет украшением любого аквариума. Мирный характер позволяет содержать с другими рыбами.',
    careInstructions: 'Необходим аквариум от 100 литров, морская вода, стабильные параметры воды и регулярное кормление специальным кормом.',
    images: [
      'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Яркий', 'Активный', 'Миролюбивый', 'Неприхотливый'],
    weight: '30 г'
  },
  {
    id: 'rodent-2',
    name: 'Пиксель',
    type: 'rodent',
    breed: 'Шиншилла',
    age: '1 год',
    gender: 'female',
    price: 8000,
    description: 'Пиксель - очаровательная шиншилла с мягкой серой шерсткой. Активная и любознательная, любит играть и купаться в специальном песке.',
    careInstructions: 'Нужна просторная клетка, специальный песок для купания, сено, веточки для стачивания зубов и прохладное помещение.',
    images: [
      'https://images.pexels.com/photos/3882503/pexels-photo-3882503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Активная', 'Чистоплотная', 'Ласковая', 'Тихая'],
    weight: '600 г',
    vaccinated: true,
    passport: true
  },
  {
    id: 'dog-3',
    name: 'Марс',
    type: 'dog',
    breed: 'Хаски',
    age: '4 месяца',
    gender: 'male',
    price: 35000,
    description: 'Марс - энергичный щенок хаски с красивым окрасом и голубыми глазами. Очень активный и дружелюбный, нуждается в большом количестве физической активности.',
    careInstructions: 'Требуются длительные прогулки, регулярное расчесывание шерсти, правильное питание и активные игры.',
    images: [
      'https://images.pexels.com/photos/3715587/pexels-photo-3715587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Энергичный', 'Дружелюбный', 'Умный', 'Активный'],
    weight: '6 кг',
    vaccinated: true,
    passport: true
  },
  {
    id: 'reptile-2',
    name: 'Локи',
    type: 'reptile',
    breed: 'Королевский питон',
    age: '1 год',
    gender: 'male',
    price: 25000,
    description: 'Локи - молодой королевский питон с красивым узором. Спокойный и неагрессивный, отлично подходит для начинающих любителей рептилий.',
    careInstructions: 'Необходим террариум с контролем температуры и влажности, укрытия, регулярное кормление и чистая вода.',
    images: [
      'https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    features: ['Спокойный', 'Неагрессивный', 'Красивый', 'Неприхотливый'],
    weight: '1.2 кг',
    vaccinated: false,
    passport: true
  }
];

export const getPopularPets = (): Pet[] => {
  return pets.slice(0, 4);
};

export const getPetsByType = (type: Pet['type']): Pet[] => {
  return pets.filter(pet => pet.type === type);
};

export const getPetById = (id: string): Pet | undefined => {
  return pets.find(pet => pet.id === id);
};

export const getSimilarPets = (petId: string, count = 3): Pet[] => {
  const currentPet = getPetById(petId);
  if (!currentPet) return [];
  
  return pets
    .filter(pet => pet.id !== petId && pet.type === currentPet.type)
    .slice(0, count);
};

export const searchPets = (query: string): Pet[] => {
  const searchTerm = query.toLowerCase();
  return pets.filter(pet => 
    pet.name.toLowerCase().includes(searchTerm) ||
    pet.breed.toLowerCase().includes(searchTerm) ||
    pet.type.toLowerCase().includes(searchTerm) ||
    pet.features.some(feature => feature.toLowerCase().includes(searchTerm))
  );
};