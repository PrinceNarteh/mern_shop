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
  const product = new Product(title, description, price, imageUrl);
  product.save();
  res.redirect("/");
};

exports.editProductForm = (req, res, _next) => {
  const { productId } = req.params;
  const product = Product.findById(productId);
  console.log(product);
  res.render("admin/add-product", {
    product,
    pageTitle: "Edit Product",
    path: "/admin/add-product",
    edit: true
  });
};
