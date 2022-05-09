import {ProductCard as ProductCardHOC} from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImg } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImg } from './ProductImage';
export { ProductTitle } from './ProductTitle';


//Instancia de Product Card para poder asignar los valores al componente de manera interna y no componentizada
export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Imagen: ProductImg,
    Buttons: ProductButtons
})



