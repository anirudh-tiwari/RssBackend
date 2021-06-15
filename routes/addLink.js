var express = require('express');
var router = express.Router();
const { addLinkCreate } = require("../controller/createAddLink")
const { addLinkGet } = require("../controller/getAddLink")
const jwt = require("jsonwebtoken");
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const jwt_decode = require('jwt-decode');

const auth =  (req, res , next) => {

    const authHeader = req.headers['authorization']
    const accessToken = authHeader && authHeader.split(' ')[1]

    if (!accessToken){
        return res.status(403).send("Invalid credentials")
    }

    let payload
    try{
        payload = jwt.verify(accessToken, JWT_AUTH_TOKEN , (err,user)=>{
            if (err) return res.sendStatus(403)
            let decoded = jwt_decode(accessToken);
            req.user = decoded
        })
        next()
    }
    catch(e){
        return res.status(401).send("You need login to access this page")
    }                         
}

router.post("/cre", auth , addLinkCreate);

router.post("/get", auth ,addLinkGet);


module.exports = router;