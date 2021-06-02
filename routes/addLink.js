var express = require('express');
var router = express.Router();
const { addLinkCreate } = require("../controller/createAddLink")
const { addLinkGet } = require("../controller/getAddLink")


router.post("/create", addLinkCreate);

router.post("/get", addLinkGet);


module.exports = router;