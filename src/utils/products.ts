export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  pictureUrl: string;
  category: string;
}

export interface ProductList {
  product: Product[];
}

//optimisation review on pic links. Should i download them?
const products: ProductList = {
  product: [
    {
      id: 1,
      name: "mobile",
      price: 200,
      description: "Very good mobile, pls buy",
      pictureUrl:"https://www.pngarts.com/files/3/IPhone-X-Download-PNG-Image.png",
      category: "/mobiles"
      
    },
    {
      id: 2,
      name: "laptop",
      price: 400,
      description: "Very good laptop, pls buy",
      pictureUrl:"https://cdn4.iconfinder.com/data/icons/MacBook_Pro/512/leopard.png",
      category: "/laptops"
    },
    {
      id: 3,
      name: "plushie",
      price: 30,
      description: "Very good plushie, pls buy",
      pictureUrl:"https://gear.blizzard.com/media/catalog/product/cache//550x550/a4e40ebdc3e371adff845072e1c73f37/o/v/overwatch-pachimari-plush.png",
      category: "/plushies"
    },
    {
      id: 4,
      name: "life",
      price: 30000000,
      description: "Get a life, pls buy",
      pictureUrl:"https://pngimage.net/wp-content/uploads/2018/06/life-png.png",
      category: "/lifes"
    },
    {
      id: 5,
      name: "gf",
      price: 5000,
      description: "Buying gf, show bob and vagene pls",
      pictureUrl:"https://i.pinimg.com/originals/4d/1a/d4/4d1ad44538eb8a88ab015eb628c10ca0.png",
      category:"/gfs"
    }
  ]
};

export default products;
