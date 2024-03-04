interface IProduct {
  id: string;
  name: string;
}
class Product {
  getAllProducts(): any {
    return new Promise((resolve:any, reject: any) => {
      resolve( [
        { id: "1", name: "Product 1" },
        { id: "2", name: "Product 2" },
        { id: "3", name: "Product 3" }
      ])
    })
  }
}

const product = new Product();
export default product;
