export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ProductList {
  product: Product[];
}

const products: ProductList = {
  product: [
    {
      id: 1,
      name: "mobile",
      price: 200,
      description: "very good mobile, pls buy"
    },
    {
      id: 2,
      name: "laptop",
      price: 400,
      description: "very good laptop, pls buy"
    },
    {
      id: 3,
      name: "plushie",
      price: 30,
      description: "very good plushie, pls buy"
    },
    {
      id: 4,
      name: "life",
      price: 30000000,
      description: "get a life, pls buy"
    },
    {
      id: 5,
      name: "gf",
      price: 5000,
      description: "buying gf"
    }
  ]
};

export default products;
