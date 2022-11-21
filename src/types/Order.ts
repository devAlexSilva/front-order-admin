export interface IOrder {
  _id: string,
  table: string,
  status: string,
  products: Array<{
    product: {
      name: string,
      imagePath: string,
      price: number
    },
    quantity: number,
    _id: string
  }>
}