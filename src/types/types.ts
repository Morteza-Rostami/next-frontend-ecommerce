
// User
export type User = {
  id: string,
  username: string,
  email: string,
  lastLink: Date | null,
  cart: string,
  createdAt: Date,
  updatedAt: Date,
}

// Product
export type Product = {
  id: string,
  name: string,
  description: string,
  price: number,
  rating: number,
  discount: number,// .4 %
  finalPrice: number,
  inStock: boolean,
  sellCount: number,
  onSale: boolean,
  category: string,
  subcat: string,
  reviews: string[],
  productionDate: Date,
  expiryDate: Date,
  createdAt: Date,
  updatedAt: Date,
};

// Review
export type Review = {

}

// Category
export type Category = {

}

// Subcat
export type Subcat = {

}

// Cart 
export type Cart = {
  id: string,
  items: {product: Product, quantity: number}[],
  total: number,
  createdAt: Date,
  updatedAt: Date,
}

// Order 
export type Order = {

}

