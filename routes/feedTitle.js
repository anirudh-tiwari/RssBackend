var express = require("express");
var router = express.Router();
const { getFeedTitle } = require("../controller/getFeedTitle");
// const { addBookmark } = require("../controller/addBookmark");
const jwt = require("jsonwebtoken");
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const jwt_decode = require("jwt-decode");

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];

  if (!accessToken) {
    return res.status(403).send("Invalid credentials");
  }

  let payload;
  try {
    payload = jwt.verify(accessToken, JWT_AUTH_TOKEN, (err, user) => {
      if (err) return res.sendStatus(403);
      let decoded = jwt_decode(accessToken);
      req.user = decoded;
    });
    next();
  } catch (e) {
    return res.status(401).send("You need login to access this page");
  }
};

router.get("/get", auth, getFeedTitle);

module.exports = router;

// var express = require("express");
// var router = express.Router();
// let Parser = require("rss-parser");
// let parser = new Parser();
// const { getConnection } = require("../db");

// router.get("/get", async (req, res) => {
//   const query = getConnection();
//   try {
//     var sql = `select id,url from AddLink where userId =${req.user.user_id}`;
//     var product = await query(sql);
//     let title = [];
//     for (const pro of product) {
//       var feed = await parser.parseURL(pro.url);
//       title.push({ id: pro.id, title: feed.title });
//       console.log({ id: pro.id, title: feed.title });
//     }
//     return res.json(title);
//   } catch (err) {
//     console.log(err);
//     return res.json({ status: 500, error: err });
//   }
// });

// module.exports = router;
