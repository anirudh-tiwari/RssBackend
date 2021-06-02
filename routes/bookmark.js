var express = require('express');
var router = express.Router();
const { addBookmark } = require("../controller/addBookmark")
const { getBookmark } = require("../controller/getBookmark")


router.post("/add", addBookmark);
 
router.post("/get", getBookmark);


module.exports = router;