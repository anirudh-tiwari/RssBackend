const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "anirudh",
    password: "suman1979",
    database: "rss",
});
var otpGenerator = require('otp-generator')
const API_KEY = process.env.API_KEY;
const bcrypt = require('bcrypt');
const fast2sms = require('fast-two-sms')

const sendController = async (req, res) => {
    try {
        const mobile_number = req.body.mobile_number;
        const otp = otpGenerator.generate(4, { alphabets: false, upperCase: false, specialChars: false });
        const ttl = 500000000000 * 60 * 1000;
        const expires = Date.now() + ttl;
        const data = `${mobile_number}.${otp}.${expires}`;
        const hash = await bcrypt.hash(data, 10);
        const fullHash = `${hash}.${expires}`;
        var options = {authorization : API_KEY , message : `Welcome to ANIRUDH STORE . Use ${otp} as your verification code , otp will expire within 5 minutes. ` ,  numbers : [req.body.mobile_number]} 
        fast2sms.sendMessage(options)
        res.status(200).send({ mobile_number, hash: fullHash, otp })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { sendController }