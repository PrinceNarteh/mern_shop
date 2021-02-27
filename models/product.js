let products = [];

class Product {
  constructor({ id = null, title, description, price, imageUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    this.id = Math.floor(Math.random() * 10000).toString();
    products.push(this);
  }

  static findAll() {
    return products;
  }

  static findById(id) {
    return products.find((product) => product.id === id);
  }

  update() {
    const editedProduct = products.findIndex(
      (product) => product.id === this.id
    );
    console.log(this);
    products[editedProduct] = this;
  }

  static findByIdAndDelete(id) {
    products = products.filter((product) => product.id !== id);
  }
}

module.exports = Product;
