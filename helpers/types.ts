export interface IProduct {
  _id: string;
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  bought: number;
  imgWidth: number;
  imgHeight: number;
}

export interface ICartProduct {
  name: string;
  price: number;
  quantity: number;
  image: string;
  imgWidth: number;
  imgHeight: number;
}

export interface IProductHistory {
  totalPrice: number;
  products: {
    name: string;
    price: number;
    quantity: number;
  };
}
export interface IUser {
  name: string;
  age: string;
  email: string;
  history: IProductHistory[];
}
