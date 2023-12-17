const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactions");

router.route("/getAll").get(getTransactions);

router.route("/add").post(addTransactions);

router.route("/:id").delete(deleteTransactions);

module.exports = router;
