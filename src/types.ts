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

export interface Product {
  id: string;
  name: string;
  category: 'food' | 'accessories' | 'toys' | 'care' | 'housing';
  petType: 'cat' | 'dog' | 'bird' | 'rodent' | 'reptile' | 'fish' | 'universal';
  price: number;
  oldPrice?: number;
  description: string;
  features: string[];
  images: string[];
  available: boolean;
  stock: number;
  brand: string;
  weight?: string;
  popular?: boolean;
  new?: boolean;
}