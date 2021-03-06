var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");

/* GET users listing. */
router
  .route("/add-product")
  .get(adminController.addProductForm)
  .post(adminController.addProduct);

router
  .route("/edit-product/:productId")
  .get(adminController.editProductForm)
  .post(adminController.editProduct);

router.post("/delete-product/:productId", adminController.deletePost);

module.exports = router;
