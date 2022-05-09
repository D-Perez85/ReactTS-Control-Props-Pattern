  export interface Product {
    id: string;
    img?: string;
    title: string;
  }
  
  export interface ProductContextProps {
    product: Product, 
    counter: number,
    increaseBy:(value:number)=> void,
  }

