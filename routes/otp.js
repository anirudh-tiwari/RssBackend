var express = require('express');
var router = express.Router();
const { sendController } = require("../controller/sendOtp")
const { verifyController } = require("../controller/verifyOtp")


router.post("/send", sendController);

router.post("/verify", verifyController);

module.exports = router;