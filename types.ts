
export type Category = 'pizza' | 'drink';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
