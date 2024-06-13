export interface Product {
  _id: string;
  productName: string;
  offerPrice: number;
  price: number;
  category?: string;
  subCategory?: string;
  type?: string;
  size?: string[];
  color?: string[];
  image: { img: { data: Uint8Array } }[];
  details: string;
  description: string;
}

export interface ProductProps {
  products: Product[];
  currentPage: number;
}

// export interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   offerPrice: number;
//   productId: string;
//   discount: number;
//   category: string;
//   subCategory: string;
//   type: string;
//   size: string[];
//   color: string[];
//   image: Image[];
//   details: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

export interface Image {
  name: string;
  img: {
    type: string;
    data: Uint8Array;
  };
  _id: string;
}

export interface Address {
  name: string;
  phone: number;
  address: string;
  town: string;
  city: string;
  pincode: number;
  state: string;
}

export interface Order {
  _id: string;
  order_id: string;
  address: Address;
  productId: Product;
  quantity: number;
  size: string;
  color: string;
  status: string;
  userId: {
    _id: string;
  };
}
