const cart = {
  products: [],
  totalPrice: 0,
};

const calculateTotalPrice = (cart) => {
  const amount = cart.products.reduce(
    (amount, item) => item.quantity * item.price + amount,
    0
  );
  cart.totalPrice = amount;
};

class Cart {
  static save(product) {
    const products = cart.products;
    const productIndex = products.findIndex((item) => item.id === product.id);

    if (productIndex >= 0) {
      products[productIndex] = {
        ...products[productIndex],
        quantity: products[productIndex].quantity + 1,
      };
      calculateTotalPrice(cart);
    } else {
      product.quantity = 1;
      cart.products.push(product);
      calculateTotalPrice(cart);
    }
  }

  static getCart() {
    return cart;
  }
}

module.exports = Cart;
