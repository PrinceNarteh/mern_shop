const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getAllProduct = (_req, res, _next) => {
  const products = Product.findAll();
  res.render("shop/index", { products, path: "/", pageTitle: "Home" });
};

exports.productDetails = (req, res, _next) => {
  const { productId } = req.params;
  const product = Product.findById(productId);
  res.render("shop/product-details", {
    product,
    path: "/products/",
    pageTitle: "Product Detail",
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    cart: Cart.getCart(),
    path: "/cart",
    pageTitle: "Cart",
  });
};

exports.addToCart = (req, res, _next) => {
  const product = Product.findById(req.params.productId);
  Cart.save(product);
  res.redirect("/");
};

exports.removeFromCart = (req, res, next) => {
  Cart.removeFromCart(req.params.productId);
  res.redirect("/cart");
};
