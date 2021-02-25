const Product = require("../models/product");

exports.getAllProduct = (_req, res, _next) => {
  const products = Product.findAll();
  res.render("shop/index", { products, path: '/', pageTitle: 'Home' });
};

exports.productDetails = (req, res, _next) => {
  const productId = req.params;
  const product = Product.findById(productId);
  res.render("shop/product-details", { product, path: '/products/', pageTitle: 'Product Detail' });
}
