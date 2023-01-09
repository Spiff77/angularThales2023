export interface Product{
  id: number,
  name: string, // required
  category: string, // required
  description: string, // required, minLength: 10
  price: number, // required, min: 1
  promo: number,
  active: boolean,
  supplier: any
}
