export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}
//EXTIENDO DE PRODUCT PORQUE SOLO SE AGREGA UN CAMPO
export interface ProductInCart extends Product {
  count: number;
}
