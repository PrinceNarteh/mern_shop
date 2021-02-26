const products = [];

class Product {
  constructor(title, description, price, imageUrl) {
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
}

module.exports = Product;
