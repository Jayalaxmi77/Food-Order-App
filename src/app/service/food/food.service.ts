import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // To get food details
  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  // Get all foods by Tag method
  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  // Data of Food Tags filter
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'Idli', count: 1 },
      { name: 'Samosa', count: 1 },
      { name: 'Rolls', count: 1 },
      { name: 'Chowmein', count: 1 },
      { name: 'Momos', count: 1 },
      { name: 'Chicken', count: 1 },
      { name: 'Sweet', count: 1 },
    ]
  }

  // Data of Foods
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chowmein',
        price: 90.00,
        cookTime: '15-25',
        favourite: true,
        origins: ['Chinese'],
        star: 4,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Chowmein'],
      },
      {
        id: 2,
        name: 'Samosa',
        price: 75.00,
        cookTime: '15-25',
        favourite: false,
        origins: ['Indian'],
        star: 4,
        imageUrl: '/assets/samosa.jpg',
        tags: ['Breakfast', 'Samosa'],
      },
      {
        id: 3,
        name: 'Gulab Jamun',
        price: 50.00,
        cookTime: '15-25',
        favourite: true,
        origins: ['Indian'],
        star: 4,
        imageUrl: '/assets/jamun.jpg',
        tags: ['Dessert', 'Sweet'],
      },
      {
        id: 4,
        name: 'Idli-Sambar',
        price: 79.00,
        cookTime: '15-25',
        favourite: false,
        origins: ['Indian'],
        star: 3,
        imageUrl: '/assets/food-4.jpg',
        tags: ['South', 'Idli'],
      },

      {
        id: 5,
        name: 'Paneer Roll',
        price: 108.00,
        cookTime: '15-25',
        favourite: false,
        origins: ['Chinese'],
        star: 3,
        imageUrl: '/assets/vegroll.jpg',
        tags: ['FastFood', 'Rolls'],
      },
      {
        id: 6,
        name: 'Chicken Momo',
        price: 230.00,
        cookTime: '15-25',
        favourite: true,
        origins: ['Chinese'],
        star: 4,
        imageUrl: '/assets/momos.jpg',
        tags: ['FastFood', 'Momos'],
      },
      {
        id: 7,
        name: 'Chicken Lolipop',
        price: 270.00,
        cookTime: '15-25',
        favourite: true,
        origins: ['Chinese'],
        star: 5,
        imageUrl: '/assets/lolipop.jpg',
        tags: ['FastFood', 'Chicken'],
      },



    ]
  }
}
