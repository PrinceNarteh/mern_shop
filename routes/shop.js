var express = require("express");
var router = express.Router();
const shopController = require("../controllers/shopController");

/* GET home page. */
router.route("/").get(shopController.getAllProduct);
router.route("/products/:productId").get(shopController.productDetails);

module.exports = router;
