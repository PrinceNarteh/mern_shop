var express = require("express");
var router = express.Router();
const shopController = require("../controllers/shopController");

/* GET home page. */
router.get("/", shopController.getAllProduct);
router.get("/products/:productId", shopController.productDetails);
router.post("/add-to-cart/:productId", shopController.addToCart);

module.exports = router;
