export interface IProductType {
  id: number;
  productName: string;
  productImage: string;
  productImageBack: string;
  productPrice: number;
  productPriceSale?: number;
  colorList: IColorType[];
  height?: number[];
  age?: string[];
}
export interface IColorType {
  name: string;
  code: string;
}
