const Product = require("../models/product");

exports.addProductForm = (_req, res, _next) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    edit: false
  });
};

exports.addProduct = (req, res, _next) => {
  const { title, description, price, imageUrl } = req.body;
  const product = new Product({ title, description, price, imageUrl });
  product.save();
  res.redirect("/");
};

exports.editProductForm = (req, res, _next) => {
  const { productId } = req.params;
  const product = Product.findById(productId);
  res.render("admin/add-product", {
    product,
    pageTitle: "Edit Product",
    path: "/admin/add-product",
    edit: true
  });
};

exports.editProduct = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const { productId } = req.params;
  const updatedProduct = new Product({ id: productId, title, description, price, imageUrl });
  updatedProduct.update();
  res.redirect('/');
}

exports.deletePost = (req, res, next) => {
  const { productId } = req.params;
  Product.findByIdAndDelete(productId);
  res.redirect('/');
}
