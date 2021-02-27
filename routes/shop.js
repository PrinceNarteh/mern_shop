var express = require("express");
var router = express.Router();
const shopController = require("../controllers/shopController");

/* GET home page. */
router.get("/", shopController.getAllProduct);
router.get("/products/:productId", shopController.productDetails);
router.get("/cart", shopController.getCart);
router.post("/add-to-cart/:productId", shopController.addToCart);
router.post("/remove-from-cart/:productId", shopController.removeFromCart);

module.exports = router;
